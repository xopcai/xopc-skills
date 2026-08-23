# XOPC Skill Portfolio Strategy

## 产品定位

XOPC 官方 Skill 是“为一个重复用户任务提供可复用、可验证工作流的能力产品”。它不等同于提示词、工具说明、知识文章或 MCP Connector。

判断形式时采用以下边界：

| 需求本质 | 首选形态 |
|---|---|
| 需要模型遵循非显然的领域流程 | Skill |
| 需要访问外部系统或账户 | Connector / MCP，必要时配套 Skill |
| 需要确定性转换或校验 | Skill 内脚本 |
| 需要持续交互界面 | Extension / App |
| 只是稳定知识或 API 查阅 | 官方文档或按需 reference |

## 供给分层

官方仓库只维护两类内容：

- **XOPC Original**：XOPC 对场景、实现、评测和维护全部负责。
- **XOPC Adapted**：基于许可证允许的高质量上游，XOPC 对适配版本负责，并保留完整来源记录。

Store 后续可以展示 Curated 和 Community，但它们不应进入本仓库冒充官方维护内容。

## 选品优先级

优先选择同时满足以下条件的场景：

1. 用户需要多个步骤才能得到最终结果。
2. 通用模型容易遗漏关键步骤、做出错误假设或重复造轮子。
3. XOPC 能提供独特知识、连接能力、模板或确定性验证。
4. 输出成功与否能够被观察或评分。
5. 任务有稳定需求和明确维护者。

首版采用 `2 + 4`：两个 XOPC 独有工作流，加四个经过许可证审查的高频开源适配场景。后续每个 release train 同时推进不超过六个 experimental Skill。

## v0.1 组合

候选发现优先使用 VoltAgent 官方团队分区，但排序仍以 XOPC 场景优先级为准。

### XOPC Original

1. 将已有 AI 应用接入 XOPC Model Gateway，并验证请求、流式输出和错误处理。
2. 创建并验证一个可信的 XOPC Connector。

### Open-source Adaptation Candidates

3. React Native 性能诊断：固定 CallStack MIT Skill，并加入 XOPC 评测与发布门槛。
4. PostgreSQL 生产审查：固定 Supabase MIT 规则库，收窄触发并加入只读/回滚边界。
5. Playwright Web E2E：从 TestMu MIT Skill 吸收 selector、assertion 和调试模式，改为本地优先。
6. 用户发布说明：从 Paweł Huryn MIT Skill 吸收用户价值写法，增加 shipped 状态和证据门槛。

XOPC Tunnel 因缺少稳定终端用户 Client/CLI 契约继续处于 discovery。媒体工作流和 Next.js 继续调研，不进入 v0.1。

PDF、DOCX、PPTX、XLSX 暂不直接派生 Anthropic 实现；其文档 Skill 是高质量参考，但许可证限制复制和衍生。
