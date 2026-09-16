---
name: form-survey-builder
description: Design a form or survey from a clear collection goal, including concise questions, answer types, branching, validation, privacy notes, and a response schema. Use for feedback, intake, registration, or internal data collection; do not use for statistical analysis of responses or silently publishing and distributing a live form.
metadata:
  version: "0.18.2"
---

# Form and Survey Builder

Start with the decision or workflow the responses must support, target respondents, collection period, required completion time, and delivery platform if chosen. Remove questions whose answers will not change a decision or process.

Choose the simplest answer type that preserves useful data. Ask one concept per question; use mutually exclusive options where appropriate, include an explicit not-applicable path, and avoid leading, double-barreled, or unnecessarily sensitive questions. Put demographic or sensitive fields only when justified and disclose purpose and retention expectations.

Use branching only when it shortens the respondent path or requests necessary follow-up. Validate ranges, formats, and required fields without blocking legitimate edge cases. Define stable field identifiers and a response schema before platform implementation.

Return form purpose, audience, intro and privacy note, ordered questions with type/options/required state, branching and validation rules, response schema, and a test checklist covering every path. Preview the final form before publishing.

Creating a live form, changing access, collecting identity, emailing it, or exporting responses requires explicit authorization. Do not promise anonymity when the platform or settings collect identifiers.
