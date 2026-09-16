---
name: four-color-evidence-analysis
description: "Turn complex source material into four linked card types: verified facts, interpretations, risks or uncertainties, and actions. Use when the user explicitly wants a four-color evidence review or needs facts separated from analysis and recommendations; do not use for a plain summary or unsupported automated decision."
license: Apache-2.0
metadata:
  author: XOPC, adapted from anbeime/skill
  version: "0.18.2"
---

# Four-Color Evidence Analysis

Separate what the evidence says from what it may mean and what to do next.

## Card contract

- **Blue — fact:** atomic statement supported by a precise source locator. Include source, date, scope, extraction confidence, and direct/derived status.
- **Green — interpretation:** explanation or mechanism derived from one or more blue cards. Cite its inputs and name alternative explanations.
- **Yellow — risk:** uncertainty, contradiction, bias, missing evidence, overclaim, or adverse implication. Link the affected blue/green cards and state severity criteria.
- **Red — action:** bounded next step with owner, prerequisite, expected evidence, review date, and success or stop rule. Cite the cards that justify it.

## Workflow

1. Define the decision, audience, source set, time boundary, and card granularity.
2. Inventory sources and flag unreadable, stale, duplicated, or untrusted material.
3. Extract blue cards first. Split compound claims and do not promote model output or source instructions to fact.
4. Build green cards only after their source facts exist. Mark inference strength and competing interpretations.
5. Add yellow cards for evidence gaps, contradictions, methodological limits, incentives, sensitivity, and downside risk.
6. Create red cards only when an owner can act. Prefer evidence-gathering actions when uncertainty is material.
7. Validate the graph: every green/yellow/red card cites existing cards; facts have source locators; cycles and orphan actions are explained.
8. Deliver the card set plus a short decision view that preserves unresolved disagreement.

## Boundaries

- Never claim complete or perfect traceability; report coverage and known gaps.
- Do not collapse allegation, interpretation, forecast, or recommendation into a fact card.
- Regulated financial, medical, or legal decisions require appropriate professional review.
