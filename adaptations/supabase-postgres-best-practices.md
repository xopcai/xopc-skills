# Adaptation Record: Supabase Postgres Best Practices

- Repository: https://github.com/supabase/agent-skills
- Path / commit: `skills/supabase-postgres-best-practices` at `8331f910845103c08d51f6ca1d86ebb7d1f745e3`
- Accessed: 2026-08-23
- License: MIT, Copyright (c) 2026 Supabase; modification and redistribution permitted with notice.
- Decision: Adapt for `review-production-postgres`.

The rule library is retained because it organizes concrete incorrect/correct SQL and evidence by impact. XOPC narrows automatic discovery from all PostgreSQL authoring to production performance, schema/migration, connection, locking and RLS review, and adds a read-only default plus explicit authorization/rollback boundaries.

No production connection or DDL is bundled. Risks are costly `EXPLAIN ANALYZE`, write-amplifying indexes, locks and RLS regressions. Upstream changes require rule-level human review; stable promotion requires blind review on anonymized plans and supported PostgreSQL versions.
