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
registry/             场景、候选来源和已发布 Skill 的机器可读目录
schemas/              registry 数据契约
skills/<scenario>/<skill-name>/  按用户场景组织的官方 Skill
evals/<skill-name>/   不进入安装包的触发与任务评测
templates/            场景简报和上游适配记录模板
tooling/              仓库校验与后续评测工具
```

当前发布线为 `v0.7 experimental`，包含 30 个场景组、55 个场景和 53 个互斥 Skill。Experimental 表示结构、来源、安全边界和基础评测资产已通过仓库门禁，允许通过真实使用继续验证；它不等于已获得真实用户 baseline 的 stable 推荐。

## 当前能力

机器可读的完整能力清单以 [场景组 registry](registry/scenario-groups.json) 和 [Skill registry](registry/skills/) 为唯一事实来源；面向维护者的简表见 [场景目录](skills/README.md) 和 [能力边界图](docs/scenario-capability-map.md)。每个场景目录的 `SCENARIO.md` 记录用户结果和相邻边界。

v0.7 再次审查八个指定上游仓库，新增 Git 冲突解决、规格拆解、产品决策原型、安全所有权分析、音频转写、讲解视频制作和品牌规范应用。每项能力都有固定来源、许可证、10+10 触发样例、5 个任务 fixture，并保持外部写入、付费调用、媒体上传、素材权利和发布的显式授权边界。

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
```

校验器检查 registry 数据、场景目录、来源与许可证、Skill 基础规范、引用文件、每个 Skill 的 10+10 触发集和至少 5 个任务 fixture。脚本测试使用本地 mock 验证 Model Gateway、Connector 安全、Notebook 模板与覆盖保护、GitHub Actions 日志解析，以及安全所有权分析。它们不替代真实任务 baseline。
