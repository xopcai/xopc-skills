# Scenario Brief: write-evidence-based-release-notes

## Status

Experimental。由 VoltAgent 收录的 Paweł Huryn MIT Skill 适配，加入已发布状态、证据和安全披露检查。

## User and outcome

目标用户是需要从 PR、ticket、changelog 和迁移文档生成外部发布说明的产品与工程团队。输出是面向受影响用户的 Markdown，以及不进入公开文本的证据缺口清单。

成功意味着每项公开陈述可追溯，未上线变更被排除，破坏性变化包含行动要求，内部编号、私密客户、密钥和未经证明的指标没有泄露。

## Boundaries

- 不把 roadmap、合并未部署或 feature flag 内部变更写成已发布。
- 不搜索或公布未授权的安全漏洞细节。
- 不为营销效果捏造速度、规模和采用率。

## Evaluation

fixture 覆盖混合状态 ticket、breaking API、敏感安全修复、缺少指标依据、多受众和无来源输入。评分检查可追溯性、用户价值、行动要求、排除项与敏感信息。
