# Software delivery

## User outcome

Use domain-specific engineering evidence to reduce release risk and communicate what actually shipped.

## Selected Skills

- `playwright-webapp-testing` — adapted from [TestMu/LambdaTest](https://github.com/LambdaTest/agent-skills); owns reliable browser E2E design and execution.
- `supabase-postgres-best-practices` — adapted from [Supabase](https://github.com/supabase/agent-skills); first-party PostgreSQL performance and security review guidance.
- `react-native-best-practices` — adapted from [Callstack](https://github.com/callstackincubator/agent-skills); specialist React Native measurement and diagnosis.
- `release-notes` — adapted from [Paweł Huryn's PM skills](https://github.com/phuryn/pm-skills); converts shipped evidence into user-facing release notes.
- `code-review` — adapted from [Matt Pocock's Skills](https://github.com/mattpocock/skills); reviews a bounded diff independently against requirements and repository standards.
- `systematic-debugging` — adapted from [obra/superpowers](https://github.com/obra/superpowers); uses reproduction, causal tracing, and minimal hypothesis tests before a fix.
- `github-actions-ci-fix` — adapted from the current [OpenAI GitHub plugin](https://github.com/openai/plugins); deterministically inspects failing Actions checks and requires approval before editing.
- `test-driven-development` — adapted from [obra/superpowers](https://github.com/obra/superpowers); owns explicitly selected red-green-refactor implementation evidence.
- `github-review-comments` — adapted from [OpenAI Plugins](https://github.com/openai/plugins); owns triage and closure of feedback on an existing pull request.

## Boundary and overlap

Each Skill owns a distinct artifact and trigger: browser tests, database review, mobile performance diagnosis, release communication, bounded code review, defect diagnosis, CI recovery, explicitly requested TDD implementation, or existing PR feedback closure. None can claim successful deployment or repair without fresh evidence.

## Evaluated alternatives

- Official domain-owner Skills are preferred over broad development bundles because their advice is easier to source, test, and update.
- Security threat modeling is separated into `software-security`; incident response, CI-system design, and deployment remain future scenarios rather than additions to this group.
