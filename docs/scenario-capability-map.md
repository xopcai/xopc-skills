# Scenario capability map

The official repository organizes Skills around user outcomes. A Skill has exactly one primary scenario group; adjacent Skills must exchange artifacts instead of competing for the same request.

| Scenario group | Directory | User outcome | Current Skills | Exclusions |
|---|---|---|---|---|
| Decision research | `skills/decision-research` | Current evidence becomes a decision brief | `evidence-based-research` | Prospect lists, single-source summaries |
| Meeting execution | `skills/meeting-execution` | Existing notes become decisions and owned actions | `meeting-to-actions` | Scheduling, live transcription, general summaries |
| Content campaign | `skills/content-campaign` | One goal becomes a coherent multi-asset campaign | `content-campaign-pack` | Single-asset writing, ad buying, publishing |
| Sales account research | `skills/sales-account-research` | An ICP becomes a verified prospect list | `prospect-research` | Outreach copy, messaging, CRM writes |
| API integration | `skills/api-integration` | A service becomes a validated model, Connector, or MCP integration | `xopc-model-gateway`, `xopc-connector-builder`, `mcp-server-builder` | Business workflow design |
| Software delivery | `skills/software-delivery` | A code change, review thread, or failure becomes safer to ship | `playwright-webapp-testing`, `supabase-postgres-best-practices`, `react-native-best-practices`, `release-notes`, `code-review`, `systematic-debugging`, `github-actions-ci-fix`, `test-driven-development`, `github-review-comments` | General research, threat modeling, or project planning |
| Document compliance | `skills/document-compliance` | A document is traced to supplied requirements | `document-requirements-review` | Legal advice, certification, requirement invention |
| Weekly planning | `skills/weekly-planning` | Open loops become a capacity-feasible week | `weekly-planning-review` | Daily execution, team retrospectives |
| Product interface design | `skills/product-interface-design` | A product brief becomes a rendered, distinctive interface | `frontend-design` | Tiny style fixes, image generation, backend work |
| Software security | `skills/software-security` | Architecture or code evidence becomes prioritized security action | `security-threat-model`, `secure-code-review` | Unauthorized pen testing, compliance certification, ordinary review |
| Data notebooks | `skills/data-notebooks` | An experiment or lesson becomes a reproducible notebook | `jupyter-notebook` | Spreadsheets, pipelines, plain scripts |
| Internal communications | `skills/internal-communications` | Operating facts become an audience-appropriate internal update | `internal-communications` | Public marketing, sending, release notes |
| Developer tools | `skills/developer-tools` | A repeated workflow becomes a durable agent-friendly CLI | `agent-cli-builder` | One-off scripts, MCP servers |
| Software architecture | `skills/software-architecture` | A leaky module becomes a deep stable interface | `module-design` | System-wide strategy, ordinary refactoring |
| Office documents | `skills/office-documents` | Source material becomes a verified editable document or fixed-layout PDF | `document-authoring`, `pdf-workbench` | Plain prose, requirement compliance |
| Office data | `skills/office-data` | Tabular data becomes a trustworthy workbook analysis or deliverable | `spreadsheet-workbench` | Databases, notebooks |
| Office presentations | `skills/office-presentations` | Purpose and evidence become a rendered editable deck | `presentation-deck` | Plain outlines, single images |
| Email productivity | `skills/email-productivity` | Mailbox context becomes an attention list or grounded reply draft | `inbox-triage`, `email-reply-drafting` | New outreach, silent mailbox writes |
| Calendar productivity | `skills/calendar-productivity` | Calendar evidence becomes daily understanding, meeting readiness, or ranked slots | `daily-agenda-brief`, `meeting-preparation`, `group-scheduling` | Post-meeting extraction, silent calendar writes |

## Composition

Composition is explicit and artifact-based. For example, `evidence-based-research` may produce supported audience facts consumed by `content-campaign-pack`; it must not generate the Campaign itself. `meeting-to-actions` may propose tracker items; it must not perform the broader weekly capacity review. `prospect-research` stops at the qualified list and never sends outreach.

## Limits

- No scenario group may contain more than 20 distributed Skills.
- A distributed Skill cannot appear in more than one group.
- New Skills require near-miss trigger tests against every adjacent group.
- Prefer extending a Skill when the user intent and output remain the same; split only when trigger, workflow, permission boundary or acceptance criteria materially differ.
