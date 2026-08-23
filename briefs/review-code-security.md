# Scenario Brief: review-code-security

## User and outcome

Application teams need concrete security findings tied to attacker-controlled paths, code evidence, deployment context, and compatible remediation.

## Boundaries

- Explicit security request only; ordinary code review remains separate.
- Not architecture threat modeling or unauthorized live exploitation.
- Confirmed vulnerabilities, hardening, and open questions stay distinct.

## Evaluation

Fixtures cover authentication, authorization, injection, SSRF, XSS, secrets, logging, session defaults, false positives, and external TLS termination.
