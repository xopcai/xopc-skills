# Scenario Brief: review-production-postgres

## Status

Experimental。采用 Supabase MIT 规则库并收窄为生产审查；待用匿名真实 schema、EXPLAIN 和锁等待案例验证建议准确率。

## User and outcome

目标用户是准备上线 migration、诊断慢查询/连接耗尽/锁等待，或审查 RLS 租户隔离的工程团队。交付物是证据、风险等级、建议 SQL、预期影响、验证方式与回滚方案。

## Boundaries

- 默认只读分析；未经授权不连接或修改生产数据库。
- `EXPLAIN ANALYZE` 可能执行查询，先判断写入副作用和成本。
- 规则必须结合版本、数据分布、查询频率和写放大，不机械套用。

## Evaluation

fixture 覆盖缺索引、错误复合索引、RLS 性能、连接池、死锁与普通 SQL 语法负例。机器检查建议是否引用证据、包含回滚且没有直接执行高风险 DDL。
