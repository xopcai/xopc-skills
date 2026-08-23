# Adaptation Record: React Native Best Practices

- Repository: https://github.com/callstackincubator/agent-skills
- Path / commit: `skills/react-native-best-practices` at `2766baa46ca0fe7c16cc5ab4d0077ccec2e95fb9`
- Accessed: 2026-08-23
- License: MIT, Copyright (c) 2026 Callstack Incubator; modification and redistribution permitted with notice.
- Decision: Adapt for `diagnose-react-native-performance`.

The full Skill and references are pinned because they contain first-party measurement, JavaScript/native/bundle routing, and version guardrails. XOPC adds external trigger/task fixtures, release metadata and maintenance responsibility; no upstream execution is automatic.

Runtime risks include optional third-party profiling tools, native build commands, device access and release artifacts. Agents must measure first, inspect versions, obtain authorization before installing or running tools, and remeasure the same interaction. Upstream updates enter review through a pinned-commit diff; stable promotion requires multi-version device evidence.
