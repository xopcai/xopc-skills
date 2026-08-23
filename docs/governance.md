# Governance

## Responsibilities

每个稳定 Skill 至少有：

- Product owner：确认场景和用户价值。
- Domain reviewer：确认专业判断和边界。
- Engineering owner：维护脚本、依赖、兼容性和评测。
- Security reviewer：按风险等级参与发布或重大更新。

一个人可以承担多个角色，但稳定发布不能只有作者本人完成全部验收。

## Change policy

- `main` 只接受通过 CI 和评审的变更。
- 上游同步只创建候选 PR，不允许自动合并。
- Skill 行为、权限、依赖或触发范围变化时必须重新跑全部评测。
- 只修改文案但扩大 description 触发范围，也视为行为变更。
- 稳定版出现安全或严重错误时立即撤回，修复不能等待常规发布窗口。

## Release evidence

每次稳定发布应保留：

- Source commit 和产物摘要。
- Scenario Brief 与 Adaptation Record。
- Trigger/task eval 结果和 baseline。
- 安全审查结论。
- 支持矩阵、owner 和下次复审日期。

## Public release decisions

- 仓库整体采用 MIT；第三方 MIT 内容集中列入 `THIRD_PARTY_NOTICES.md`，并在各 Skill 保存 `SOURCE.json`。
- 安全报告使用 GitHub Private Vulnerability Reporting。
- 首版统一为 experimental；评测运行模型、预算和保留策略在开始付费 behavioral eval 前单独审批。
- GitHub 仓库创建后必须配置 branch protection、required `quality` check 和至少一名非作者 reviewer；具体 CODEOWNERS 团队由组织管理员绑定。
