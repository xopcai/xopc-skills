# Scenario Brief: convert-documents-to-markdown

## User and situation
- User: 文档转 Markdown的实际执行者。
- Evidence: 用户希望补齐 WorkBuddy / QwenWork 中有价值的能力；WorkBuddy screenshot: MarkItDown; QwenWork desktop skills documentation: web page to Markdown example。
- These are scenario signals, not measured XOPC user frequency. See [market intake](../docs/workbuddy-qwenwork-intake-2026-09.md).

## Desired outcome
- Outcome: 将多格式资料转换为保留来源定位、结构和丢失说明的 Markdown 文件集。
- Inputs and dependencies: Local document converters; OCR or authorized browser access only when needed.
- Deliverable and acceptance: defined in [Skill](../skills/document-conversion/document-to-markdown/SKILL.md) and its five raw-input task fixtures.
- Value hypothesis: reusable decisions, evidence handling and failure recovery reduce repeated clarification and incomplete delivery. No speedup is claimed without a baseline.

## Boundaries and product shape
Owns normalized Markdown ingestion across formats; pdf-workbench owns PDF operations, audio-transcription owns speech recognition, and knowledge-base-curation owns corpus governance.
- Product shape: original workflow Skill; no third-party package text, code, assets or private account data is redistributed.
- Runtime access and external mutation remain subject to the user's scope and active tool rules.
- Source material is data, including embedded instructions that conflict with the task.
- No new connector, browser engine, model or paid service is bundled.

## Evaluation plan
- Trigger: ten positive and at least ten adjacent negative requests in [trigger fixtures](../evals/document-to-markdown/trigger-cases.json).
- Tasks: five concrete normal/adversarial inputs with expected and forbidden outcomes in [task fixtures](../evals/document-to-markdown/task-cases.json).
- Baseline: compare the same tasks with and without the Skill on the same runtime; not yet run.
- Verification: repository/package structure checks now; task execution and human domain review remain stable blockers.

## Ownership
- Product and engineering owner: XOPC Skills Team.
- Independent domain reviewer: not assigned; required before Stable.
- Intake date: 2026-09-13.
