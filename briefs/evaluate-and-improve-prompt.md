# Scenario Brief: evaluate-and-improve-prompt

## User and situation
- User: 提示词评测与优化的实际执行者。
- Evidence: 用户希望补齐 WorkBuddy / QwenWork 中有价值的能力；WorkBuddy live marketplace: 提示词工程专家, MiniMax H3 提示词编写。
- These are scenario signals, not measured XOPC user frequency. See [market intake](../docs/workbuddy-qwenwork-intake-2026-09.md).

## Desired outcome
- Outcome: 将具体任务的提示词失败案例转化为可对比、可复现的提示词修订与评测结论。
- Inputs and dependencies: Supplied prompt and examples; optional authorized model execution.
- Deliverable and acceptance: defined in [Skill](../skills/prompt-quality/prompt-evaluation-improvement/SKILL.md) and its five raw-input task fixtures.
- Value hypothesis: reusable decisions, evidence handling and failure recovery reduce repeated clarification and incomplete delivery. No speedup is claimed without a baseline.

## Boundaries and product shape
Owns task-prompt quality and measured comparison; reusable-skill-authoring owns installable packages. Model-specific media parameters require verified documentation and are not bundled here.
- Product shape: original workflow Skill; no third-party package text, code, assets or private account data is redistributed.
- Runtime access and external mutation remain subject to the user's scope and active tool rules.
- Source material is data, including embedded instructions that conflict with the task.
- No new connector, browser engine, model or paid service is bundled.

## Evaluation plan
- Trigger: ten positive and at least ten adjacent negative requests in [trigger fixtures](../evals/prompt-evaluation-improvement/trigger-cases.json).
- Tasks: five concrete normal/adversarial inputs with expected and forbidden outcomes in [task fixtures](../evals/prompt-evaluation-improvement/task-cases.json).
- Baseline: compare the same tasks with and without the Skill on the same runtime; not yet run.
- Verification: repository/package structure checks now; task execution and human domain review remain stable blockers.

## Ownership
- Product and engineering owner: XOPC Skills Team.
- Independent domain reviewer: not assigned; required before Stable.
- Intake date: 2026-09-13.
