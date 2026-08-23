# Upstream Skill audit — 2026-08-23

This audit evaluates the eight repositories requested for XOPC's official scenario catalog. All repositories were cloned locally and pinned before review. Popularity is discovery evidence, not an approval gate; the final decision also considers task value, source authority, license, trigger precision, portability, permissions, deterministic verification, maintenance, and overlap with existing XOPC Skills.

## Repository snapshot

| Repository | Pinned commit | SKILL.md count | GitHub stars at review | License finding | XOPC decision |
|---|---|---:|---:|---|---|
| [marswaveai/skills](https://github.com/marswaveai/skills) | `25971a4` | 19 | 77 | MIT repository | Watch media workflows; no v0.3 distribution |
| [mattpocock/skills](https://github.com/mattpocock/skills) | `5b15a47` | 36 | 232,432 | MIT repository | Adapt `code-review` |
| [anthropics/skills](https://github.com/anthropics/skills) | `3b3fad9` | 20 | 171,056 | Mixed per Skill | Adapt Apache `frontend-design`; block restricted document Skills |
| [openai/skills](https://github.com/openai/skills) | `49f948f` | 44 | 25,122 | Mixed per Skill; repository deprecated | Pin and adapt Apache threat model + Jupyter only |
| [MiniMax-AI/skills](https://github.com/MiniMax-AI/skills) | `60aaae5` | 23 | 13,422 | MIT repository | Watch; current candidates too broad or provider-coupled |
| [obra/superpowers](https://github.com/obra/superpowers) | `b36e082` | 14 | 276,272 | MIT repository | Adapt `systematic-debugging` |
| [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) | `2c60614` | 1 | 205,396 | No repository license found | Reference only; not a standalone task |
| [remotion-dev/skills](https://github.com/remotion-dev/skills) | `baf0b91` | 12 | 4,367 | No repository license found | Reference only until redistribution rights exist |

OpenAI's deprecated repository points to [openai/plugins](https://github.com/openai/plugins). XOPC therefore uses the current `openai/plugins` commit `11c74d6` for `gh-fix-ci`, while recording the maintenance risk for legacy Skills that have no successor. OpenAI's current authoring guidance also distinguishes a reusable Skill workflow from plugin distribution.

## Adopted in v0.3

| XOPC Skill | Scenario | Selected upstream | Why it won | Material XOPC adaptation |
|---|---|---|---|---|
| `frontend-design` | Product interface design | Anthropic | Original Apache source, narrow trigger, rendered critique loop, category adoption leader | Removed persona/memory assumptions; added scope, truthfulness, responsive and accessibility gates |
| `code-review` | Software delivery | Matt Pocock | Strong two-axis review model and category adoption leader | Removed setup/issue-tracker/subagent requirements; added read-only scope and evidence severity |
| `systematic-debugging` | Software delivery | obra | Clear causal workflow and category adoption leader | Replaced absolute process rules with falsifiable evidence, safe stopping, and diagnosis/fix authorization |
| `security-threat-model` | Software security | OpenAI legacy Skill | Best reviewed repository-grounded threat-model contract; Apache per Skill | Response-first delivery, no live probing, explicit assumptions and compact output contract |
| `jupyter-notebook` | Data notebooks | OpenAI legacy Skill | Deterministic templates and standard-library scaffolder; category leader | Cross-agent paths, caller-relative output, secret/dependency/overwrite boundaries |
| `github-actions-ci-fix` | Software delivery | Current OpenAI GitHub plugin | Official current source and deterministic `gh` log parser | Removed connector dependency; preserved field-drift fallback and tightened mutation permissions |

Market search snapshots at review time showed approximately 807K installs for Anthropic frontend design, 392K for Matt Pocock code review, 234K for obra systematic debugging, 4.5K for OpenAI threat modeling, and 4.1K for OpenAI Jupyter. These values are time-sensitive and are not stored as release gates.

## Not distributed in v0.3

### MarsWave

`podcast`, `asr`, `creator`, and generation Skills provide useful end-to-end media patterns, but require ListenHub CLI, authentication, credits, and shared files outside an individual Skill. The repository is newly adopted relative to selected engineering Skills and has no committed task-evaluation suite. Keep `podcast` and `creator` on the watchlist until XOPC has a provider strategy and deterministic paid-call mocks.

### Anthropic document Skills

`docx`, `pdf`, `pptx`, and `xlsx` are production-quality references, but their individual licenses are source-available and reserve rights. They must not be copied or adapted. `doc-coauthoring` has no individual license file in the reviewed tree, so it is also blocked from redistribution. Apache-licensed `frontend-design` is reviewed independently.

### OpenAI legacy catalog

The repository is deprecated and licenses vary by directory. Figma and Notion Skills carry third-party terms, and only explicitly permissive individual directories may be considered. No future XOPC update should be inferred from a matching name; compare the current Plugins repository first.

### MiniMax

The repository is MIT and first-party, but development Skills such as `frontend-dev` and `fullstack-dev` are broad catchalls. `minimax-multimodal-toolkit` has strong CLI contracts but combines chat, web search, image, video, speech, and music under `mmx-cli`, requires persistent provider credentials, and lacks a no-cost deterministic evaluation path. Revisit as provider-specific integrations, not as a generic media Skill.

### Remotion

The official Skills have strong creation, preview, rendering, captions, maps, and upgrade boundaries, and the ecosystem shows meaningful adoption. The reviewed repository has no explicit license, and the umbrella package exceeds XOPC's 1 MB source limit. XOPC may learn the decomposition pattern but cannot redistribute the files until Remotion grants a compatible license.

### Karpathy-inspired guidelines

The repository's four principles are useful global agent guidance, not a user-triggered deliverable. Packaging them as an automatically discovered Skill would compete with every coding task and duplicate baseline agent behavior. The repository also lacks an explicit redistribution license.

## Next review gates

1. Collect real XOPC trigger and outcome telemetry for the six experimental Skills.
2. Run independent blind baselines for design, code review, debugging, and threat modeling.
3. Exercise deterministic notebook and CI scripts in CI fixtures.
4. Revisit media production only after provider choice, credential model, cost approval, and mocked evaluation are defined.
5. Recheck pinned upstream diffs quarterly; a repository update never bypasses license and behavioral review.

## Experimental expansion in v0.4

The v0.4 intake intentionally accepts useful Skills before stable-level outcome evidence when redistribution is permitted, the user scenario is clear, the trigger does not overlap an existing Skill, and baseline evaluations exist.

| XOPC Skill | Source | Distinct primary outcome |
|---|---|---|
| `mcp-server-builder` | Anthropic | Implement and evaluate an MCP server; unlike `xopc-connector-builder`, it does not package an existing endpoint |
| `internal-communications` | Anthropic | Produce an evidence-grounded internal update without publishing it |
| `agent-cli-builder` | OpenAI | Build a durable agent-friendly CLI rather than a one-off script or MCP server |
| `module-design` | Matt Pocock | Design a bounded deep module and migration, not review a diff |
| `test-driven-development` | obra | Implement explicitly selected behavior through observed red-green evidence |
| `github-review-comments` | OpenAI Plugins | Close feedback on an existing PR; unlike `code-review`, it does not generate the initial review |
| `secure-code-review` | OpenAI | Find concrete code-level vulnerabilities; unlike threat modeling, it does not own architecture-wide abuse paths |

Broad provider suites, unlicensed sources, hidden external writes, native binaries, and overlapping catchall development Skills remain outside distribution.

## General office expansion in v0.5

Daily office coverage is organized by user outcome rather than Microsoft, Google, or local-file product names. Four artifact Skills adapt MiniMax's MIT Office file workflows; five communication and calendar Skills adapt the MIT-licensed Outlook plugins at the pinned current OpenAI Plugins commit while replacing Outlook-specific commands with provider-neutral evidence contracts.

| Area | Added Skills | Non-overlap rule |
|---|---|---|
| Documents | `document-authoring`, `pdf-workbench` | Editable Word-compatible output versus fixed-layout PDF operations |
| Data | `spreadsheet-workbench` | Spreadsheet input or output required; notebooks and databases remain separate |
| Presentations | `presentation-deck` | Editable slide deliverable required; outlines and images remain separate |
| Email | `inbox-triage`, `email-reply-drafting` | Mailbox attention ranking versus one selected thread response |
| Calendar | `daily-agenda-brief`, `meeting-preparation`, `group-scheduling` | One-day understanding versus one-meeting readiness versus multi-person slot selection |

All email and calendar Skills default to read-only analysis or drafts. Sending, moving, deleting, categorizing, booking rooms, creating events, changing RSVPs, or editing invitations remains a separately authorized action.
