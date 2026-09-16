---
name: contract-risk-review
description: "Review a supplied contract from a stated party and business purpose, add clause-level risk comments without changing the source text, and produce a traceable issue register, objective summary, and escalation list. Use for contract risk review; do not use for obligation tracking, legal certification, or a definitive legal opinion."
license: Apache-2.0
metadata:
  author: XOPC, adapted from anbeime/skill
  version: "0.18.3"
---

# Contract Risk Review

Review the exact supplied contract version and preserve the original text.

## Workflow

1. Confirm the file/version, review language, reviewing party, transaction purpose, jurisdiction if supplied, materiality threshold, deadline, and requested output format. State missing items instead of assuming them.
2. Extract a clause index with stable locators. Record unreadable pages, OCR uncertainty, missing schedules, broken cross-references, and signature/version gaps before substantive review.
3. Review in three passes using [the checklist](references/checklist.md): document integrity; commercial terms and operating feasibility; legal terms and allocation of risk.
4. For every issue record the locator, quoted or faithfully paraphrased text, issue type, severity rationale, affected party, practical consequence, proposed clarification or revision, and whether qualified counsel must decide it.
5. Add comments or annotations only. Never silently redline the original. If an editable reviewed copy is requested, create a separate output and verify the source file hash or immutable copy remains available.
6. Check consistency across definitions, money, dates, scope, acceptance, term, termination, liability, IP, confidentiality, data, notices, governing law, and schedules. Do not infer missing clauses.
7. Produce an objective summary separately from the risk opinion. Generate a business-flow diagram only from explicit contract events and conditions.
8. Render and inspect any generated document. Confirm every comment is anchored, all high-severity findings appear in the register, and no source text changed.

## Deliverables

- Review scope and source/version record
- Clause-level comment set and risk register
- Objective commercial summary
- Conflicts, omissions, and missing-material list
- Questions and escalation points for business owners or qualified counsel

## Boundaries

- This is decision support, not legal advice, enforceability certification, or a substitute for jurisdiction-qualified counsel.
- Use `contract-obligation-tracking` when the primary job is extracting duties and deadlines from an executed agreement.
- Never invent governing law, market practice, missing schedules, or negotiation authority.
- Preserve privileged and confidential material within the user's authorized storage and sharing scope.
