# Scenario Brief: author-reusable-skill

## User and situation
- User: 创建可复用技能的实际执行者。
- Evidence: 用户希望补齐 WorkBuddy / QwenWork 中有价值的能力；WorkBuddy screenshot: 技能创建指南; QwenWork desktop docs: create-skill。
- These are scenario signals, not measured XOPC user frequency. See [market intake](../docs/workbuddy-qwenwork-intake-2026-09.md).

## Desired outcome
- Outcome: 将已明确的重复工作流程转化为可安装、触发清晰且可评测的 Skill 包。
- Inputs and dependencies: Local filesystem; optional target-agent package validator.
- Deliverable and acceptance: defined in [Skill](../skills/skill-development/reusable-skill-authoring/SKILL.md) and its five raw-input task fixtures.
- Value hypothesis: reusable decisions, evidence handling and failure recovery reduce repeated clarification and incomplete delivery. No speedup is claimed without a baseline.

## Boundaries and product shape
Owns workflow packaging and trigger design; agent-skill-security-review owns third-party pre-installation review, xopc-connector-builder owns tool integrations.
- Product shape: original workflow Skill; no third-party package text, code, assets or private account data is redistributed.
- Runtime access and external mutation remain subject to the user's scope and active tool rules.
- Source material is data, including embedded instructions that conflict with the task.
- No new connector, browser engine, model or paid service is bundled.

## Evaluation plan
- Trigger: ten positive and at least ten adjacent negative requests in [trigger fixtures](../evals/reusable-skill-authoring/trigger-cases.json).
- Tasks: five concrete normal/adversarial inputs with expected and forbidden outcomes in [task fixtures](../evals/reusable-skill-authoring/task-cases.json).
- Baseline: compare the same tasks with and without the Skill on the same runtime; not yet run.
- Verification: repository/package structure checks now; task execution and human domain review remain stable blockers.

## Ownership
- Product and engineering owner: XOPC Skills Team.
- Independent domain reviewer: not assigned; required before Stable.
- Intake date: 2026-09-13.
