# Scenario Brief: connect-ai-app-to-xopc-models

## Status

Experimental。产品与技术边界、首版 Skill 和确定性脚本已形成；真实用户表达、baseline 与线上兼容性数据仍需补充，暂不宣称 stable。

## User and situation

- **User role**：已有 Node.js、Python 或其他 OpenAI-compatible 应用的开发者。
- **Triggering situation**：希望将语言模型请求迁移到 XOPC Model Gateway，或验证现有 OpenAI SDK 集成是否兼容。
- **Current workflow**：手动修改 base URL、认证和 model，然后逐个排查协议、流式响应、错误处理与额度问题。
- **Observed product facts**：Gateway 提供 `/v1/models`、`/v1/chat/completions` 和 `/v1/responses`；公开推理使用 OAuth Bearer access token；不同公开模型可能通过多个 provider target 路由。

## User-evidence gap

进入 candidate 前至少收集三条未经统一改写的真实请求，并确认：

- 用户最常使用的 SDK、语言和框架。
- 用户所说的“接入成功”是单次请求成功，还是包含流式、tool calling、重试和线上观测。
- OAuth token 获取是否是主要阻碍。
- 用户遇到的高频不兼容参数和错误响应。

这些证据会决定 Skill 是只做语言模型迁移，还是拆成迁移、认证和多模态三个 Skill。第一版建议只覆盖语言模型客户端迁移。

## Desired outcome

### Inputs

- 一个用户授权分析和修改的应用仓库。
- 当前使用的 SDK、请求协议和目标模型用途。
- XOPC API base URL；生产默认候选为 `https://router.xopc.ai/v1`，执行时仍需从当前官方配置确认。
- 可用 OAuth access token，或完成 OAuth 授权的条件。Skill 不应要求用户把 token 粘贴到普通聊天输出。

### Deliverable

- 对现有调用点、协议和依赖的兼容性清单。
- 最小范围的配置或代码修改。
- 不包含秘密的环境变量示例。
- `/v1/models`、非流式和流式请求的验证证据。
- 失败时给出可操作分类：认证、模型不可用、额度/限流、请求不兼容、上游故障。
- 变更摘要、已验证项和未验证风险。

### Success checks

- 原有测试不回退。
- 至少一个公开模型完成非流式请求。
- 应用原本使用流式时，完成流式结束和错误路径验证。
- 日志、diff 和最终回答中不出现 token。
- 不将免费模型静默替换为计费模型。

## Boundaries

### Included in v1

- 发现 OpenAI SDK 或兼容客户端的初始化与调用点。
- Chat Completions 与 Responses API 的兼容迁移。
- Base URL、Bearer token、model 和流式行为验证。
- 对常见 HTTP/协议错误进行证据化诊断。

### Non-goals

- 配置 XOPC 上游 provider、key pool、公共模型发布或管理员额度策略。
- 自动创建、导出或展示 OAuth 凭证。
- 自动迁移图片、STT、TTS；这些协议应单独验证后再决定是否扩展。
- 重写整个 AI 架构、Prompt 或业务逻辑。
- 在用户未授权时发起真实计费请求。

### Near misses

- “帮我选择一个模型”不应触发迁移 Skill。
- “配置一个新的模型提供商”属于 XOPC 管理工作流。
- “解释 OpenAI Responses API”属于文档问答。
- “生成一张图片”属于直接模型使用，不是客户端迁移。

## Product-shape decision

这是 Skill，而不是单纯 Connector：任务需要代码发现、协议判断、最小修改、真实验证和失败恢复。Gateway 本身是调用端点，Skill 负责把一个已有应用可靠地迁移到该端点。

Supabase 官方 Skill 的方法可作为 pattern reference：关键安全与非显然产品规则保留在短入口，变化快的细节要求查询当前官方文档，并提供反馈闭环。不得复制 Supabase 产品逻辑。

预期的可复用资源：

- `scripts/detect-openai-clients.*`：识别语言、SDK、初始化点和协议。
- `scripts/smoke-test.*`：在不打印 token 的前提下测试 models、非流式和流式请求。
- `references/compatibility.md`：只记录 XOPC 与常见 SDK 的非显然差异。
- `references/errors.md`：按认证、额度、限流、兼容性和上游错误路由。

是否真的需要脚本，要通过至少三个原型执行轨迹确认，避免提前构建无用工具。

## Evaluation plan

### Trigger evaluation

至少 10 个真实迁移表达和 10 个 near misses。覆盖“切换 endpoint”“兼容 OpenAI SDK”“迁移到 XOPC”“验证 streaming”等不同说法，负例集中在模型选择、管理员配置、普通 API 问答和一次性生成请求。

### Task evaluation

第一批 fixture：

1. Node.js OpenAI SDK + Chat Completions 非流式。
2. Python OpenAI SDK + Responses API。
3. Node.js 流式请求，验证正常结束和中途错误。
4. 缺少 token，只完成安全配置计划，不产生伪造成功。
5. 使用不存在模型，正确区分模型目录问题与认证问题。
6. 仓库同时存在多个 AI provider，只修改用户指定调用路径。

### Baseline and graders

- Baseline：同一模型在不加载 Skill 的情况下完成相同任务。
- 机器检查：diff 范围、测试结果、token 泄漏扫描、base URL、协议请求和流式结束事件。
- 人工检查：迁移是否最小、错误解释是否准确、是否保留用户架构意图。
- 稳定版门槛沿用 `docs/quality-standard.md`，并要求零凭证泄漏。

## Risks

- Gateway 和 SDK 行为持续变化，Skill 必须读取当前 XOPC 文档，不能复制一份长期失真的 API 手册。
- 真实 smoke test 可能产生计费或消耗额度，执行前应向用户说明并获得授权。
- 错误可能来自上游 provider，而不是 XOPC 兼容层，诊断必须保留证据和不确定性。
- OAuth access token 是短期敏感数据，脚本必须从环境或安全凭证入口读取且不回显。

## Ownership to assign before build

- Product owner：待 XOPC 指定。
- Domain reviewer：Model Gateway 维护者。
- Engineering owner：待 XOPC 指定。
- Security reviewer：认证、凭证和真实请求评审必须参与。
