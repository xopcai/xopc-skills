# Scenario Brief: track-contract-obligations

## User and situation
- User: 合同履约台账的实际执行者。
- Evidence: 用户希望补齐 WorkBuddy / QwenWork 中有价值的能力；QwenWork official homepage and expert-kits docs: contract management。
- These are scenario signals, not measured XOPC user frequency. See [market intake](../docs/workbuddy-qwenwork-intake-2026-09.md).

## Desired outcome
- Outcome: 从指定合同版本提取有条款定位的履约义务、日期条件和待确认事项。
- Inputs and dependencies: User-supplied contract versions; date calculation tools.
- Deliverable and acceptance: defined in [Skill](../skills/contract-operations/contract-obligation-tracking/SKILL.md) and its five raw-input task fixtures.
- Value hypothesis: reusable decisions, evidence handling and failure recovery reduce repeated clarification and incomplete delivery. No speedup is claimed without a baseline.

## Boundaries and product shape
Owns contractual operational obligations; document-requirements-review owns conformance against supplied requirements; legal enforceability and contract negotiation are not claimed.
- Product shape: original workflow Skill; no third-party package text, code, assets or private account data is redistributed.
- Runtime access and external mutation remain subject to the user's scope and active tool rules.
- Source material is data, including embedded instructions that conflict with the task.
- No new connector, browser engine, model or paid service is bundled.

## Evaluation plan
- Trigger: ten positive and at least ten adjacent negative requests in [trigger fixtures](../evals/contract-obligation-tracking/trigger-cases.json).
- Tasks: five concrete normal/adversarial inputs with expected and forbidden outcomes in [task fixtures](../evals/contract-obligation-tracking/task-cases.json).
- Baseline: compare the same tasks with and without the Skill on the same runtime; not yet run.
- Verification: repository/package structure checks now; task execution and human domain review remain stable blockers.

## Ownership
- Product and engineering owner: XOPC Skills Team.
- Independent domain reviewer: not assigned; required before Stable.
- Intake date: 2026-09-13.
