# VoltAgent-First Intake

## 定位

`VoltAgent/awesome-agent-skills` 是 XOPC 的首要开源 Skill 发现入口，尤其优先其 `Official Skills by` 分区。原因不是条目数量，而是它把大量官方团队维护的 Skill 汇总到同一目录，显著降低场景调研成本。

它不是 XOPC 的内容源，也不是自动质量认证。该目录明确说明条目经过整理但没有完成安全审计。因此 XOPC 不直接复制目录内容，也不以“被收录”为发布依据。

## Intake 流程

```text
XOPC 用户场景
  → VoltAgent Official Skills 优先检索
  → 回溯原始 GitHub 仓库与固定 commit
  → 许可证 / 安全 / 依赖审查
  → 与同场景最多两个候选比较
  → Adopt / Adapt / Reimplement / Reference only
  → XOPC trigger + task eval
  → candidate / stable
```

1. 先在 `registry/scenarios.json` 找到已批准场景。没有用户证据的上游灵感只能进入 `registry/scenario-opportunities.json`。
2. 在 `registry/voltagent-intake.json` 记录要跟踪的官方条目、对应场景、用途与优先级。
3. 运行 `npm run sync:voltagent`，确认条目确实存在于固定版本的官方分区，并生成可审查清单。
4. 访问生成结果中的 `indexUrl`，回溯页面给出的原始 GitHub 仓库，并人工确认 `originalRepository`。`officialskills.sh` URL 的路径不能用于推断仓库名。
5. 将通过初筛的原仓库加入 `registry/upstreams.json`，记录 commit 与许可证状态。
6. 完成 `templates/adaptation-record.md`，再进入实现和评测。

## 优先级

- P1：与已批准 XOPC 场景直接匹配，立即做原仓库深审。
- P2：能补强现有场景或形成高潜场景，先收集用户证据。
- P3：只有结构启发或生态覆盖价值，暂不投入实现。

官方团队、一手领域知识和明确许可证能提高评审顺序，但不能跳过 Q0-Q7 质量门槛。无明确许可证默认 `Reference only`。

## 可重复运行

联网环境：

```bash
npm run sync:voltagent
npm run check:voltagent
```

审查固定版本的本地 clone：

```bash
node tooling/sync-voltagent-shortlist.mjs --git-dir /path/to/awesome-agent-skills
```

升级 VoltAgent commit 必须使用单独 PR。PR 中同时审查新增、删除、改名、原仓库变更和许可证变化，不允许自动升级并直接进入官方 Skill。
