---
name: prospect-research
description: Turn a defined ideal-customer profile into a small, verified, evidence-linked prospect list with fit, timing signals, confidence, and disqualifiers. Use for B2B account discovery and qualification; do not use for general market research, private-person profiling, contact scraping, or outbound messaging.
license: MIT
metadata:
  author: XOPC, adapted from Corey Haines
  version: "0.18.0"
---

# Prospect Research

Optimize for qualified, explainable accounts rather than list size.

## Workflow

1. Define the selling motion, ICP, geography, target count, buying/timing signals, disqualifiers, allowed sources, and lawful contact-data basis. If the ICP is vague, produce and confirm a pass/fail rubric before discovery.
2. Pick one dominant branch: SaaS, general B2B, local business, or demand-signal discovery. Do not mix scoring logic across branches without explaining it.
3. Discover 2–3× the target count from permitted public or licensed sources. Do not bypass login walls, CAPTCHAs, robots controls, contractual restrictions, or rate limits.
4. Verify company identity and every material qualification claim. Read [references/qualification-and-safety.md](references/qualification-and-safety.md). Record source URL, observed date, evidence, and confidence.
5. Score fit separately from timing. A strong company match without a current buying signal is not a hot lead. Apply explicit disqualifiers and retain rejected counts/reasons.
6. Deduplicate by canonical domain and business identity. Prefer fewer verified accounts over filling a quota with low-confidence rows.
7. Deliver a lead sheet and top-priority rationale. Keep unknown contacts blank. A separate Skill or explicit request is required for copywriting, sending outreach, or CRM writes.

## Minimum lead-sheet fields

```text
company | domain | ICP fit | timing signal | evidence URLs | confidence |
contact channel (public/authorized only) | verified date | disqualifier notes
```

## Hard boundaries

- No bulk scraping of LinkedIn, maps, directories, paywalled services, or authenticated pages.
- No breached, leaked, guessed, or unprovenanced personal contact data.
- Never infer or target health, religion, politics, sexuality, financial hardship, or other sensitive traits.
- Do not mark a lead “hot” without evidence of both fit and timing.
- Do not contact prospects, enrich through paid services, or write to a CRM without explicit authorization and applicable access.

## Attribution

Adapted from Corey Haines' MIT-licensed `prospecting` Skill. XOPC narrows discovery to evidence-backed qualification, separates fit from timing, forbids quota-filling, and makes outreach/enrichment/CRM execution distinct authorized steps.
