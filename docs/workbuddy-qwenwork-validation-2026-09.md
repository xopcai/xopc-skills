# WorkBuddy / QwenWork intake verification

Date: 2026-09-13. Scope: twelve new original experimental packages and their catalog integration. This is a structural, packaging and fixture-oracle report, not an independent behavioral baseline.

## Executed checks

| Check | Result | Limits |
|---|---|---|
| `npm run validate` | Passed; 104 scenarios, 13 categories, 102 Skills | Checks repository structure and fixture presence, not agent decisions |
| Skill Creator `quick_validate.py` | Passed for all 12 new packages | Frontmatter/package checks only |
| `npm run test:scripts` | Passed | Existing gateway, connector, notebook, CI and ownership regressions; new packages add no scripts |
| `npm run check:voltagent` | Passed; 16 existing selections current | No upstream revision was changed |
| `npm run test:store-release` | Passed; repeated archives byte-identical and untracked test file excluded | Used a temporary Git index to include newly authored packages without staging the user's checkout |
| Preview release manifest | 102 entries and 103 outer ZIP files (102 packages plus manifest) | Used an explicit synthetic test commit; archive removed; not a production release |
| Real Git index SHA-256 before/after preview | Identical | No real staging or commits performed |
| `git diff --check` | Passed | Whitespace check |

New packages provide 241 trigger fixtures (120 positive, 121 negative) and 60 task fixtures. The negative set includes SOP writing next to long-form editorial writing. Fixture counts are not pass rates.

## Executed numerical fixture oracles

Python date and arithmetic checks confirmed the following expected answers. These validate the fixture's expected values; they do not test whether a future agent will follow the Skill correctly.

| Fixture | Verified expected value |
|---|---|
| Contract expiry 2026-12-31, notice 30 calendar days before | 2026-12-01 |
| Budget 100 × 20, actual 120 × 18 | Budget 2000, actual 2160, variance +160 |
| Price/volume bridge | Volume +400 plus rate -240 equals +160 |
| Six months actual 600 plus remaining six months at 120 | Forecast 1320 |
| Bank 1000 plus in-transit 200 less outstanding checks 50 | Adjusted bank 1150 |
| AR control 10000 versus subledger 9800 | Unresolved difference 200 |

The first two budget rows share one assertion; five arithmetic/date assertions ran in total.

## Boundary review

- PRD authoring ends at a reviewable specification; the existing `spec-to-work-items` starts with an approved specification.
- Budget variance owns plan/actual comparisons; financial-statement analysis owns statement ratios, and month-end review owns close evidence.
- Contract extraction distinguishes expiry, notice, conditional dates, drafts and amendments; it does not assert legal enforceability.
- Onboarding follows a confirmed hire and does not rank applicants, provision accounts or embed identity/bank details in shared plans.
- Browser and handoff workflows preserve uncertain mutation outcomes and require read-back before retries.
- Markdown conversion reports partial/failed inputs; a converter's nonempty output is not completeness evidence.
- Long-form nonfiction excludes operational SOPs; fiction maintains invented story canon separately from factual sources.
- Prompt improvement reports missing tools and unrun comparisons instead of fabricating performance gains.

This review was performed by the authoring agent, not an independent reviewer.

## Still required before Stable

Run matched no-Skill/with-Skill tasks on the target product, measure held-out trigger confusion and artifact accuracy, test the available browser/conversion/model runtimes, and assign independent finance, contracts, HR and editorial reviewers as relevant. No model-behavior pass rate, user time saving, live account operation or production deployment is claimed.

## UI evidence limits

WorkBuddy recommendations were read through Computer Use in the user's Chrome after native input failed. QwenWork remained on its login page when checked again; only its public documentation and homepage informed the QwenWork comparison. Full-market coverage is not established. See the [intake audit](workbuddy-qwenwork-intake-2026-09.md).
