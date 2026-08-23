# XOPC Official Skills

XOPC 官方 Skill 仓库。这里维护的是经过场景定义、来源审查、安全检查和真实任务评测的能力，不是第三方 Skill 镜像或数量型合集。

## 核心原则

1. **场景先于 Skill**：先证明用户任务真实、重复且值得产品化，再决定是否创建 Skill。
2. **证据先于推荐**：没有来源、许可证、评测和维护责任的 Skill 不进入稳定目录。
3. **适配而非搬运**：第三方 Skill 必须记录来源、固定 commit、许可证和 XOPC 差异。
4. **少而完整**：一个 Skill 应覆盖一个可组合的完整任务，而不是宽泛知识集合。
5. **可验证交付**：能用脚本验证的结果，不只依赖模型自评。

## 仓库结构

```text
docs/                 产品策略、场景方法、质量标准和上游适配规则
registry/             场景、候选来源和已发布 Skill 的机器可读目录
schemas/              registry 数据契约
skills/<scenario>/<skill-name>/  按用户场景组织的官方 Skill
evals/<skill-name>/   不进入安装包的触发与任务评测
templates/            场景简报和上游适配记录模板
tooling/              仓库校验与后续评测工具
```

当前发布线为 `v0.3 experimental`。Experimental 表示结构、来源、安全边界、评测资产和确定性脚本已通过仓库门禁，允许受控试用；它不等于已获得真实用户 baseline 的 stable 推荐。

## v0.3 场景 Skill

| 场景目录 | Skill | 用户结果 | 来源 |
|---|---|---|---|
| `api-integration` | `xopc-model-gateway` | 将 OpenAI-compatible 应用迁移到 XOPC 并验证请求/流式 | XOPC Original |
| `api-integration` | `xopc-connector-builder` | 为远程或审核后的本地 MCP 制作最小权限 Connector | XOPC Original |
| `software-delivery` | `playwright-webapp-testing` | 为现有 Web 应用建立可靠的 Playwright E2E | TestMu MIT Adapted |
| `software-delivery` | `supabase-postgres-best-practices` | 审查生产 PostgreSQL 性能、RLS、schema 和锁风险 | Supabase MIT Adapted |
| `software-delivery` | `react-native-best-practices` | 用测量证据诊断 React Native 性能 | CallStack MIT Adapted |
| `software-delivery` | `release-notes` | 从已发布变更生成有证据的用户发布说明 | Paweł Huryn MIT Adapted |
| `decision-research` | `evidence-based-research` | 从多源事实形成可追溯的决策简报 | Microsoft MIT Adapted |
| `meeting-execution` | `meeting-to-actions` | 将会议记录转成决策、责任人与待确认写回计划 | Mohit Aggarwal MIT Adapted |
| `content-campaign` | `content-campaign-pack` | 从业务目标形成内容支柱、资产 brief、渠道适配和度量 | Corey Haines MIT Adapted |
| `sales-account-research` | `prospect-research` | 按 ICP、时机信号和来源验证高质量潜客 | Corey Haines MIT Adapted |
| `document-compliance` | `document-requirements-review` | 按显式要求形成专业文档逐条证据矩阵 | Mohit Aggarwal MIT Adapted |
| `weekly-planning` | `weekly-planning-review` | 关闭开放循环并生成容量可行的下周计划 | Alireza Rezvani MIT Adapted |
| `product-interface-design` | `frontend-design` | 设计并渲染验证有辨识度、响应式且可访问的 Web 界面 | Anthropic Apache-2.0 Adapted |
| `software-delivery` | `code-review` | 按需求和仓库标准形成证据化代码审查 | Matt Pocock MIT Adapted |
| `software-delivery` | `systematic-debugging` | 通过复现、假设和最小实验定位软件根因 | obra MIT Adapted |
| `software-security` | `security-threat-model` | 形成仓库证据驱动的攻击路径和缓解方案 | OpenAI Apache-2.0 Adapted |
| `data-notebooks` | `jupyter-notebook` | 创建或重构可从头运行的实验和教程 Notebook | OpenAI Apache-2.0 Adapted |
| `software-delivery` | `github-actions-ci-fix` | 从 GitHub Actions 日志定位并经批准修复 CI | OpenAI Apache-2.0 Adapted |

11 个用户场景组及其唯一 Skill 归属见 [`skills/README.md`](skills/README.md) 和 [`registry/scenario-groups.json`](registry/scenario-groups.json)。每个场景目录的 `SCENARIO.md` 记录选择理由、能力边界和未采用候选。本轮 8 个指定上游的完整审计见 [`docs/upstream-audit-2026-08.md`](docs/upstream-audit-2026-08.md)。仓库门禁限制每个场景组最多 20 个 Skill，并禁止同一个 Skill 重复归属多个组。

完整来源和版权见 [第三方声明](THIRD_PARTY_NOTICES.md)，每个适配 Skill 还包含 `SOURCE.json`。

## 安装

从 GitHub 安装指定 Skill：

```bash
npx skills add https://github.com/xopcai/xopc-skills --skill xopc-model-gateway
npx skills add https://github.com/xopcai/xopc-skills --skill playwright-webapp-testing
npx skills add https://github.com/xopcai/xopc-skills --skill evidence-based-research
npx skills add https://github.com/xopcai/xopc-skills --skill meeting-to-actions
npx skills add https://github.com/xopcai/xopc-skills --skill frontend-design
npx skills add https://github.com/xopcai/xopc-skills --skill systematic-debugging
```

也可以 clone 后从本地路径安装，适合评审固定 commit：

```bash
git clone https://github.com/xopcai/xopc-skills.git
npx skills add ./xopc-skills --skill release-notes
```

上游调研默认采用 [VoltAgent-First Intake](docs/voltagent-intake.md)：优先从 VoltAgent 的官方团队分区发现候选，再回溯原仓库做许可证、安全、依赖和效果审查。被索引不等于被 XOPC 批准。

## 工作流

```text
用户场景 → 场景评审 → 上游调研 → Build / Adopt / Adapt 决策
        → Skill 实现 → 触发评测 → 任务评测 → 安全与人工评审 → 发布
```

开始一个场景前，先填写 [Scenario Brief](templates/scenario-brief.md)。准备采用或改造开源 Skill 时，再填写 [Adaptation Record](templates/adaptation-record.md)。

## 本地验证

```bash
npm run validate
npm run test:scripts
npm run check:voltagent
```

校验器检查 registry 数据、场景目录、来源与许可证、Skill 基础规范、引用文件、每个 Skill 的 10+10 触发集和至少 5 个任务 fixture。脚本测试使用本地 mock 验证 Model Gateway、Connector 安全、Notebook 模板与覆盖保护，以及 GitHub Actions 日志解析。它们不替代真实任务 baseline。
