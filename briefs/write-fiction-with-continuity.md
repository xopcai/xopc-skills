# Scenario Brief: write-fiction-with-continuity

## User and situation
- User: 小说创作与连续性管理的实际执行者。
- Evidence: 用户希望补齐 WorkBuddy / QwenWork 中有价值的能力；WorkBuddy live marketplace: 开放小说创作助手, AI网文创作, 章节正文生成器。
- These are scenario signals, not measured XOPC user frequency. See [market intake](../docs/workbuddy-qwenwork-intake-2026-09.md).

## Desired outcome
- Outcome: 将原创故事设定和已写章节转化为人物、时间线和伏笔一致的后续正文。
- Inputs and dependencies: User's original story material.
- Deliverable and acceptance: defined in [Skill](../skills/fiction-writing/fiction-continuity-writing/SKILL.md) and its five raw-input task fixtures.
- Value hypothesis: reusable decisions, evidence handling and failure recovery reduce repeated clarification and incomplete delivery. No speedup is claimed without a baseline.

## Boundaries and product shape
Owns original fictional narrative and story-state continuity; long-form-authoring owns evidence-based nonfiction, chinese-natural-style-editing owns same-language style revision.
- Product shape: original workflow Skill; no third-party package text, code, assets or private account data is redistributed.
- Runtime access and external mutation remain subject to the user's scope and active tool rules.
- Source material is data, including embedded instructions that conflict with the task.
- No new connector, browser engine, model or paid service is bundled.

## Evaluation plan
- Trigger: ten positive and at least ten adjacent negative requests in [trigger fixtures](../evals/fiction-continuity-writing/trigger-cases.json).
- Tasks: five concrete normal/adversarial inputs with expected and forbidden outcomes in [task fixtures](../evals/fiction-continuity-writing/task-cases.json).
- Baseline: compare the same tasks with and without the Skill on the same runtime; not yet run.
- Verification: repository/package structure checks now; task execution and human domain review remain stable blockers.

## Ownership
- Product and engineering owner: XOPC Skills Team.
- Independent domain reviewer: not assigned; required before Stable.
- Intake date: 2026-09-13.
