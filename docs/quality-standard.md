# XOPC Skill Quality Standard

质量以证据门禁为主，不使用一个总分掩盖安全或来源问题。

## Q0 场景成立

- Scenario Brief 完整且有用户证据。
- Skill 是正确产品形态。
- 输出、非目标和维护责任明确。
- 每个 Skill 只有一个具体主场景和一个 Store 展示分类；展示分类总数不超过 10 个，每类最多 20 个已分发 Skill。
- 相邻能力通过 artifact 组合，不能用重复入口争抢同一用户请求。

## Q1 来源与许可证

- Original 内容有 XOPC owner。
- Adapted 内容固定上游仓库和 commit。
- 每个复制或派生文件都有许可证依据和归属说明。
- `unknown`、`mixed-unreviewed` 或禁止衍生的来源不能进入实现。

## Q2 结构与发现

- `SKILL.md` 的 name 与目录一致，description 同时说明能力和触发条件。
- 近似任务不会因为宽泛关键词被错误吸引。
- 核心入口保持精简，条件性内容按需放入 resources。
- 引用可达，没有未完成占位符或隐藏安装步骤。

## Q3 安全与权限

- 通过静态扫描、依赖审查和人工指令审查。
- 网络、文件、凭证、本地执行和破坏性动作全部披露。
- 对外部内容使用数据/指令隔离原则。
- 高风险动作采用 plan → validate → authorize → execute。

## Q4 触发评测

- 至少 10 个 should-trigger 和 10 个 near-miss should-not-trigger。
- 使用 held-out 样例；不能只测试写进 description 的原句。
- 稳定版初始目标：precision 与 recall 均不低于 0.90。

## Q5 任务结果评测

- 至少 5 个覆盖正常、缺输入、失败恢复和边界条件的真实任务。
- 同时运行无 Skill baseline 和当前候选版本。
- 稳定版初始目标：任务成功率不低于 80%，并相对 baseline 有明确提升；若提升主要体现在安全、确定性或成本，必须提供对应证据。
- 文件和代码输出优先用机器检查，主观质量再辅以盲评和人工评审。

## Q6 兼容性

- 声明并实际验证支持的 Agent、OS、运行时、工具和依赖。
- 不把某一客户端实验性 frontmatter 当作跨客户端保证。
- 客户端专用 UI metadata 与通用 `SKILL.md` 分离。

## Q7 发布与维护

- 版本、变更说明、source commit、评测报告和回滚路径齐全。
- 有明确 owner、reviewer 和复审日期。
- 上游变更只进入候选分支，不能自动覆盖稳定版本。

## 发布阶段

| 阶段 | 含义 |
|---|---|
| research | 场景或来源仍在调研，不提供安装 |
| experimental | 已实现，允许受控测试，不作官方推荐 |
| candidate | 全部门禁通过，等待有限用户验证 |
| stable | 有真实使用证据和维护承诺的官方版本 |
| deprecated | 有替代方案和迁移说明，不再推荐新安装 |
