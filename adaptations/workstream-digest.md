# Adaptation Record: workstream-digest

- Source: `https://github.com/openai/plugins`, `plugins/slack/skills/slack-daily-digest` at `11c74d6ba24d3a6d48f54a194cd00ef3beea18f9`.
- License: MIT.
- Decision: Adapt the upstream's strongest decision rules into a provider-neutral XOPC scenario, remove connector placeholders and fixed client commands, and add explicit evidence and mutation boundaries.
- XOPC changes: Generalized Slack to team collaboration sources; Allowed explicit periods beyond one day; Preserved scope-first retrieval and added evidence pointers plus omission reporting.
