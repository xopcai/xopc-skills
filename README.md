# XOPC Official Skills

XOPC 官方 Skill 仓库。这里维护的是经过场景定义、来源审查、安全检查和真实任务评测的能力，不是第三方 Skill 镜像或数量型合集。

## 核心原则

1. **场景先于 Skill**：先证明用户任务真实、重复且值得产品化，再决定是否创建 Skill。
2. **证据先于推荐**：没有来源、许可证、评测和维护责任的 Skill 不进入稳定目录。
3. **适配而非搬运**：第三方 Skill 必须记录来源、固定 commit、许可证和 XOPC 差异。
4. **价值优先**：场景价值明确且能改善交付质量的 Skill 可以先进入 Experimental，通过真实使用继续收敛。
5. **可验证交付**：能用脚本验证的结果，不只依赖模型自评。

## 仓库结构

```text
docs/                 产品策略、场景方法、质量标准和上游适配规则
registry/             展示分类、场景、候选来源和已发布 Skill 的机器可读目录
schemas/              registry 数据契约
skills/<scenario>/<skill-name>/  按用户场景组织的官方 Skill
evals/<skill-name>/   不进入安装包的触发与任务评测
templates/            场景简报和上游适配记录模板
tooling/              仓库校验与后续评测工具
```

当前发布线为 `v0.18 experimental`，包含 13 个中英双语功能分类、97 个细粒度场景目录、137 个场景和 156 个互斥 Skill。Experimental 表示结构、来源、安全边界和基础评测资产已通过仓库门禁，允许通过真实使用继续验证；它不等于已获得真实用户 baseline 的 stable 推荐。

## 当前能力

机器可读的功能分类以 [分类 registry](registry/categories.json) 为唯一事实来源，完整能力清单以 [Skill registry](registry/skills/) 为准。分类只服务 Store 浏览和筛选，具体触发与质量边界仍由 97 个场景目录维护；每个分类的容量上限为 50 个 Skill。映射见 [分类体系](docs/category-taxonomy.md)、[场景目录](skills/README.md) 和 [能力边界图](docs/scenario-capability-map.md)。

v0.17 审查 `anbeime/skill` 固定 commit 的 84 个 Skill 入口，去重、许可证回溯和依赖审查后接入 8 个任务：Obsidian Markdown、Canvas、Bases，合同风险批注，四色证据分析，Agent 运行溯源，不可信内容入库安检，以及 X Articles 草稿发布。完整选择与排除理由见 [anbeime 接入审计](docs/anbeime-skill-intake-2026-09.md)。

v0.16 固定审查 Corey Haines `marketingskills` v2.11.1 的 50 个 Skill：46 个非重叠任务完成 XOPC 适配并按测量、内容、开发、设计、商业运营和行业专业分类上线；4 个重复任务映射到现有主责 Skill。完整映射、命名冲突和授权边界见 [营销技能接入审计](docs/coreyhaines-marketingskills-intake-2026-09.md)。

v0.15 根据 WorkBuddy 实际可见市场与 QwenWork 公开资料新增 12 个原创技能，补齐文档转换、长文与小说、浏览器事务、提示词与技能创建、工作交接、财务运营、合同履约、PRD 和入职协同。范围、接入缺口和未完成的行为验证见 [竞品技能对照审计](docs/workbuddy-qwenwork-intake-2026-09.md)。

v0.14 在 12 个 SkillHub 对齐分类之外新增 XOPC 原生的“一人公司（OPC）”分类，从 XOPC 应用 Git 历史找回十个业务生命周期技能名并按当前质量标准独立重写。历史提交、舍弃项和非重叠边界见 [OPC 恢复审计](docs/opc-skill-recovery-2026-08.md)。

完整来源和版权见 [第三方声明](THIRD_PARTY_NOTICES.md)，每个适配 Skill 还包含固定 commit 的 `SOURCE.json`。

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
npm run test:store-release
```

校验器检查 registry 数据、场景目录、来源与许可证、Skill 基础规范、引用文件、每个 Skill 的 10+10 触发集和至少 5 个任务 fixture。脚本测试使用本地 mock 验证 Model Gateway、Connector 安全、Notebook 模板与覆盖保护、GitHub Actions 日志解析，以及安全所有权分析。它们不替代真实任务 baseline。

## 发布到 XOPC Store

本仓库是 XOPC Store 官方 Skill 的唯一来源。`npm run build:store-release` 从 `registry/skills` 递归解析场景目录，为每个 Skill 生成确定性 ZIP，并生成包含固定 commit 和 SHA-256 的完整目录 Release。生产发布仅由 GitHub Release 工作流或显式 `npm run publish:store-release -- <bundle> --publish` 执行；Store 不从第三方 Skill 市场同步内容。

发布 manifest 使用 schema v4，声明 `en` 和 `zh-CN` 的用户可见名称与简介；每个 Skill ZIP 同时包含 `xopc-skill.json`。XOPC 安装后读取该文件，按用户语言展示和检索 `/` 技能，但插入消息和执行时始终使用 `SKILL.md` 中稳定的机器名。
