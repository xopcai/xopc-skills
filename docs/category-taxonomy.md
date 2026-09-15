# Store category taxonomy

Store categories retain the 12 functional level-one categories exposed by the SkillHub China public category API and add one XOPC-native category for the product's defining one-person-company journey. `Pay Skill` is excluded because it describes a commercial attribute rather than a user capability. Fine-grained scenario directories continue to own triggers, workflows, evaluations, and maintenance.

| Category ID | English | 简体中文 | Skills |
|---|---|---|---:|
| `office-efficiency` | Office Efficiency | 办公效率 | 14 |
| `content-creation` | Content Creation | 内容创作 | 5 |
| `dev-programming` | Development | 开发编程 | 13 |
| `data-analysis` | Data Analysis | 数据分析 | 7 |
| `design-media` | Design & Media | 设计多媒体 | 6 |
| `ai-agent` | AI Agent | AI Agent | 5 |
| `knowledge-management` | Knowledge Management | 知识管理 | 4 |
| `business-ops` | Business Operations | 商业运营 | 12 |
| `education` | Education | 教育学习 | 5 |
| `professional` | Professional | 行业专业 | 8 |
| `it-ops-security` | IT Ops & Security | IT 运维与安全 | 6 |
| `life-service` | Life Service | 生活服务 | 7 |
| `one-person-company` | One-Person Company | 一人公司（OPC） | 10 |

## Classification rules

- Use SkillHub's public level-one taxonomy for general capabilities and reserve `one-person-company` for the coherent XOPC founder lifecycle.
- Exclude `pay-skill`; paid/free state belongs in package commerce metadata, not the capability taxonomy.
- Choose the category by the user's primary desired outcome, not by an internal tool or file type.
- Keep exactly one functional category per Skill and per scenario, at most 50 Skills per category, no more than 13 categories, and remove empty categories.
- A marketplace listing is discovery evidence only. Redistribution requires a verified license; otherwise XOPC builds an independent implementation.

The machine-readable source of truth is [`registry/categories.json`](../registry/categories.json). Release manifest schema v3 carries `category` independently from `skills/<scenario>/<skill-name>`.
