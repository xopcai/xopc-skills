---
name: github-actions-ci-fix
description: Diagnose and repair failing GitHub Actions checks on a pull request using gh metadata and logs, a focused root-cause plan, approval before code changes, and post-fix verification. Do not use for non-GitHub CI providers, creating new CI systems, or unrelated local test failures.
metadata:
  version: "0.18.2"
---

# GitHub Actions CI Fix

Inspect GitHub Actions evidence before changing code. External check providers are report-only unless the user explicitly expands scope.

## Inputs

- repository path, defaulting to the current directory;
- PR number or URL, defaulting to the current branch PR;
- authenticated `gh` access with permission to read checks and logs.

Authentication is a user-controlled prerequisite. Never print tokens or modify auth configuration on the user's behalf.

## Inspect

Run the bundled helper, resolved relative to this Skill:

```bash
python3 <skill-dir>/scripts/inspect_pr_checks.py --repo . --pr <number-or-url> --json
```

The helper handles GitHub CLI field drift, retrieves Actions run logs, falls back to job logs when possible, extracts a bounded failure window, and returns nonzero while failures remain.

For every failing check, distinguish:

- an actionable GitHub Actions failure with logs;
- a pending or unavailable log;
- an external provider URL outside this workflow;
- infrastructure or flaky failure not supported by the local diff.

## Plan and authorize

Summarize the failing check, run URL, relevant log evidence, likely root cause, confidence, and the smallest validation path. Propose a focused plan and wait for explicit approval before editing code. Do not treat permission to inspect CI as permission to push, rerun workflows, or mutate repository settings.

## Fix and verify

After approval, make the narrowest source change tied to the observed failure. Run the closest local reproduction and surrounding tests. Recheck PR status when authorized, and separate new, pending, external, and resolved checks.

Report changed files, local evidence, current check state, unresolved flakiness, and anything not verified. Do not claim success because a local command passed while the targeted Actions check remains failing or pending.
