---
name: security-threat-model
description: Build a repository-grounded application security threat model with scoped components, trust boundaries, assets, attacker capabilities, abuse paths, risk reasoning, and mitigations. Trigger only for explicit threat-modeling requests; do not use for generic architecture summaries, compliance certification, or ordinary code review.
metadata:
  version: "0.18.2"
---

# Security Threat Model

Produce a concise, reviewable model tied to repository evidence. Prefer a small set of realistic abuse paths over a generic security checklist.

## Scope safely

Confirm the repository or subpath in scope and identify excluded components. Read architecture, deployment, authentication, tenancy, data classification, and entrypoint evidence available in the repository. Treat tests, examples, build tooling, and runtime components separately.

Start read-only. Do not probe live systems, run exploit payloads, change security controls, or access secrets merely to improve the model.

## Build the system model

1. Identify runtime components, data stores, external services, protocols, and deployment assumptions.
2. Map trust boundaries as concrete edges and record authentication, authorization, validation, encryption, rate limiting, and audit controls only when supported by evidence.
3. List assets whose confidentiality, integrity, or availability drives risk.
4. Identify entry points including endpoints, uploads, parsers, background jobs, admin tools, and logging sinks.
5. Define realistic attacker capabilities and explicit non-capabilities based on exposure.

## Derive and rank abuse paths

For each high-value path, connect attacker precondition → entry point → boundary crossed → action → impacted asset → user or business impact. Cite repository evidence and mark assumptions.

Use qualitative likelihood and impact with short reasons. Existing controls reduce risk only when their placement and enforcement are evidenced. Do not inflate severity from hypothetical capabilities outside the stated deployment.

## Validate material assumptions

Ask up to three focused questions only when answers could change scope or ranking—for example internet exposure, tenant isolation, data sensitivity, or identity model. If the user cannot answer, continue with labelled assumptions and explain how they affect priority.

## Recommend controls

Tie each mitigation to a boundary, component, or entry point and distinguish existing from proposed controls. Prefer concrete control locations and validation plans. Do not claim that the threat model proves compliance or absence of vulnerabilities.

Use [the output contract](references/output-contract.md). Return the report in the response unless the user asked for a file; a threat-model request alone does not authorize repository writes.
