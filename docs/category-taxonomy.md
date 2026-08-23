# Store category taxonomy

Store categories are broad user-facing discovery routes. They are intentionally separate from the repository's finer scenario directories, which continue to own trigger boundaries, workflows, evaluations, and maintenance.

| Category ID | English | 简体中文 | Skills |
|---|---|---|---:|
| `engineering-technology` | Engineering & Technology | 工程与技术 | 19 |
| `office-productivity` | Office Productivity | 办公效率 | 15 |
| `data-research` | Data Analysis & Research | 数据分析与研究 | 10 |
| `product-design` | Product, Design & Media | 产品、设计与多媒体 | 5 |
| `project-collaboration` | Projects & Collaboration | 项目与协作 | 5 |
| `marketing-sales` | Marketing & Sales | 营销与销售 | 3 |
| `business-operations` | Business Operations | 商业运营 | 5 |
| `education-career` | Education & Career | 教育与职业发展 | 4 |
| `personal-life` | Personal Life & Services | 个人生活与公共服务 | 6 |
| `safety-privacy` | Safety & Privacy | 安全与隐私 | 2 |

## Classification rules

- Choose the category by the user's primary desired outcome, not by the tool or file type used internally.
- Keep exactly one display category per Skill and one category per scenario.
- Add or split a category only when users need a distinct browsing entry, not whenever a new scenario is introduced.
- Keep no more than 10 active categories and 20 Skills in any category.
- Remove empty categories from releases.

The machine-readable source of truth is [`registry/categories.json`](../registry/categories.json). The Store release manifest carries the category independently from `skills/<scenario>/<skill-name>`, so scenario organization can evolve without fragmenting the Store taxonomy.
