# Adaptation Record: Netlify AI Gateway → XOPC Model Gateway

## Upstream identity

- Repository: https://github.com/netlify/context-and-tools
- Skill path: `skills/netlify-ai-gateway`
- Commit: `32a261b6b2437464aca7e51bf9b48bcac1e2835c`
- Accessed at: 2026-08-23
- Maintainer: Netlify
- Discovery path: VoltAgent official section → officialskills.sh → original GitHub repository

## License review

- License: MIT, Copyright (c) 2025 Netlify
- Files reviewed: root `LICENSE`, `skills/netlify-ai-gateway/SKILL.md`
- Modification allowed: yes
- Redistribution allowed: yes, with copyright and permission notice
- Attribution / NOTICE requirements: retain MIT copyright and permission notice for copied or substantial portions
- Reviewer: initial XOPC repository review; legal sign-off still required before copying content

## Decision

- Mode: Reimplement
- Scenario served: `connect-ai-app-to-xopc-models`
- Why this upstream was selected: it is the closest official gateway Skill found through the prioritized VoltAgent intake. Its 200-line entry front-loads non-obvious failure rules, covers several provider SDKs, separates browser/build/runtime constraints, and avoids hard-coded model catalogs.
- Alternatives considered: Supabase product Skill pattern, current XOPC manual integration knowledge, provider-specific SDK documentation.

The MIT license permits adaptation, but the useful facts are almost entirely Netlify-specific. Copying would carry incorrect authentication, environment variables, deployment activation, timeouts, billing and privacy assumptions into XOPC. XOPC should absorb the product-design pattern and write its behavior from first-party XOPC contracts and tests.

## Quality audit

### Patterns to absorb

- Description names concrete user tasks and deployment contexts instead of broad “AI integration” wording.
- Safety and failure-prone rules appear before the happy-path example.
- Official SDKs are preferred over hand-written HTTP when that reduces accidental incompatibility.
- Dynamic model availability is queried rather than encoded as a static catalog.
- Local development, production execution, streaming and long-running behavior are treated as distinct paths.
- The final workflow points back to current product documentation for changing facts.

### Patterns not to absorb

- Netlify environment variable names, automatic credential injection and zero-configuration assumptions.
- Netlify production-deploy activation, plan, credit, rate-limit, timeout and privacy claims.
- Illustrative model IDs as XOPC defaults.
- Generated “house rules” comments or source-generator conventions.
- A purely instructional Skill without XOPC detection, smoke-test and secret-leak checks.

### Evidence gaps

- No trigger or task eval fixtures are present beside the reviewed Skill.
- No deterministic validation script is packaged with the Skill.
- Several pricing, rate-limit and model examples are time-sensitive and need documentation freshness controls.
- The Skill assumes a new server-side Netlify function more strongly than the XOPC scenario, which begins with an existing application.

## Change inventory

- Copied unchanged: none
- Modified: none
- Reimplemented: trigger boundary, client discovery, gateway configuration, protocol checks, streaming checks and error classification will be authored from XOPC behavior
- Removed: all Netlify runtime, credential, deployment, billing and platform claims
- XOPC-specific additions: OAuth secret handling, `/v1/models`, Chat Completions and Responses compatibility, multi-provider ambiguity, no silent paid-model substitution, token leak scanning, evidence-based smoke tests

## Runtime and security

- Network access: upstream Skill itself is instructional; the XOPC implementation will access current XOPC docs and, only with authorization, gateway endpoints
- Filesystem access: read application manifests and call sites; write only minimal user-approved configuration/code changes
- Local execution: package-manager discovery, existing tests and bounded smoke tests
- Credentials: XOPC OAuth access token from environment or secure credential provider; never print, persist in fixtures or place in chat
- Dependencies and pinning: prefer existing application SDK; any helper dependency requires explicit review and pinning policy
- Security findings: primary risks are credential leakage, unintended paid requests, changing models, and modifying the wrong provider call path

## Maintenance

- Upstream update detection: review the pinned Netlify path when the VoltAgent source commit or Netlify source commit changes
- Merge policy: no automatic merge; upstream diffs can update design notes only after human review
- Divergence accepted: complete product and runtime divergence is intentional
- Deprecation condition: XOPC Gateway contract changes materially, official product tooling replaces the workflow, or task evals show no benefit over baseline

## Gate status

- Q0 Scenario: blocked on three raw user prompts and assigned owners
- Q1 Source/license: passed for pattern study; no files copied
- Q2-Q7: not started because implementation is intentionally deferred until Q0 passes
