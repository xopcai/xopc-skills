# Scenario capability map

The official repository organizes Skills around user outcomes. A Skill has exactly one primary scenario group; adjacent Skills must exchange artifacts instead of competing for the same request.

| Scenario group | Directory | User outcome | Current Skills | Exclusions |
|---|---|---|---|---|
| Decision research | `skills/decision-research` | Current evidence becomes a decision brief | `evidence-based-research` | Prospect lists, single-source summaries |
| Meeting execution | `skills/meeting-execution` | Existing notes become decisions and owned actions | `meeting-to-actions` | Scheduling, live transcription, general summaries |
| Content campaign | `skills/content-campaign` | One goal becomes a coherent multi-asset campaign | `content-campaign-pack` | Single-asset writing, ad buying, publishing |
| Sales account research | `skills/sales-account-research` | An ICP becomes a verified prospect list | `prospect-research` | Outreach copy, messaging, CRM writes |
| API integration | `skills/api-integration` | A service becomes a validated XOPC integration | `xopc-model-gateway`, `xopc-connector-builder` | Business workflow design |
| Software delivery | `skills/software-delivery` | A code change or failure becomes safer to ship | `playwright-webapp-testing`, `supabase-postgres-best-practices`, `react-native-best-practices`, `release-notes`, `code-review`, `systematic-debugging`, `github-actions-ci-fix` | General research, threat modeling, or project planning |
| Document compliance | `skills/document-compliance` | A document is traced to supplied requirements | `document-requirements-review` | Legal advice, certification, requirement invention |
| Weekly planning | `skills/weekly-planning` | Open loops become a capacity-feasible week | `weekly-planning-review` | Daily execution, team retrospectives |
| Product interface design | `skills/product-interface-design` | A product brief becomes a rendered, distinctive interface | `frontend-design` | Tiny style fixes, image generation, backend work |
| Software security | `skills/software-security` | Repository evidence becomes a prioritized threat model | `security-threat-model` | Pen testing, compliance certification, ordinary review |
| Data notebooks | `skills/data-notebooks` | An experiment or lesson becomes a reproducible notebook | `jupyter-notebook` | Spreadsheets, pipelines, plain scripts |

## Composition

Composition is explicit and artifact-based. For example, `evidence-based-research` may produce supported audience facts consumed by `content-campaign-pack`; it must not generate the Campaign itself. `meeting-to-actions` may propose tracker items; it must not perform the broader weekly capacity review. `prospect-research` stops at the qualified list and never sends outreach.

## Limits

- No scenario group may contain more than 20 distributed Skills.
- A distributed Skill cannot appear in more than one group.
- New Skills require near-miss trigger tests against every adjacent group.
- Prefer extending a Skill when the user intent and output remain the same; split only when trigger, workflow, permission boundary or acceptance criteria materially differ.
