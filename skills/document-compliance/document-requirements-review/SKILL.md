---
name: document-requirements-review
description: Compare a proposal, response, policy, application, or other document against an explicit supplied requirement set and produce a traceability matrix, evidence gaps, ambiguities, and remediation plan. Do not use to invent regulatory requirements, give legal advice, or certify compliance.
license: MIT
metadata:
  author: XOPC, adapted from Mohit Aggarwal
  version: "0.2.0"
---

# Document Requirements Review

Test whether an artifact demonstrates each supplied requirement. This is an evidence and completeness review, not a legal or certification opinion.

## Workflow

1. Identify the authoritative requirement set, its version/date, target document, submission context, deadline, mandatory format, and exclusions. If requirements are not supplied, request them or clearly scope the work to a non-authoritative planning checklist.
2. Normalize requirements into atomic IDs without changing meaning. Preserve exact source location, modality (`must`, `should`, optional), evidence expected, and dependencies.
3. Read [references/traceability-matrix.md](references/traceability-matrix.md). Map each requirement to exact document evidence: section/page/line, quoted fragment when permitted, evidence strength, and status.
4. Use only `met`, `partial`, `missing`, `conflict`, `ambiguous`, or `not-applicable-with-rationale`. Do not award `met` for promises, headings, or implied evidence.
5. Identify cross-document inconsistencies, missing attachments, stale evidence, unsupported claims, formatting failures, and requirements with no owner.
6. Prioritize remediation by mandatory status, submission blocker, user-supplied risk, dependency, and effort. Never invent audit-criticality or legal severity.
7. Deliver the matrix, blocker summary, remediation actions, questions for the responsible expert, and review limitations. Keep edits proposed until the user asks to change the document.

## Hard boundaries

- Do not claim certification, legal compliance, regulatory applicability, or professional approval.
- Do not create requirements from memory when an authoritative checklist should be supplied.
- Do not silently reinterpret ambiguous requirements; quote and escalate them.
- Do not submit, sign, attest, or transmit the reviewed artifact without explicit authorization.
- Preserve confidential source material and minimize excerpts in outputs.

## Attribution

Adapted from the MIT-licensed `compliance-checklist` Skill in `mohitagw15856/pm-claude-skills`. XOPC changes the task from generating regulatory controls to comparing a document against supplied requirements, adds atomic traceability and evidence statuses, and removes any implied readiness/certification judgment.
