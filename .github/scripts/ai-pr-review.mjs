const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const REPO = process.env.REPO;
const PR_NUMBER = process.env.PR_NUMBER;

if (!GITHUB_TOKEN || !OPENAI_API_KEY || !REPO || !PR_NUMBER) {
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

function truncate(text, maxChars) {
  if (text.length <= maxChars) return text;
  return `${text.slice(0, maxChars)}\n\n[truncated]`;
}

async function getPrData() {
  const pr = await github(`/repos/${REPO}/pulls/${PR_NUMBER}`);
  const files = await github(
    `/repos/${REPO}/pulls/${PR_NUMBER}/files?per_page=100`,
  );
  return { pr, files };
}

function buildReviewInput(pr, files) {
  const changedFiles = files
    .filter((file) => file.patch && !shouldIgnoreFile(file.filename))
    .slice(0, 20);

  if (changedFiles.length === 0) {
    return null;
  }

  const diffText = changedFiles
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

  return `
You are a careful senior engineer reviewing a pull request. Your name is Triffecta Sanity Bot.

Review this PR shallowly.
Only focus on:
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
- if there are no meaningful concerns, say that clearly
- keep the answer concise

Return markdown in exactly this structure:

## Summary
<1-3 sentences>

## Findings
- <bullet 1>
- <bullet 2>

## Recommendation
<approve | comment | investigate>

PR title:
${pr.title}

PR body:
${pr.body || "(none provided)"}

Changed files:
${truncate(diffText, 100000)}
`;
}

async function callOpenAI(input) {
  const response = await fetch(OPENAI_API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-5-mini",
      input,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`OpenAI API error ${response.status}: ${text}`);
  }

  const data = await response.json();
  return (
    data.output_text ||
    "## Summary\nNo review generated.\n\n## Findings\n- None.\n\n## Recommendation\ncomment"
  );
}

async function findExistingBotComment() {
  const comments = await github(
    `/repos/${REPO}/issues/${PR_NUMBER}/comments?per_page=100`,
  );

  return comments.find((comment) => {
    return (
      comment.user &&
      comment.user.type === "Bot" &&
      typeof comment.body === "string" &&
      comment.body.includes("<!-- ai-pr-review-bot -->")
    );
  });
}

async function createComment(body) {
  return github(`/repos/${REPO}/issues/${PR_NUMBER}/comments`, {
    method: "POST",
    body: JSON.stringify({ body }),
  });
}

async function updateComment(commentId, body) {
  return github(`/repos/${REPO}/issues/comments/${commentId}`, {
    method: "PATCH",
    body: JSON.stringify({ body }),
  });
}

async function main() {
  const { pr, files } = await getPrData();

  const reviewInput = buildReviewInput(pr, files);

  if (!reviewInput) {
    console.log("No relevant diff content found.");
    return;
  }

  const review = await callOpenAI(reviewInput);

  const body = [
    "<!-- ai-pr-review-bot -->",
    "## AI PR Review",
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
