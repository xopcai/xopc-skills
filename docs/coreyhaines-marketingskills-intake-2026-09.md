# Corey Haines Marketing Skills intake — 2026-09

- Repository: https://github.com/coreyhaines31/marketingskills
- Release: `v2.11.1`
- Fixed commit: `5b2c0007766c6a1cf1d53fd8fc73e979e0821022`
- License: MIT
- Reviewed inventory: 50 Skills
- Added: 46 adapted Experimental Skills
- Mapped to existing ownership: 4 Skills

## Added and categorized

| Upstream | Store Skill | Scenario | Category | Decision |
|---|---|---|---|---|
| `ab-testing` | `ab-testing` | 设计可信的营销实验 | data-analysis | 适配上线 |
| `analytics` | `analytics` | 建立营销测量与归因 | data-analysis | 适配上线 |
| `attribution` | `attribution` | 建立营销测量与归因 | data-analysis | 适配上线 |
| `ai-seo` | `ai-seo` | 审查搜索与 AI 可见性 | data-analysis | 适配上线 |
| `seo-audit` | `seo-audit` | 审查搜索与 AI 可见性 | data-analysis | 适配上线 |
| `aso` | `aso` | 优化应用商店表现 | data-analysis | 适配上线 |
| `ads` | `ads` | 规划和优化付费广告 | professional | 适配上线 |
| `ad-creative` | `ad-creative` | 规划和优化付费广告 | professional | 适配上线 |
| `cro` | `cro` | 优化关键转化界面 | design-media | 适配上线 |
| `onboarding` | `onboarding` | 优化关键转化界面 | design-media | 适配上线 |
| `paywalls` | `paywalls` | 优化关键转化界面 | design-media | 适配上线 |
| `popups` | `popups` | 优化关键转化界面 | design-media | 适配上线 |
| `signup` | `signup` | 优化关键转化界面 | design-media | 适配上线 |
| `image` | `image` | 制作营销图片与视频 | design-media | 适配上线 |
| `video` | `video` | 制作营销图片与视频 | design-media | 适配上线 |
| `programmatic-seo` | `programmatic-seo` | 建设可发现的网站基础 | dev-programming | 适配上线 |
| `schema` | `schema` | 建设可发现的网站基础 | dev-programming | 适配上线 |
| `site-architecture` | `site-architecture` | 建设可发现的网站基础 | dev-programming | 适配上线 |
| `emails` | `emails` | 设计生命周期消息 | content-creation | 适配上线 |
| `sms` | `sms` | 设计生命周期消息 | content-creation | 适配上线 |
| `social` | `social` | 规划社交媒体内容 | content-creation | 适配上线 |
| `copywriting` | `copywriting` | 创作与编辑营销文案 | content-creation | 适配上线 |
| `copy-editing` | `copy-editing` | 创作与编辑营销文案 | content-creation | 适配上线 |
| `cold-email` | `cold-email` | 编写合规冷邮件 | content-creation | 适配上线 |
| `public-relations` | `public-relations` | 准备公共关系材料 | content-creation | 适配上线 |
| `co-marketing` | `co-marketing` | 设计合作营销计划 | business-ops | 适配上线 |
| `influencer-marketing` | `influencer-marketing` | 设计合作营销计划 | business-ops | 适配上线 |
| `community-marketing` | `community-marketing` | 建立社区营销循环 | business-ops | 适配上线 |
| `churn-prevention` | `churn-prevention` | 诊断并降低客户流失 | business-ops | 适配上线 |
| `referrals` | `referrals` | 设计推荐增长机制 | business-ops | 适配上线 |
| `events` | `events` | 策划活动与产品发布 | content-creation | 适配上线 |
| `launch` | `launch` | 策划活动与产品发布 | content-creation | 适配上线 |
| `lead-magnets` | `lead-magnets` | 设计获客内容资产 | content-creation | 适配上线 |
| `free-tools` | `free-tools` | 规划营销型免费工具 | dev-programming | 适配上线 |
| `directory-submissions` | `directory-submissions` | 建立可复用分发循环 | business-ops | 适配上线 |
| `marketing-loops` | `marketing-loops` | 建立可复用分发循环 | business-ops | 适配上线 |
| `competitors` | `competitors` | 创作公平的竞品比较页 | content-creation | 适配上线 |
| `sales-enablement` | `sales-enablement` | 制作销售支持内容 | content-creation | 适配上线 |
| `marketing-council` | `marketing-council` | 制定公司营销策略 | professional | 适配上线 |
| `marketing-ideas` | `marketing-ideas` | 制定公司营销策略 | professional | 适配上线 |
| `marketing-plan` | `company-marketing-plan` | 制定公司营销策略 | professional | 适配上线 |
| `offers` | `offers` | 制定产品营销与商业化策略 | professional | 适配上线 |
| `pricing` | `product-pricing` | 制定产品营销与商业化策略 | professional | 适配上线 |
| `product-marketing` | `product-marketing` | 制定产品营销与商业化策略 | professional | 适配上线 |
| `marketing-psychology` | `marketing-psychology` | 审查营销行为设计 | professional | 适配上线 |
| `revops` | `revops` | 设计收入运营系统 | business-ops | 适配上线 |

## Existing ownership mappings

| Upstream | Existing XOPC Skill | Decision |
|---|---|---|
| `content-strategy` | `content-campaign-pack` | 已有主责覆盖，保留现有深度适配 |
| `prospecting` | `prospect-research` | 已有主责覆盖，保留外联与 CRM 隔离 |
| `customer-research` | `user-research-synthesis` | 已有主责覆盖，保留证据追溯边界 |
| `competitor-profiling` | `competitive-intelligence` | 已有主责覆盖，保留公平比较与来源边界 |

## Adaptation rules

All packages retain MIT attribution and a fixed `SOURCE.json`. Upstream eval files are excluded from installable ZIPs and converted into XOPC trigger/task fixtures. Routing collisions are renamed (`marketing-plan` → `company-marketing-plan`, `pricing` → `product-pricing`). External sends, publishing, ad spend, submissions, and account writes stay inside explicit user authorization and require result verification. Volatile platform claims must be dated and checked against current primary sources.
