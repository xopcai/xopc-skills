# Scenario-organized Skills

Distributed Skills live at `skills/<scenario>/<skill-name>`. The scenario directory is a product boundary; the child directory is the installable Skill package.

| Scenario directory | Primary outcome | Selected Skills |
|---|---|---|
| `decision-research` | Evidence to decision brief | `evidence-based-research` |
| `meeting-execution` | Meeting record to owned execution | `meeting-to-actions` |
| `content-campaign` | Goal to measurable campaign package | `content-campaign-pack` |
| `sales-account-research` | ICP to verified prospect list | `prospect-research` |
| `api-integration` | API or MCP service to validated XOPC integration | `xopc-model-gateway`, `xopc-connector-builder` |
| `software-delivery` | Engineering evidence to safer release | `playwright-webapp-testing`, `supabase-postgres-best-practices`, `react-native-best-practices`, `release-notes` |
| `document-compliance` | Supplied requirements to traceable review | `document-requirements-review` |
| `weekly-planning` | Open loops to a capacity-feasible week | `weekly-planning-review` |

Each `SCENARIO.md` explains the user boundary, why the current Skills were selected, rejected overlaps, and candidates worth watching. A watchlist entry is research evidence, not approval to distribute it.

## Selection rule

1. Define a repeated user job and its acceptance criteria.
2. Search VoltAgent's official-team index first, then source repositories and other markets.
3. Prefer first-party domain expertise, permissive licensing, maintained source, narrow triggers, reusable artifacts, and verifiable outcomes.
4. Adapt only after pinning the source commit and recording XOPC changes in `SOURCE.json`.
5. Reject duplicates: one Skill owns one primary intent; adjacent Skills compose through artifacts.
6. Keep at most 20 Skills per scenario, but add none unless it beats extending an existing Skill.

Scenario directories intentionally do not contain a root `SKILL.md`. This preserves recursive discovery of every child Skill in common Agent Skills installers.
