# Scenario Brief: build-trusted-xopc-connector

## Status

Experimental。XOPC Store 已有稳定的 Connector manifest 和安全扫描契约；需要通过真实第三方 MCP 服务验证安装后工具清单与权限描述一致性。

## User and outcome

目标用户是希望把已有远程 MCP 服务加入 XOPC 目录的服务商或平台工程师。输入包括官方端点、认证方式、工具清单、凭证范围、数据边界和服务 owner；输出是通过本地校验的 `xopc.connector.json`、权限摘要、验证证据与回滚责任人。

成功意味着 manifest 通过确定性校验，远程端点为公共 HTTPS，声明权限覆盖且不低估实际工具能力，凭证不进入包，发布仍由独立审批完成。

## Boundaries

- 包含远程 HTTPS MCP 与显式审核、精确版本的 npm stdio MCP。
- 不实现 MCP server，不自动创建凭证，不自动批准或发布。
- OAuth 在共享 broker 支持前只能设计，不能发布。
- 高风险步骤遵循 plan → validate → authorize → execute。

## Evaluation

触发集覆盖“为服务做 XOPC Connector”“验证 manifest”“最小权限 MCP 包装”；负例覆盖实现 MCP server、普通 Store Skill、安装现有 Connector。任务 fixture 覆盖 API key、无认证、本地 npm、危险 loopback、未声明 secret 和权限不一致。
