# Scenario Brief: diagnose-react-native-performance

## Status

Experimental。采用 CallStack MIT 一手知识，待在不同 React Native/Expo 版本与真实设备上完成 baseline 对照。

## User and outcome

目标用户是遇到掉帧、启动慢、重渲染、内存增长或包体膨胀的 React Native 团队。交付物是基线测量、按影响排序的原因、最小修复、同条件复测和未解决风险，而不是一份通用优化清单。

## Boundaries

- 必须先测量再优化；版本相关建议先检查版本。
- 不凭猜测推荐 memoization、状态库或架构重写。
- 不在未授权时安装分析工具、修改原生工程或上传构建产物。

## Evaluation

fixture 覆盖长列表掉帧、广泛重渲染、冷启动 TTI、JS/原生内存、bundle 体积与没有性能证据的近似请求。评分强调前后指标和可逆改动。
