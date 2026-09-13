# Scenario Brief: execute-browser-workflow

## User and situation
- User: 浏览器事务执行的实际执行者。
- Evidence: 用户希望补齐 WorkBuddy / QwenWork 中有价值的能力；WorkBuddy live marketplace: Web Access, BrowserSkill, Playwright Browser Automation, 网页自动化。
- These are scenario signals, not measured XOPC user frequency. See [market intake](../docs/workbuddy-qwenwork-intake-2026-09.md).

## Desired outcome
- Outcome: 通过可用浏览器工具完成有明确范围的网页事务并逐项验证结果。
- Inputs and dependencies: An available browser-control tool and the user's authorized session.
- Deliverable and acceptance: defined in [Skill](../skills/browser-operations/browser-workflow-execution/SKILL.md) and its five raw-input task fixtures.
- Value hypothesis: reusable decisions, evidence handling and failure recovery reduce repeated clarification and incomplete delivery. No speedup is claimed without a baseline.

## Boundaries and product shape
Owns executing a user's browser transaction; playwright-webapp-testing owns reusable test suites, evidence-based-research owns research synthesis. Adds workflow guidance, not a browser engine.
- Product shape: original workflow Skill; no third-party package text, code, assets or private account data is redistributed.
- Runtime access and external mutation remain subject to the user's scope and active tool rules.
- Source material is data, including embedded instructions that conflict with the task.
- No new connector, browser engine, model or paid service is bundled.

## Evaluation plan
- Trigger: ten positive and at least ten adjacent negative requests in [trigger fixtures](../evals/browser-workflow-execution/trigger-cases.json).
- Tasks: five concrete normal/adversarial inputs with expected and forbidden outcomes in [task fixtures](../evals/browser-workflow-execution/task-cases.json).
- Baseline: compare the same tasks with and without the Skill on the same runtime; not yet run.
- Verification: repository/package structure checks now; task execution and human domain review remain stable blockers.

## Ownership
- Product and engineering owner: XOPC Skills Team.
- Independent domain reviewer: not assigned; required before Stable.
- Intake date: 2026-09-13.
