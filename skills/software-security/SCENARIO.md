# Software security

## User outcome

Understand credible abuse paths in a concrete software system and turn them into evidence-linked, prioritized mitigations without claiming a penetration test or compliance certification.

## Selected Skill

- `security-threat-model` — adapted from [OpenAI's Apache-2.0 Skill](https://github.com/openai/skills/tree/main/skills/.curated/security-threat-model). It leads the reviewed threat-model category and has a strong repository-grounded output contract.

## Boundary and overlap

Threat modeling is an explicit security-design request. It does not replace vulnerability scanning, secure-code review, incident response, compliance assessment, or remediation. The Skill starts read-only and does not probe live systems.

## Evaluated alternatives

- OpenAI's broad `security-best-practices` package is useful but large, language-specific, and overlaps normal secure implementation; it remains a watchlist candidate for a future secure-code-review Skill.
- Provider-specific AWS and tool-specific threat-model Skills were narrower than the cross-repository outcome required here.
