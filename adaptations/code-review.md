# Adaptation Record: Matt Pocock Code Review

- Repository: https://github.com/mattpocock/skills
- Path / commit: `skills/engineering/code-review` at `5b15a47f2d7150f545fbcacbfe381787fc0230dc`
- Accessed: 2026-08-23
- License: MIT, Copyright (c) 2026 Matt Pocock.
- Decision: Adapt as a portable, read-only `code-review` Skill.

XOPC preserves independent requirement/correctness and standards/maintainability axes. Mandatory repository setup, a particular issue tracker, and parallel subagents are removed. The adaptation adds safe merge-base inference, changed-line evidence, severity calibration, false-positive controls, explicit no-findings behavior, and a prohibition on editing during a review-only request.
