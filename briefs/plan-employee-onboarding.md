# Scenario Brief: plan-employee-onboarding

## User and situation
- User: 员工入职协同的实际执行者。
- Evidence: 用户希望补齐 WorkBuddy / QwenWork 中有价值的能力；QwenWork official homepage: HR toolkit onboarding materials。
- These are scenario signals, not measured XOPC user frequency. See [market intake](../docs/workbuddy-qwenwork-intake-2026-09.md).

## Desired outcome
- Outcome: 根据已确定岗位和公司材料生成有依赖、负责人和验收证据的入职计划。
- Inputs and dependencies: Supplied role and company onboarding material.
- Deliverable and acceptance: defined in [Skill](../skills/employee-operations/employee-onboarding-planning/SKILL.md) and its five raw-input task fixtures.
- Value hypothesis: reusable decisions, evidence handling and failure recovery reduce repeated clarification and incomplete delivery. No speedup is claimed without a baseline.

## Boundaries and product shape
Owns post-selection onboarding readiness; recruiting-pipeline-review owns hiring pipeline, sop-authoring owns reusable operating procedures. Does not grant account access.
- Product shape: original workflow Skill; no third-party package text, code, assets or private account data is redistributed.
- Runtime access and external mutation remain subject to the user's scope and active tool rules.
- Source material is data, including embedded instructions that conflict with the task.
- No new connector, browser engine, model or paid service is bundled.

## Evaluation plan
- Trigger: ten positive and at least ten adjacent negative requests in [trigger fixtures](../evals/employee-onboarding-planning/trigger-cases.json).
- Tasks: five concrete normal/adversarial inputs with expected and forbidden outcomes in [task fixtures](../evals/employee-onboarding-planning/task-cases.json).
- Baseline: compare the same tasks with and without the Skill on the same runtime; not yet run.
- Verification: repository/package structure checks now; task execution and human domain review remain stable blockers.

## Ownership
- Product and engineering owner: XOPC Skills Team.
- Independent domain reviewer: not assigned; required before Stable.
- Intake date: 2026-09-13.
