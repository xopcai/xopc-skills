# OPC Skill recovery audit — 2026-08-24

## Historical evidence

The XOPC application repository introduced ten bilingual business Skills in commit `ad6df8ec5d15d0e222e48fd3310a250a9bf16104` on 2026-05-06 under `skills/business/`: `company-values`, `find-community`, `first-customers`, `grow-sustainably`, `marketing-plan`, `minimalist-review`, `mvp`, `pricing`, `processize`, and `validate-idea`.

They remained present at parent commit `e1fd5fbf4af1071068af9bb5f4b65ac0c9b7f309` and were removed from the application tree by commit `8ea2a18155c7a1f0242e6bc30eb469e4e8dd3de4` on 2026-06-18 as part of a broad bundled-Skill deletion. The source repository was MIT-licensed by XOPC. This release recovers the product intent and stable names into the official Skill repository; it does not restore application bundling.

A separate `x-twitter-growth-ops` Skill appeared in commit `aa17c4c049639b8911bc5636aa9cbc18a6df6123`. It is not restored as a distributed Skill because its execution contract depends on a specific third-party plugin, includes channel operations adjacent to `china-social-content-adaptation` and `content-campaign-pack`, and would make the OPC category tool-dependent. Its useful read-only research, approval and measurement principles are incorporated into `marketing-plan` without copying the provider workflow.

## Quality decision

The historical ten formed a coherent OPC lifecycle, but the old instructions relied heavily on one named business book, repeated illustrative company stories as general guidance, used universal customer and timing thresholds, and lacked the repository's current evidence, authorization, privacy and evaluation gates. Direct restoration would therefore reduce quality.

Version 0.14 independently rewrites each Skill around:

- explicit assumptions, dated evidence, contradictory signals and decision rules;
- one clear lifecycle owner and near-miss boundaries against existing general Skills;
- founder time, delivery capacity, contribution, cash timing and reversibility;
- consent, personal-data, messaging, publishing, payment and external-mutation gates;
- ten positive and ten negative trigger fixtures plus five adversarial task fixtures.

## Non-overlap map

| OPC Skill | Owns | Adjacent Skill stops at |
|---|---|---|
| `find-community` | authentic community selection before an offer | `competitive-intelligence`: market and competitor comparison |
| `validate-idea` | problem, behavior and payment evidence verdict | `user-research-synthesis`: synthesis without investment verdict |
| `processize` | learning-stage paid manual delivery | `sop-authoring`: controlled mature procedure |
| `mvp` | smallest value-delivering risk experiment | `decision-prototype`: throwaway decision artifact |
| `pricing` | offer price, unit economics and test | `personal-budget-review`: household finances |
| `first-customers` | permission-aware founder-led sales loop | `prospect-research`: verified list without outreach |
| `marketing-plan` | positioning, channel and conversion system | `content-campaign-pack`: campaign asset system |
| `grow-sustainably` | binding constraint under cash and capacity | generic marketing: acquisition only |
| `minimalist-review` | periodic business health and constraint choice | `weekly-planning-review`: capacity-feasible personal week |
| `company-values` | observable founder operating principles | `internal-communications`: communication artifact |
