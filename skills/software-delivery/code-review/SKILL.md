---
name: code-review
description: Review a bounded code change against repository standards and its originating requirement, reporting evidence-linked correctness, scope, and maintainability findings without modifying code. Use for branches, pull requests, commits, or working-tree diffs; do not use for whole-codebase audits or requested implementation.
metadata:
  version: "0.18.2"
---

# Code Review

Review the change, not an imagined rewrite of the system. A review request is read-only unless the user separately asks for fixes.

## Establish the review target

Resolve the fixed point supplied by the user. If none is given, infer the repository's default branch and use its merge-base with `HEAD`; state the comparison. Include staged and unstaged changes when the user asks to review current work.

Confirm the ref resolves, enumerate changed files and commits, and stop if the diff is empty. Do not fetch, checkout, or mutate branches merely to review them.

## Collect review contracts

Read the narrowest applicable sources:

- repository instructions such as `AGENTS.md`, `CONTRIBUTING.md`, or coding standards;
- the issue, specification, acceptance criteria, or user-supplied requirement;
- tests and nearby implementation needed to understand changed behavior.

If no specification is available, review correctness and standards but label requirement coverage as unverified. Repository rules override generic preferences.

## Review independently along two axes

1. **Requirement and correctness:** missing behavior, wrong behavior, unsafe edge cases, scope creep, compatibility breaks, and tests that cannot detect the defect.
2. **Standards and maintainability:** documented-rule violations, misleading names, duplicated logic, unjustified abstraction, inappropriate coupling, and operational risks introduced by the diff.

Parallel review contexts are optional when available; keep the evidence and conclusions for the two axes separate either way. Read [the review contract](references/review-contract.md) before assigning severity.

## Evidence rules

- Every finding must point to a changed line or a directly affected behavior.
- Explain the concrete failure mode and the condition that triggers it.
- Cite the violated requirement or repository rule when one exists.
- Do not report style that automated tooling already enforces unless it causes a real defect.
- Do not promote speculation to a finding. Put unresolved questions in a separate section.
- Inspect tests and call sites before claiming a regression.

## Output

Order findings by severity, with file and tight line location. For each finding provide: title, evidence, impact, triggering condition, and smallest reasonable correction direction. Then report:

- requirement coverage status;
- verification performed and not performed;
- open questions;
- a short count by severity.

If no actionable findings remain, say so directly and still state residual testing or specification gaps.
