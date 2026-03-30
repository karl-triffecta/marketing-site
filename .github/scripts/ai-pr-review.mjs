const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const REPO = process.env.REPO;
const PR_NUMBER = process.env.PR_NUMBER;
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-5-mini";
const MAX_REVIEW_FILES = Number(process.env.MAX_REVIEW_FILES || 40);
const MAX_DIFF_CHARS = Number(process.env.MAX_DIFF_CHARS || 180000);
const MAX_TOTAL_CHANGED_LINES = Number(
  process.env.MAX_TOTAL_CHANGED_LINES || 3500,
);
const MAX_TOTAL_FILES = Number(process.env.MAX_TOTAL_FILES || 200);
const MAX_ISSUE_COMMENTS_SCAN = Number(process.env.MAX_ISSUE_COMMENTS_SCAN || 500);
const BOT_MARKER = "<!-- ai-pr-review-bot -->";

if (!GITHUB_TOKEN || !REPO || !PR_NUMBER) {
  throw new Error("Missing required environment variables.");
}

const GITHUB_API = "https://api.github.com";
const OPENAI_API = "https://api.openai.com/v1/responses";

const githubHeaders = {
  Authorization: `Bearer ${GITHUB_TOKEN}`,
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
};

async function github(path, options = {}) {
  const response = await fetch(`${GITHUB_API}${path}`, {
    ...options,
    headers: {
      ...githubHeaders,
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`GitHub API error ${response.status}: ${text}`);
  }

  if (response.status === 204) return null;
  return response.json();
}

function shouldIgnoreFile(filename) {
  const ignoredPatterns = [
    "package-lock.json",
    "pnpm-lock.yaml",
    "yarn.lock",
    "bun.lock",
    "dist/",
    "build/",
    ".next/",
    "coverage/",
    ".snap",
    ".min.js",
  ];

  return ignoredPatterns.some((pattern) => filename.includes(pattern));
}

function shouldExcludeFromLlm(filename) {
  const lower = filename.toLowerCase();
  const pathParts = lower.split("/").filter(Boolean);
  const baseName = pathParts[pathParts.length - 1] || "";

  if (baseName === ".npmrc" || baseName === ".yarnrc") return true;

  // Exclude dot-env files like .env, .env.local, .env.production.
  if (/^\.env(\..+)?$/i.test(baseName)) return true;

  // Exclude key/cert-like file extensions.
  if (/\.(pem|key|p12|pfx|crt|cer)$/i.test(baseName)) return true;

  // Exclude common private key filenames.
  if (/^id_(rsa|dsa|ed25519)(\.pub)?$/i.test(baseName)) return true;

  // Exclude explicitly sensitive path segments.
  if (pathParts.includes(".ssh")) return true;
  if (pathParts.some((part) => /^(secret|secrets|credential|credentials)$/i.test(part))) {
    return true;
  }

  return false;
}

function truncate(text, maxChars) {
  if (text.length <= maxChars) return text;
  return `${text.slice(0, maxChars)}\n\n[truncated]`;
}

function normalizeWhitespace(text) {
  return text.replace(/\r\n/g, "\n").trim();
}

function extractAuthorContext(pr) {
  const rawBody = typeof pr.body === "string" ? normalizeWhitespace(pr.body) : "";
  if (!rawBody) {
    return {
      rawBody: "(none provided)",
      summary: "Author did not provide context.",
      signals: [],
    };
  }

  const lines = rawBody.split("\n");
  const signals = [];
  let currentHeading = "";
  let currentBlock = [];

  const flushBlock = () => {
    if (!currentHeading || currentBlock.length === 0) return;
    const value = currentBlock.join(" ").replace(/\s+/g, " ").trim();
    if (value) signals.push(`- ${currentHeading}: ${value}`);
  };

  for (const line of lines) {
    const headingMatch = line.match(/^\s{0,3}#{1,6}\s+(.+?)\s*$/);
    if (headingMatch) {
      flushBlock();
      currentHeading = headingMatch[1].trim();
      currentBlock = [];
      continue;
    }

    const checklistMatch = line.match(/^\s*[-*]\s+\[(x|X| )\]\s+(.+)$/);
    if (checklistMatch) {
      const status = checklistMatch[1].toLowerCase() === "x" ? "done" : "todo";
      const text = checklistMatch[2].trim();
      signals.push(`- checklist (${status}): ${text}`);
      continue;
    }

    const bulletMatch = line.match(/^\s*[-*]\s+(.+)$/);
    if (bulletMatch) {
      const text = bulletMatch[1].trim();
      if (text) signals.push(`- note: ${text}`);
      continue;
    }

    if (currentHeading && line.trim()) {
      currentBlock.push(line.trim());
    }
  }
  flushBlock();

  const summary = signals.length
    ? truncate(signals.join("\n"), 5000)
    : "PR description was provided but no structured intent sections were detected.";

  return {
    rawBody,
    summary,
    signals,
    hasAuthorContext: Boolean(rawBody),
  };
}

async function getPrData() {
  const pr = await github(`/repos/${REPO}/pulls/${PR_NUMBER}`);
  const files = [];

  for (let page = 1; ; page += 1) {
    const batch = await github(
      `/repos/${REPO}/pulls/${PR_NUMBER}/files?per_page=100&page=${page}`,
    );
    files.push(...batch);
    if (batch.length < 100 || files.length >= MAX_TOTAL_FILES) break;
  }

  return { pr, files };
}

function summarizeScopeForHumans(pr, files, reason) {
  const totalChangedLines = (pr.additions || 0) + (pr.deletions || 0);
  return [
    "## Summary",
    "PR is too large for a cost-effective AI sanity pass.",
    "",
    "## Findings",
    "- None from automated scan (skipped due to size limits).",
    "",
    "## Recommendation",
    "investigate",
    "",
    "## Scope",
    `- Files in PR: ${files.length}`,
    `- Added lines: ${pr.additions || 0}`,
    `- Deleted lines: ${pr.deletions || 0}`,
    `- Total changed lines: ${totalChangedLines}`,
    `- Skip reason: ${reason}`,
  ].join("\n");
}

function buildReviewInput(pr, files) {
  const authorContext = extractAuthorContext(pr);
  const reviewableFiles = files
    .filter(
      (file) =>
        file.patch &&
        !shouldIgnoreFile(file.filename) &&
        !shouldExcludeFromLlm(file.filename),
    )
    .slice(0, MAX_REVIEW_FILES);

  const excludedSensitiveFiles = files
    .filter((file) => shouldExcludeFromLlm(file.filename))
    .map((file) => file.filename);
  const authorContextLabel = authorContext.hasAuthorContext
    ? authorContext.signals.length > 0
      ? `Detected ${authorContext.signals.length} author context signal(s).`
      : "Author provided context (unstructured text)."
    : "Author did not provide context.";

  const totalChangedLines = (pr.additions || 0) + (pr.deletions || 0);
  if (files.length > MAX_TOTAL_FILES) {
    return {
      shouldSkipModel: true,
      authorContextLabel,
      skipMessage: summarizeScopeForHumans(
        pr,
        files,
        `files exceed MAX_TOTAL_FILES (${MAX_TOTAL_FILES})`,
      ),
    };
  }
  if (totalChangedLines > MAX_TOTAL_CHANGED_LINES) {
    return {
      shouldSkipModel: true,
      authorContextLabel,
      skipMessage: summarizeScopeForHumans(
        pr,
        files,
        `changed lines exceed MAX_TOTAL_CHANGED_LINES (${MAX_TOTAL_CHANGED_LINES})`,
      ),
    };
  }

  if (reviewableFiles.length === 0) {
    return {
      shouldSkipModel: false,
      authorContextLabel,
      input: null,
    };
  }

  const diffText = reviewableFiles
    .map((file) => {
      return [
        `FILE: ${file.filename}`,
        `STATUS: ${file.status}`,
        `ADDITIONS: ${file.additions}`,
        `DELETIONS: ${file.deletions}`,
        "PATCH:",
        file.patch,
      ].join("\n");
    })
    .join("\n\n---\n\n");

  return {
    shouldSkipModel: false,
    authorContextLabel,
    input: `
You are a careful senior engineer reviewing a pull request.

Goal:
- Do a sanity check and prioritize high-impact risks only.
- Keep output short when there are no major concerns.

Focus only on:
- likely bugs
- risky logic changes
- obvious security issues
- missing validation or error handling
- obvious test gaps
- accidental breaking changes

Rules:
- do not nitpick formatting or style
- do not invent issues
- only mention problems you can justify from the diff
- consider the PR author context (intent, scope, caveats, test notes) when judging risk
- if a finding contradicts author intent, mention that clearly
- include file paths in findings when possible
- if there are no major concerns, keep Findings to a single "- None." bullet
- keep the answer concise and actionable
- recommendation policy:
  - approve: no findings, or low severity findings only
  - comment: any medium severity finding and no high severity findings
  - investigate: any high severity finding

Return markdown in exactly this structure:

## Summary
<1-3 sentences>

## Findings
- <severity: high|medium|low> <issue with file path and rationale>

## Recommendation
<approve | comment | investigate>

PR title:
${pr.title}

PR author context summary:
${authorContext.summary}

PR body (raw):
${truncate(authorContext.rawBody, 15000)}

Excluded files (not sent to the model due to sensitive filename patterns):
${excludedSensitiveFiles.length ? excludedSensitiveFiles.map((name) => `- ${name}`).join("\n") : "- None"}

Changed files:
${truncate(diffText, MAX_DIFF_CHARS)}
`,
  };
}

async function callOpenAI(input) {
  if (!OPENAI_API_KEY) {
    throw new Error("Missing OPENAI_API_KEY environment variable.");
  }

  const response = await fetch(OPENAI_API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      input,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`OpenAI API error ${response.status}: ${text}`);
  }

  const data = await response.json();

  const text = extractOpenAIText(data);
  const usage = data.usage
    ? JSON.stringify({
        input_tokens: data.usage.input_tokens,
        output_tokens: data.usage.output_tokens,
        total_tokens: data.usage.total_tokens,
      })
    : "unknown";

  console.log(
    `[openai] model=${data.model || OPENAI_MODEL} id=${data.id || "unknown"} usage=${usage} output_chars=${text.length}`,
  );

  if (!text.trim()) {
    throw new Error(
      `OpenAI returned an empty review payload. Partial response: ${truncate(
        JSON.stringify(data),
        1500,
      )}`,
    );
  }

  return text;
}

function extractOpenAIText(data) {
  if (typeof data.output_text === "string" && data.output_text.trim()) {
    return data.output_text;
  }

  if (!Array.isArray(data.output)) return "";

  const chunks = [];
  for (const item of data.output) {
    if (!item || !Array.isArray(item.content)) continue;
    for (const part of item.content) {
      if (!part) continue;
      if (typeof part.text === "string") chunks.push(part.text);
      if (
        part.type === "output_text" &&
        typeof part.output_text === "string"
      ) {
        chunks.push(part.output_text);
      }
    }
  }

  return chunks.join("\n").trim();
}

function normalizeRecommendation(markdown) {
  const lines = markdown.split("\n");
  const findingsHeaderIndex = lines.findIndex(
    (line) => line.trim().toLowerCase() === "## findings",
  );
  const recommendationHeaderIndex = lines.findIndex(
    (line) => line.trim().toLowerCase() === "## recommendation",
  );

  if (findingsHeaderIndex === -1 || recommendationHeaderIndex === -1) {
    return markdown;
  }

  const findingsLines = lines
    .slice(findingsHeaderIndex + 1, recommendationHeaderIndex)
    .map((line) => line.trim())
    .filter((line) => line.startsWith("-"));

  let hasHigh = false;
  let hasMedium = false;
  let hasLow = false;
  let hasNone = false;

  for (const finding of findingsLines) {
    const value = finding.toLowerCase();
    if (value.includes("none")) hasNone = true;
    if (value.includes("high:")) hasHigh = true;
    if (value.includes("medium:")) hasMedium = true;
    if (value.includes("low:")) hasLow = true;
  }

  let recommendation = "comment";
  if (hasHigh) {
    recommendation = "investigate";
  } else if (hasMedium) {
    recommendation = "comment";
  } else if (hasLow || hasNone || findingsLines.length === 0) {
    recommendation = "approve";
  }

  const nextHeaderIndex = lines.findIndex(
    (line, idx) =>
      idx > recommendationHeaderIndex && line.trim().toLowerCase().startsWith("## "),
  );
  const recommendationEndIndex =
    nextHeaderIndex === -1 ? lines.length : nextHeaderIndex;

  const result = [
    ...lines.slice(0, recommendationHeaderIndex + 1),
    recommendation,
    ...lines.slice(recommendationEndIndex),
  ];

  return result.join("\n");
}

function applyTrafficLightFormatting(markdown) {
  const lines = markdown.split("\n");
  const findingsHeaderIndex = lines.findIndex(
    (line) => line.trim().toLowerCase() === "## findings",
  );
  const recommendationHeaderIndex = lines.findIndex(
    (line) => line.trim().toLowerCase() === "## recommendation",
  );

  if (findingsHeaderIndex !== -1 && recommendationHeaderIndex !== -1) {
    for (let i = findingsHeaderIndex + 1; i < recommendationHeaderIndex; i += 1) {
      const trimmed = lines[i].trim();
      if (trimmed.startsWith("- high:")) {
        lines[i] = lines[i].replace(/- high:/i, "- 🔴 high:");
      } else if (trimmed.startsWith("- medium:")) {
        lines[i] = lines[i].replace(/- medium:/i, "- 🟠 medium:");
      } else if (trimmed.startsWith("- low:")) {
        lines[i] = lines[i].replace(/- low:/i, "- 🟢 low:");
      }
    }

    for (let i = recommendationHeaderIndex + 1; i < lines.length; i += 1) {
      const trimmed = lines[i].trim().toLowerCase();
      if (!trimmed) continue;
      if (trimmed.startsWith("investigate")) {
        lines[i] = "🛑 investigate";
      } else if (trimmed.startsWith("comment")) {
        lines[i] = "💬 comment";
      } else if (trimmed.startsWith("approve")) {
        lines[i] = "✅ approve";
      }
      break;
    }
  }

  return lines.join("\n");
}

async function findExistingBotComment() {
  const allComments = [];
  let scanTruncated = false;
  for (let page = 1; ; page += 1) {
    const comments = await github(
      `/repos/${REPO}/issues/${PR_NUMBER}/comments?per_page=100&page=${page}`,
    );
    allComments.push(...comments);
    if (allComments.length >= MAX_ISSUE_COMMENTS_SCAN) {
      scanTruncated = true;
      break;
    }
    if (comments.length < 100) {
      break;
    }
  }

  if (scanTruncated) {
    console.warn(
      `[github] comment scan truncated at ${MAX_ISSUE_COMMENTS_SCAN} comments; older bot comments may be missed.`,
    );
  }

  // Prefer the newest matching marker comment to avoid stale updates.
  const newestFirst = [...allComments].reverse();
  return newestFirst.find((comment) => {
    return typeof comment.body === "string" && comment.body.includes(BOT_MARKER);
  });
}

async function createComment(body) {
  return github(`/repos/${REPO}/issues/${PR_NUMBER}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ body }),
  });
}

async function updateComment(commentId, body) {
  return github(`/repos/${REPO}/issues/comments/${commentId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ body }),
  });
}

async function main() {
  const { pr, files } = await getPrData();

  const reviewState = buildReviewInput(pr, files);
  let review = "";

  if (reviewState.shouldSkipModel) {
    review = reviewState.skipMessage;
  } else if (!reviewState.input) {
    review = [
      "## Summary",
      "No reviewable diff hunks were found after ignore rules.",
      "",
      "## Findings",
      "- None.",
      "",
      "## Recommendation",
      "approve",
    ].join("\n");
  } else {
    review = await callOpenAI(reviewState.input);
    review = normalizeRecommendation(review);
  }
  review = applyTrafficLightFormatting(review);

  const body = [
    BOT_MARKER,
    "## AI PR Review",
    `Author context: ${reviewState.authorContextLabel}`,
    "",
    review,
    "",
    "_Automated shallow review: intended as a sanity check, not a blocking approval._",
  ].join("\n");

  const existingComment = await findExistingBotComment();

  if (existingComment) {
    await updateComment(existingComment.id, body);
    console.log("Updated existing bot comment.");
  } else {
    await createComment(body);
    console.log("Created new bot comment.");
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
