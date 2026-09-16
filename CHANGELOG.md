# Changelog

## 0.18.3 - 2026-09-17

- Polished the remaining Store category labels in English and Simplified Chinese, including development, design, AI agents, education, professional services, and life services.

## 0.18.2 - 2026-09-17

- Reviewed all English and Simplified Chinese Store metadata and human-edited sentence-like labels and descriptions into concise, idiomatic product language.
- Corrected inaccurate or awkward terminology such as analytics tracking, ASO, content campaigns, diagram communication, offers, and X Articles.
- Added locale-aware display-name quality gates so future Store entries remain concise and suitable for search results.

## 0.18.1 - 2026-09-17

- Moved install-time localization metadata into `SKILL.md` under `metadata.i18n`, making each Skill self-describing across built-in, Store-installed, and project sources.
- Removed the separate `xopc-skill.json` package file and added release tests that verify the inline metadata matches the Store manifest.

## 0.18.0 - 2026-09-17

- Added English and Simplified Chinese display names and descriptions for all 156 official Skills without changing their stable machine names or agent-routing descriptions.
- Upgraded the Store release manifest to schema v4 and embedded matching install-time localization metadata in every Skill archive.
- Added validation and deterministic release tests for localized metadata, including package-to-manifest consistency.

## 0.17.0 - 2026-09-15

- Audited 84 Skill entry files from `anbeime/skill` at fixed commit `afaf2ce2de5b678bf741242229c34dd7b3968900` and added eight licensed, non-overlapping Experimental Skills.
- Added Obsidian Markdown, JSON Canvas and Bases authoring from the traced MIT primary source, plus contract risk comments, four-color evidence analysis, Agent run provenance, untrusted content intake review, and draft-first X Articles publishing.
- Excluded duplicate document, presentation, frontend, resume, transcription, research, marketing and media workflows, as well as unclear-license or tightly coupled packages.
- Increased the Store display-category capacity from 20 to 50 across the registry, schema, validator, quality standard and documentation.
- Added 160 trigger fixtures, 40 task fixtures, fixed source records, license files, adaptation records, and authorization/privacy/failure-recovery boundaries.

## 0.16.0 - 2026-09-15

- Added 46 MIT-licensed marketing Skills adapted from `coreyhaines31/marketingskills` v2.11.1 at fixed commit `5b2c0007766c6a1cf1d53fd8fc73e979e0821022`.
- Classified the additions across measurement, content, development, design and media, business operations, and professional strategy without exceeding the 20-Skill Store category cap.
- Mapped four overlapping upstream tasks to existing XOPC owners and renamed two Store collisions to `company-marketing-plan` and `product-pricing`.
- Added fixed source records, attribution, 46 adaptation records, 920 trigger fixtures, 230 task fixtures, and explicit evidence, authorization, platform-volatility, and post-action verification boundaries.

## 0.15.0 - 2026-09-13

- Added twelve original experimental Skills from WorkBuddy live marketplace and QwenWork public workflow evidence.
- Added eleven scenario directories, twelve scenario briefs, 241 trigger fixtures and 60 task fixtures.
- Documented existing coverage, runtime/connector dependencies, deferred specialist workflows, and UI access limits in the competitor intake audit.
- Kept behavioural baselines, independent domain review and target-runtime verification as explicit Stable blockers. No marketplace packages or proprietary assets are redistributed.

## 0.14.0 - 2026-08-24

- Recovered ten historical XOPC OPC lifecycle intents from application commit history into a dedicated bilingual `one-person-company` Store category.
- Independently rewrote community discovery, idea validation, manual delivery, MVP, pricing, first customers, marketing, sustainable growth, operating review, and company-principle Skills with current evidence and authorization boundaries.
- Added ten scenario briefs, 200 trigger fixtures, 50 adversarial task fixtures, and a historical recovery and non-overlap audit.
- Kept the application repository unchanged and rejected a provider-bound X/Twitter Skill as a standalone duplicate while retaining its safe planning principles.

## 0.13.0 - 2026-08-24

- Aligned Store discovery directly with SkillHub China's 12 functional level-one categories and excluded `Pay Skill` as a commerce attribute.
- Added six XOPC-original Skills for natural Chinese editing, diagram communication, tender-response review, academic writing coaching, Agent Skill security review, and WeChat Mini Program delivery.
- Added six scenario directories, six briefs, 120 trigger cases, and 30 task fixtures with authorship, accessibility, procurement, academic-integrity, supply-chain, privacy, and publishing boundaries.
- Audited score-ranked leaders in all 12 categories; packages without verified redistribution licenses remain market evidence only.

## 0.12.0 - 2026-08-23

- Consolidated 46 implementation-level scenario groups into 10 user-facing bilingual Store categories while preserving all 74 Skills and 76 scenarios.
- Decoupled scenario-organized source paths from Store display categories through release manifest schema v3.
- Added repository gates limiting the catalog to 10 non-empty categories and 20 Skills per category, with unique scenario and Skill ownership.
- Removed the legacy scenario-group registry and replaced it with an explicit display-category registry and schema.

## 0.11.0 - 2026-08-23

- Added six non-overlapping life-service Skills from a focused SkillHub China category review.
- Added scam-message triage, cultural divination, focus-session planning, reading companionship, China social-security guidance, and home-renovation review.
- Added six localized categories, six scenario briefs, 120 trigger cases, and 30 task fixtures.
- Kept divination explicitly recreational and added strict boundaries for fraud recovery, official-policy freshness, personal data, professional inspection, payment, and external mutation.

