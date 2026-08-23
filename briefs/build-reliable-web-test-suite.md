# Scenario Brief: build-reliable-web-test-suite

## Status

Experimental。由 VoltAgent 的 TestMu 官方条目发现并基于 MIT Skill 做本地优先适配；需要更多真实应用验证启动、认证和数据清理差异。

## User and outcome

目标用户是已有 Web 应用、需要为关键旅程补充或修复 Playwright E2E 的开发团队。输出包含匹配现有项目的测试、运行配置、失败证据和测试边界。

成功意味着测试能检测受控失败，修复后重复通过，不靠硬等待、共享状态或削弱断言，并且敏感 trace/screenshot 得到控制。

## Boundaries

- 本地为默认；云端网格和生产目标需要明确授权。
- 不用于通用浏览器操作、抓取或非 Web 单元测试。
- 测试数据必须唯一且清理范围受限。

## Evaluation

fixture 覆盖现有 TS suite、新 suite、认证复用、API mock、flaky race 和生产 URL 拒绝路径。机器评分检查命令结果、硬等待、定位器、断言与 artifact 设置。
