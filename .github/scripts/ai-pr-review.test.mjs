import test from "node:test";
import assert from "node:assert/strict";

import {
  redactSensitivePatchContent,
  shouldExcludeFromLlm,
} from "./ai-pr-review.mjs";

test("redacts assignment-style secret values", () => {
  const input = `+ const api_key = "abc123secret"\n+ password = hunter2`;
  const { redactedPatch, redactions } = redactSensitivePatchContent(input);

  assert.ok(redactions >= 2);
  assert.equal(redactedPatch.includes("abc123secret"), false);
  assert.equal(redactedPatch.includes("hunter2"), false);
  assert.equal(redactedPatch.includes("[REDACTED]"), true);
});

test("redacts PEM blocks", () => {
  const input = `+ -----BEGIN PRIVATE KEY-----\n+ verysecretmaterial\n+ -----END PRIVATE KEY-----`;
  const { redactedPatch, redactions } = redactSensitivePatchContent(input);

  assert.ok(redactions >= 1);
  assert.equal(redactedPatch.includes("verysecretmaterial"), false);
  assert.equal(redactedPatch.includes("[REDACTED]"), true);
});

test("does not exclude regular source file path", () => {
  assert.equal(shouldExcludeFromLlm("src/components/authentication.js"), false);
});

test("excludes sensitive file patterns", () => {
  assert.equal(shouldExcludeFromLlm(".env.local"), true);
  assert.equal(shouldExcludeFromLlm("ops/.ssh/id_rsa"), true);
});
