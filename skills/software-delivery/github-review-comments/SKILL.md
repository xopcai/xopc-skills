---
name: github-review-comments
description: Triage and address actionable review comments on the GitHub pull request for the current branch, with explicit selection and fresh verification. Use for PR review feedback; do not use for general code review or failing CI diagnosis.
metadata:
  version: "0.18.1"
---

# GitHub Review Comments

Verify the repository, current branch, GitHub authentication, and associated open pull request. Fetch review threads and issue comments, preserving author, URL, file, line, resolution state, and surrounding context.

## Triage before editing

Group duplicates and classify each item as actionable, question, already addressed, obsolete, or requiring user decision. Present a numbered summary. If the user did not identify specific comments, ask which actionable items to address before changing code.

For selected items, inspect the current code and repository rules; comments may be stale or incorrect. Explain any disagreement with evidence instead of blindly implementing it. Make the smallest coherent changes, run focused and relevant regression checks, and report what remains unverified.

Draft concise responses tied to evidence. Posting replies, resolving threads, pushing commits, or otherwise mutating GitHub requires explicit authorization unless the user already requested that exact action. Never resolve a thread solely because code changed; verify that the concern is actually satisfied.
