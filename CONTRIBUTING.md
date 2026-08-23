# Contributing

本仓库只接受由已评审场景驱动的 Skill 变更。

## 提交流程

1. 在 `registry/scenarios.json` 中登记场景，并提交完整 Scenario Brief。
2. 评审该能力究竟应是 Skill、Connector、Extension，还是普通文档。
3. 调研上游实现，完成 Adaptation Record 和许可证确认。
4. 实现 `skills/<name>/`，同时添加 `registry/skills/<name>.json` 和 `evals/<name>/`。
5. 运行 `npm run validate`、`npm run test:scripts` 和 `npm run check:voltagent`，再执行真实任务评测。
6. PR 中附上基线对比、失败案例、安全结论和人工验收记录。

不得以“热门”“下载量高”或“已有很多同类 Skill”为唯一立项理由。不得提交来源不明、许可证不兼容或只修改名称的第三方 Skill。

每个 Skill 的 `SKILL.md` 应保持核心工作流精简；按需知识放入 `references/`，重复且要求确定性的操作放入 `scripts/`，最终输出会复用的模板放入 `assets/`。
