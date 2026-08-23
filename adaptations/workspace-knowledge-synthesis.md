# Adaptation Record: workspace-knowledge-synthesis

- Source: `https://github.com/anthropics/knowledge-work-plugins`, `enterprise-search/skills/knowledge-synthesis` at `5267cf7bff3031921d4474b8e8f86ad02d2b8f6d`.
- License: Apache-2.0.
- Decision: Adapt the upstream's strongest decision rules into a provider-neutral XOPC scenario, remove connector placeholders and fixed client commands, and add explicit evidence and mutation boundaries.
- XOPC changes: Made the workflow provider-neutral; Replaced fixed authority rankings with query-sensitive evidence assessment; Added explicit scope, access-gap, conflict, and no-write boundaries.
