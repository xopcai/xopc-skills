---
name: product-requirements-authoring
description: Develop or revise a PRD from user problems, evidence and constraints before implementation breakdown. Use for 编写PRD、梳理产品需求、需求范围和验收定义; approved-spec ticket splitting, prototypes and code implementation have separate owners.
metadata:
  version: "0.18.0"
---

# Product Requirements Authoring

Identify the user, problem, triggering situation, evidence, desired outcome and decision owner. Separate observed problems from proposed solutions and stakeholder preferences. Use existing research and constraints before requesting more. Do not silently convert an unverified feature idea into an approved requirement.

## Write a testable product contract
Describe current and intended behavior using concrete user journeys. State in-scope behavior, exclusions, prerequisites, permissions, data sources and dependencies. Cover empty, loading, failure and recovery states when they change user decisions. Specify accessibility and localization needs from the product context rather than adding a generic compliance promise.

Assign stable requirement IDs. For each, record source or rationale, priority, behavior and observable acceptance criteria. Use examples with inputs, state transitions and outcomes. Preserve unanswered questions explicitly; do not invent performance targets, user counts or business promises. Label a proposed target as an assumption needing an owner.

Define success metrics with numerator, denominator, measurement window and instrumentation availability. Separate the baseline from a proposed target and distinguish product outcomes from shipped-feature counts. Document material tradeoffs and alternatives when they affect scope.

## Control revisions
When priorities or facts change, update affected flows, requirements, acceptance criteria and dependencies together. Keep a short decision log and show unresolved conflicts. Do not claim stakeholder approval because a draft is complete.

Deliver the PRD, requirement/acceptance matrix and open decisions with owners or owner-needed status. Include rollout and rollback expectations where the behavior warrants them. If the user asks for tracker-ready implementation tasks from an approved PRD, hand that artifact to the relevant available capability; avoid silently creating tickets or starting development.
