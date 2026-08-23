# Software security

## User outcome

Understand credible abuse paths in a concrete software system and turn them into evidence-linked, prioritized mitigations without claiming a penetration test or compliance certification.

## Selected Skills

- `security-threat-model` — adapted from [OpenAI's Apache-2.0 Skill](https://github.com/openai/skills/tree/main/skills/.curated/security-threat-model). It leads the reviewed threat-model category and has a strong repository-grounded output contract.
- `secure-code-review` — adapted from OpenAI's security best-practices Skill; owns explicit code-level vulnerability review for Python, JavaScript/TypeScript, and Go.

## Boundary and overlap

Threat modeling owns system boundaries and attack paths; secure code review owns concrete implementation paths and framework defaults. Both start read-only and neither authorizes live exploitation, compliance certification, or remediation.

## Evaluated alternatives

- OpenAI's broad `security-best-practices` package is adapted into a narrower explicit review Skill; its large frozen reference library is replaced by current authoritative-source routing.
- Provider-specific AWS and tool-specific threat-model Skills were narrower than the cross-repository outcome required here.
