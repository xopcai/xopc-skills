# Adaptation Record: OpenAI GitHub Actions CI Fix

- Repository: https://github.com/openai/plugins
- Path / commit: `plugins/github/skills/gh-fix-ci` at `11c74d6ba24d3a6d48f54a194cd00ef3beea18f9`
- Accessed: 2026-08-23
- License: Apache-2.0 in the individual Skill directory.
- Decision: Adapt as portable `github-actions-ci-fix`.

XOPC retains the deterministic Python inspector, GitHub CLI field-drift fallback, bounded failure snippets, pending-log handling, job-log fallback, and external-provider detection. The current Plugin's GitHub app dependency is removed because XOPC distributes a standalone cross-agent Skill. Authentication mutation, code edits, reruns, pushes, repository settings, and external CI access receive separate authorization boundaries.
