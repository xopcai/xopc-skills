---
name: secure-code-review
description: Review Python, JavaScript/TypeScript, or Go code for concrete secure-by-default violations and produce evidence-linked remediation. Trigger only for an explicit application-security review or secure coding request; do not use for general code review or threat modeling.
metadata:
  version: "0.4.0"
---

# Secure Code Review

Identify the languages, frameworks, trust boundaries, data handled, and deployment context in scope. Prefer current official framework and platform security guidance; record the versions and sources used when recommendations depend on them.

## Review priorities

Trace untrusted input through authentication, authorization, validation, queries, templates, file paths, redirects, deserialization, outbound requests, secrets, and logging. Check secure defaults for sessions, cookies, CORS, CSRF, cryptography, dependency configuration, error handling, and resource limits where relevant.

Every finding needs a tight code location, attacker-controlled condition, concrete impact, evidence path, severity rationale, and smallest compatible remediation. Separate confirmed vulnerabilities from hardening opportunities and questions. Do not report missing TLS when it is intentionally terminated outside the application, or recommend controls without considering the actual deployment model.

Default to a read-only report. Before fixing, assess compatibility and tests, obtain authorization when the request was review-only, change one coherent risk at a time, and verify both the security property and functional regression surface. Never perform live exploitation or access production data without explicit scope and authorization.
