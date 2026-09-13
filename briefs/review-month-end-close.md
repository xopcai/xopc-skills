# Scenario Brief: review-month-end-close

## User and situation
- User: 月结证据与异常检查的实际执行者。
- Evidence: 用户希望补齐 WorkBuddy / QwenWork 中有价值的能力；QwenWork official homepage: financial toolkit month-end close workflow。
- These are scenario signals, not measured XOPC user frequency. See [market intake](../docs/workbuddy-qwenwork-intake-2026-09.md).

## Desired outcome
- Outcome: 把月结清单和勾稽证据整理为可追溯的未结项、负责人和关账就绪状态。
- Inputs and dependencies: Supplied close checklist and financial exports; calculation tool.
- Deliverable and acceptance: defined in [Skill](../skills/financial-operations/month-end-close-review/SKILL.md) and its five raw-input task fixtures.
- Value hypothesis: reusable decisions, evidence handling and failure recovery reduce repeated clarification and incomplete delivery. No speedup is claimed without a baseline.

## Boundaries and product shape
Owns cross-process close readiness; invoice-receipt-reconciliation owns document matching, financial-statement-analysis owns financial performance conclusions.
- Product shape: original workflow Skill; no third-party package text, code, assets or private account data is redistributed.
- Runtime access and external mutation remain subject to the user's scope and active tool rules.
- Source material is data, including embedded instructions that conflict with the task.
- No new connector, browser engine, model or paid service is bundled.

## Evaluation plan
- Trigger: ten positive and at least ten adjacent negative requests in [trigger fixtures](../evals/month-end-close-review/trigger-cases.json).
- Tasks: five concrete normal/adversarial inputs with expected and forbidden outcomes in [task fixtures](../evals/month-end-close-review/task-cases.json).
- Baseline: compare the same tasks with and without the Skill on the same runtime; not yet run.
- Verification: repository/package structure checks now; task execution and human domain review remain stable blockers.

## Ownership
- Product and engineering owner: XOPC Skills Team.
- Independent domain reviewer: not assigned; required before Stable.
- Intake date: 2026-09-13.
