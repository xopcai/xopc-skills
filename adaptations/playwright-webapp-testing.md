# Adaptation Record: TestMu Playwright Skill

- Repository: https://github.com/LambdaTest/agent-skills
- Path / commit: `playwright-skill` at `0491a3a29aa18558d2c3c64ff09367adb976c56f`
- Accessed: 2026-08-23
- License: MIT, Copyright (c) 2025 TestMu AI / LambdaTest; modification and redistribution permitted with notice.
- Decision: Adapt and reimplement a narrower `playwright-webapp-testing` Skill.

XOPC retains the selector priority, web-first assertions, local/cloud decision, trace-based debugging and post-generation execution loop. TestMu-specific templates, mandatory cloud reporting, broad language catalog and service credentials are removed. XOPC adds production-target authorization, test-data cleanup and artifact sensitivity.

The Skill runs only project-selected Playwright tooling. Cloud grids are opt-in. Upstream updates are manually compared; no cloud dependency or credential field may reappear without a new scenario and security review.
