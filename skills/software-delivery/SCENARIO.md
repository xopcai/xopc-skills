# Software delivery

## User outcome

Use domain-specific engineering evidence to reduce release risk and communicate what actually shipped.

## Selected Skills

- `playwright-webapp-testing` — adapted from [TestMu/LambdaTest](https://github.com/LambdaTest/agent-skills); owns reliable browser E2E design and execution.
- `supabase-postgres-best-practices` — adapted from [Supabase](https://github.com/supabase/agent-skills); first-party PostgreSQL performance and security review guidance.
- `react-native-best-practices` — adapted from [Callstack](https://github.com/callstackincubator/agent-skills); specialist React Native measurement and diagnosis.
- `release-notes` — adapted from [Paweł Huryn's PM skills](https://github.com/phuryn/pm-skills); converts shipped evidence into user-facing release notes.

## Boundary and overlap

Each Skill owns a distinct artifact and trigger: browser tests, database review, mobile performance diagnosis, or release communication. None is a generic code-review Skill, and none can claim successful deployment without evidence.

## Evaluated alternatives

- Official domain-owner Skills are preferred over broad development bundles because their advice is easier to source, test, and update.
- Security review, incident response, CI design, and deployment are candidates for separate scenarios rather than additions to this already broad group.
