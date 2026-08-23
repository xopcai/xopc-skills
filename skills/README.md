# Scenario-organized Skills

Distributed Skills live at `skills/<scenario>/<skill-name>`. The scenario directory is a product boundary; the child directory is the installable Skill package.

| Scenario directory | Primary outcome | Selected Skills |
|---|---|---|
| `decision-research` | Evidence to decision brief | `evidence-based-research` |
| `meeting-execution` | Meeting record to owned execution | `meeting-to-actions` |
| `content-campaign` | Goal to measurable campaign package | `content-campaign-pack` |
| `sales-account-research` | ICP to verified prospect list | `prospect-research` |
| `api-integration` | API or external service to a validated agent integration | `xopc-model-gateway`, `xopc-connector-builder`, `mcp-server-builder` |
| `software-delivery` | Engineering evidence or production impact to safer recovery and release | `playwright-webapp-testing`, `supabase-postgres-best-practices`, `react-native-best-practices`, `release-notes`, `code-review`, `systematic-debugging`, `github-actions-ci-fix`, `test-driven-development`, `github-review-comments`, `merge-conflict-resolution`, `incident-response-coordination` |
| `document-compliance` | Supplied requirements to traceable review | `document-requirements-review` |
| `weekly-planning` | Open loops to a capacity-feasible week | `weekly-planning-review` |
| `product-interface-design` | Product brief to rendered and accessible interface | `frontend-design` |
| `software-security` | Architecture, code and ownership evidence to prioritized security action | `security-threat-model`, `secure-code-review`, `security-ownership-analysis` |
| `data-notebooks` | Analysis or lesson to reproducible `.ipynb` | `jupyter-notebook` |
| `internal-communications` | Operating facts to audience-appropriate internal update | `internal-communications` |
| `developer-tools` | Repeated workflow to durable agent-friendly CLI | `agent-cli-builder` |
| `software-architecture` | Leaky module to deep stable interface | `module-design` |
| `office-documents` | Source material to verified editable document or fixed-layout PDF | `document-authoring`, `pdf-workbench` |
| `office-data` | Tabular evidence to trustworthy workbook or visualization | `spreadsheet-workbench`, `data-visualization-report` |
| `office-presentations` | Purpose and evidence to a rendered editable deck | `presentation-deck` |
| `email-productivity` | Mailbox context to attention list or grounded reply draft | `inbox-triage`, `email-reply-drafting` |
| `calendar-productivity` | Calendar evidence to daily understanding, meeting readiness, or ranked slots | `daily-agenda-brief`, `meeting-preparation`, `group-scheduling` |
| `knowledge-workspace` | Scattered evidence to a cited answer or governed knowledge base | `workspace-knowledge-synthesis`, `knowledge-base-curation` |
| `work-management` | Communications, specs and project evidence to executable work | `commitment-task-capture`, `project-status-synthesis`, `workstream-digest`, `spec-to-work-items` |
| `business-operations` | Customer, financial, or process evidence to a reviewable operations package | `customer-support-ticket-triage`, `invoice-receipt-reconciliation`, `sop-authoring` |
| `language-localization` | Source content to locale-correct reviewed translation | `translation-localization-review` |
| `file-organization` | Bounded files to a safe, previewed and reversible organization plan | `safe-file-organization` |
| `forms-surveys` | Collection goal to testable form and response schema | `form-survey-builder` |
| `procurement-operations` | Vendor evidence to cost, risk and recommendation | `vendor-evaluation` |
| `people-operations` | Recruiting records to pipeline health and operating actions | `recruiting-pipeline-review` |
| `product-discovery` | One uncertain decision to observable prototype evidence | `decision-prototype` |
| `media-production` | Source media or facts to faithful transcript or verified explainer | `audio-transcription`, `explainer-video-production` |
| `brand-operations` | Approved brand guide to accessible artifact conformance | `brand-style-application` |
| `business-analysis` | Financial or ecommerce evidence to decision-ready diagnosis | `financial-statement-analysis`, `ecommerce-performance-diagnosis` |
| `chinese-professional-writing` | Facts and authority context to review-ready Chinese official text | `chinese-official-document-drafting` |
| `user-research` | Mixed research evidence to traceable product insight | `user-research-synthesis` |
| `teaching-support` | Learning context or assessment evidence to aligned teaching action | `teaching-plan-design`, `learning-assessment-analysis` |
| `travel-planning` | Trip constraints and current facts to feasible itinerary | `travel-itinerary-planning` |
| `career-support` | Verified experience and target role to truthful tailored resume | `resume-tailoring` |
| `personal-finance` | Household records and goals to a privacy-aware budget review | `personal-budget-review` |
| `data-protection` | Sensitive source artifact to verified redacted copy | `privacy-redaction` |
| `market-intelligence` | Current market evidence to fair competitor intelligence | `competitive-intelligence` |
| `china-social-content` | Verified source material to a platform-native Chinese social asset | `china-social-content-adaptation` |
| `life-safety` | Suspicious contact to a safe verification and containment plan | `scam-message-triage` |
| `cultural-entertainment` | Cultural symbols to an explicitly recreational reflection | `cultural-divination` |
| `personal-focus` | One immediate task to a bounded and resumable focus session | `focus-session-planning` |
| `reading-life` | Reading intent or notes to a sustainable practice and synthesis | `reading-companion` |
| `public-services` | Location-specific China social-security questions to current official guidance | `china-social-security-guidance` |
| `home-living` | Renovation scope and evidence to a reviewable risk checklist | `home-renovation-review` |
| `chinese-content-editing` | Supplied Chinese prose to natural, faithful authorial expression | `chinese-natural-style-editing` |
| `visual-diagrams` | Complex relationships to an accurate and accessible diagram | `diagram-communication` |
| `tender-operations` | Tender requirements and response evidence to a compliance matrix | `tender-response-compliance-review` |
| `academic-writing` | Research intent and evidence to an integrity-preserving manuscript revision | `academic-writing-coach` |
| `skill-security` | An untrusted Skill package to a pre-installation risk decision | `agent-skill-security-review` |
| `wechat-miniprogram` | Mini Program requirements and source to a verified platform-aware change | `wechat-miniprogram-delivery` |

Each `SCENARIO.md` explains the user boundary, why the current Skills were selected, rejected overlaps, and candidates worth watching. A watchlist entry is research evidence, not approval to distribute it.

## Selection rule

1. Define a repeated user job and its acceptance criteria.
2. Search VoltAgent's official-team index first, then source repositories and other markets.
3. Prefer first-party domain expertise, permissive licensing, maintained source, narrow triggers, reusable artifacts, and verifiable outcomes.
4. Adapt only after pinning the source commit and recording XOPC changes in `SOURCE.json`.
5. Reject duplicates: one Skill owns one primary intent; adjacent Skills compose through artifacts.
6. Assign every Skill to exactly one of the Store's 12 SkillHub-aligned functional categories, with at most 20 Skills per category. Experimental Skills may enter when the specific scenario and boundary are clear, then graduate using real usage evidence.

Scenario directories intentionally do not contain a root `SKILL.md`. This preserves recursive discovery of every child Skill in common Agent Skills installers.
