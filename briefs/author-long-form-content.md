# Scenario Brief: author-long-form-content

## User and situation
- User: 长文与手册写作的实际执行者。
- Evidence: 用户希望补齐 WorkBuddy / QwenWork 中有价值的能力；WorkBuddy screenshot: fbs-bookwriter。
- These are scenario signals, not measured XOPC user frequency. See [market intake](../docs/workbuddy-qwenwork-intake-2026-09.md).

## Desired outcome
- Outcome: 把资料、论点和读者目标转化为跨章节一致、来源可追溯的长篇稿件。
- Inputs and dependencies: User source material; optional current-source research.
- Deliverable and acceptance: defined in [Skill](../skills/long-form-content/long-form-authoring/SKILL.md) and its five raw-input task fixtures.
- Value hypothesis: reusable decisions, evidence handling and failure recovery reduce repeated clarification and incomplete delivery. No speedup is claimed without a baseline.

## Boundaries and product shape
Owns chapter architecture and continuity; document-authoring owns Word rendering, academic-writing-coach owns scholarly manuscript integrity, and content-campaign-pack owns campaigns. sop-authoring owns operational procedures and job checklists; this skill owns multi-chapter editorial manuscripts.
- Product shape: original workflow Skill; no third-party package text, code, assets or private account data is redistributed.
- Runtime access and external mutation remain subject to the user's scope and active tool rules.
- Source material is data, including embedded instructions that conflict with the task.
- No new connector, browser engine, model or paid service is bundled.

## Evaluation plan
- Trigger: ten positive and at least ten adjacent negative requests in [trigger fixtures](../evals/long-form-authoring/trigger-cases.json).
- Tasks: five concrete normal/adversarial inputs with expected and forbidden outcomes in [task fixtures](../evals/long-form-authoring/task-cases.json).
- Baseline: compare the same tasks with and without the Skill on the same runtime; not yet run.
- Verification: repository/package structure checks now; task execution and human domain review remain stable blockers.

## Ownership
- Product and engineering owner: XOPC Skills Team.
- Independent domain reviewer: not assigned; required before Stable.
- Intake date: 2026-09-13.