## 0.10.0 - 2026-08-23

- Added nine non-overlapping Skills from the second SkillHub China and skills.sh scenario review.
- Added knowledge-base curation, SOP authoring, resume tailoring, personal budget review, privacy redaction, learning assessment analysis, incident response coordination, competitive intelligence, and China social content adaptation.
- Added five localized categories, nine scenario briefs, 180 trigger cases, and 45 task fixtures.
- Preserved originals and explicit authorization boundaries for knowledge mutations, controlled procedures, personal data, production changes, applications, accounts, and social publishing.

## 0.9.0 - 2026-08-23

- Added a documented SkillHub China intake policy and category coverage review.
- Added six XOPC-original Skills for financial statements, ecommerce performance, Chinese official documents, user research, teaching plans, and travel itineraries.
- Added five localized scenario categories, six scenario briefs, 120 trigger cases, and 30 task fixtures.
- Kept unlicensed marketplace packages as scenario evidence only; no SkillHub package content is redistributed.

## 0.8.1 - 2026-08-23

- Restricted Store artifacts to Git-tracked Skill files and disabled Python bytecode generation during tests.
- Removed environment-dependent build output from `github-actions-ci-fix` and advanced that Skill to 0.3.1.
- Replaced locale-sensitive archive ordering with a deterministic case-folded comparator while preserving established artifact order.

## 0.8.0 - 2026-08-23

- Added stable scenario category IDs with English and Simplified Chinese labels as the official display taxonomy.
- Included the complete localized category catalog in Store release manifests for XOPC marketplace filtering and display.

## 0.7.1 - 2026-08-23

- Replaced the platform-dependent system ZIP publisher with a dependency-free deterministic ZIP writer so macOS and Linux produce byte-identical Store artifacts.
- Bound release provenance to the checked-out commit and kept Store publication immutable and replay-safe.

## 0.7.0 - 2026-08-23

- Re-audited the eight requested upstream repositories at fixed commits and added seven distinct experimental Skills: merge conflict resolution, spec decomposition, decision prototyping, security ownership analysis, audio transcription, explainer video production, and brand style application.
- Added three scenario groups, seven briefs, 140 trigger cases, and 35 task fixtures with explicit intent, privacy, consent, rights, cost, publishing, and destructive-action boundaries.
- Reimplemented OpenAI's large ownership toolchain as one dependency-free, read-only Git analyzer with deterministic fixture coverage; retained Remotion and Karpathy-inspired sources as reference-only because redistribution rights or standalone task boundaries remain absent.

## 0.6.0 - 2026-08-23

- Added 12 non-overlapping Skills across knowledge synthesis, work management, customer and finance operations, localization, safe file organization, forms, visualization, procurement and recruiting.
- Added eight scenario groups, 12 scenario briefs, 240 trigger cases and 60 task fixtures with explicit evidence, privacy and external-mutation boundaries.
- Adapted pinned Apache-2.0 sources from Anthropic Knowledge Work Plugins and Google Workspace CLI plus current MIT OpenAI Plugins; kept unlicensed marketplace implementations reference-only.
- Removed the duplicated static Skill catalog from the root README so registries remain the single source of truth.

## 0.5.0 - 2026-08-23

- Added nine general office Skills covering Word-compatible documents, PDFs, spreadsheets, presentations, inbox triage, reply drafting, daily agendas, meeting preparation and group scheduling.
- Added five office scenario groups, nine briefs, 180 trigger cases and 45 task fixtures.
- Adapted MIT sources from MiniMax and current OpenAI office plugins into provider-neutral workflows with render verification and explicit external-write boundaries.

## 0.4.0 - 2026-08-23

- Relaxed Experimental intake from near-stable proof to clear scenario value, permissive redistribution, non-overlap and baseline evaluation.
- Added seven Skills covering MCP servers, internal communications, agent-friendly CLIs, deep module design, TDD, GitHub review comments and secure code review.
- Added three scenario groups, seven briefs, 140 positive/negative trigger cases and 35 task fixtures.

## 0.3.0 - 2026-08-23

- Audited eight requested upstream repositories at pinned commits, including per-Skill license and overlap review.
- Added six experimental Skills for frontend design, code review, systematic debugging, threat modeling, reproducible notebooks and GitHub Actions recovery.
- Added three scenario groups, six scenario briefs, 120 trigger cases, 30 task fixtures and deterministic notebook/CI helper tests.
- Added Apache-2.0 package notices, fixed-source records, deprecated-upstream handling and four new VoltAgent Official Skills selections.

## 0.2.0 - 2026-08-23

- Added six non-overlapping scenario Skills for decision research, meeting execution, content campaigns, prospect research, document requirement reviews and capacity-feasible weekly planning.
- Added an eight-group capability map with a hard maximum of 20 Skills per group and unique Skill ownership across groups.
- Added four pinned MIT upstream records, source adaptations, scenario briefs, 120 trigger cases and 30 task fixtures.
- Added market evidence from SkillHub, ClawHub, skills.sh and VoltAgent, while keeping unlicensed Next.js sources reference-only.

## 0.1.0 - 2026-08-23

- Added six scenario-based experimental Skills spanning XOPC model integration, Connector packaging, Web E2E testing, PostgreSQL production review, React Native performance and evidence-based release notes.
- Added pinned upstream records, MIT notices and VoltAgent-first discovery synchronization.
- Added per-Skill catalog metadata, scenario briefs, 10 positive and 10 near-miss trigger cases, and at least five task fixtures.
- Added deterministic tests for model-gateway helpers and Connector manifest safety.
