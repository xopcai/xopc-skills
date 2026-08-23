# Upstream Sourcing and Adaptation

## 顺序

必须先确定场景，再搜索上游。不得先找到热门 Skill，再反向制造用户需求。

在上游搜索阶段，优先检查 `VoltAgent/awesome-agent-skills` 的官方团队分区，再回溯每个条目的原始仓库。详细规则见 [VoltAgent-First Intake](voltagent-intake.md)。若上游条目启发了新场景，只能先登记为场景机会，不能跳过用户证据。

每个场景最多选择三个上游进入深度评估，比较：

- 场景匹配度和边界。
- 维护者是否具有一手领域知识。
- 许可证能否复制、修改和分发。
- 是否包含脚本、模板、校验器和失败恢复，而不只是长提示词。
- 是否存在评测、真实使用、活跃维护和安全响应。
- 外部 API、二进制、凭证和客户端耦合程度。

## 四种决策

| 决策 | 使用条件 |
|---|---|
| Adopt | 原样固定版本分发，许可证允许且无需改变行为 |
| Adapt | 许可证允许派生，XOPC 有明确场景和运行时改造 |
| Reimplement | 只采用思想或公开规范，重新实现并保留参考说明 |
| Reference only | 许可证限制、耦合过强或不适合 XOPC，不复制内容 |

## 必需记录

使用 `templates/adaptation-record.md` 记录：

- 上游 URL、commit、具体 Skill 路径和访问日期。
- 许可证、copyright 和 NOTICE 要求。
- 哪些文件被复制、修改、重写或仅参考。
- XOPC 增加和删除的行为。
- 上游更新检测、合并策略和停止维护条件。
- 安全审查和依赖清单。

## 候选来源的当前处理

- `VoltAgent/awesome-agent-skills`：首要发现索引，优先其官方团队分区；不作为内容来源、安全审计或最终质量背书。
- `anthropics/skills`：逐 Skill 审查；PDF/DOCX/PPTX/XLSX 属 reference-only。
- `openai/plugins`：优先学习 Skill/Plugin 结构和官方工作流，逐目录审查许可证。
- `callstackincubator/agent-skills`：MIT，可进入 React Native 场景 Adapt 评估。
- `marswaveai/skills`：MIT，可评估场景组织、共享基础设施与媒体工作流，但需审查外部服务依赖。
