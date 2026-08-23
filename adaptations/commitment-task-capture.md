# Adaptation Record: commitment-task-capture

- Source: `https://github.com/openai/plugins`, `plugins/outlook-email/skills/outlook-email-task-extraction` at `11c74d6ba24d3a6d48f54a194cd00ef3beea18f9`.
- License: MIT.
- Decision: Adapt the upstream's strongest decision rules into a provider-neutral XOPC scenario, remove connector placeholders and fixed client commands, and add explicit evidence and mutation boundaries.
- XOPC changes: Expanded email-only extraction to bounded cross-source intake; Added evidence identity, duplicate handling, and proposed writeback; Separated explicit deadlines from urgency and all external mutations.
