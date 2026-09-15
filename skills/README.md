# Scenario-organized Skills

Distributed Skills live at `skills/<scenario>/<skill-name>`. The scenario directory is a product boundary; the child directory is the installable Skill package.

| Scenario directory | Primary outcome | Selected Skills |
|---|---|---|
| `marketing-experimentation` | 把增长假设转化为有样本量、指标和停止规则的实验计划 | `ab-testing` |
| `marketing-analytics` | 把业务问题和事件数据转化为可审计的测量、分析与归因方案 | `analytics`, `attribution` |
| `search-visibility` | 基于可验证证据诊断传统搜索和 AI 答案中的可见性问题 | `ai-seo`, `seo-audit` |
| `app-store-growth` | 用关键词、商店素材和实验数据形成可验证的应用商店增长计划 | `aso` |
| `paid-advertising` | 形成有预算护栏、受众、创意和测量闭环的广告方案 | `ads`, `ad-creative` |
| `conversion-optimization` | 基于用户意图和证据改进页面、注册、引导、付费墙与弹窗 | `cro`, `onboarding`, `paywalls`, `popups`, `signup` |
| `marketing-media-production` | 把营销 brief 转化为有平台规格、品牌约束和验收标准的媒体资产 | `image`, `video` |
| `website-search-foundations` | 形成可实施、可验证的程序化页面、结构化数据和信息架构方案 | `programmatic-seo`, `schema`, `site-architecture` |
| `lifecycle-messaging` | 把用户阶段和行为信号转化为可测量、合规的邮件与短信序列 | `emails`, `sms` |
| `social-marketing` | 把品牌目标和受众证据转化为平台适配的社交内容与节奏 | `social` |
| `marketing-copy` | 形成清晰、可信、符合品牌和转化目标的营销文案 | `copywriting`, `copy-editing` |
| `cold-outreach` | 用可验证的相关性和低风险外联边界生成冷邮件及跟进序列 | `cold-email` |
| `earned-media` | 把可证实的新闻价值转化为媒体名单、pitch 和发布材料 | `public-relations` |
| `partner-marketing` | 形成目标一致、权益清晰且可衡量的品牌或创作者合作方案 | `co-marketing`, `influencer-marketing` |
| `community-marketing` | 把成员价值、运营节奏和反馈机制转化为可持续社区计划 | `community-marketing` |
| `retention-marketing` | 用流失信号、干预方案和护栏指标形成留存改进闭环 | `churn-prevention` |
| `referral-marketing` | 形成激励相容、可归因且防滥用的推荐计划 | `referrals` |
| `launch-marketing` | 把发布目标转化为时间线、渠道、资产、责任人和复盘指标 | `events`, `launch` |
| `lead-magnets` | 把用户问题转化为有明确交换价值和后续路径的获客资产 | `lead-magnets` |
| `marketing-free-tools` | 把高意图用户问题转化为可实现、可测量的免费工具方案 | `free-tools` |
| `growth-distribution` | 形成有渠道选择、质量门槛和归因方法的目录提交与增长循环 | `directory-submissions`, `marketing-loops` |
| `comparison-pages` | 基于可追溯证据形成有用、公平且可维护的比较或替代页面 | `competitors` |
| `sales-enablement` | 把买方问题和销售阶段转化为可验证、可复用的销售资产 | `sales-enablement` |
| `marketing-strategy` | 综合目标、市场证据和真实资源形成有取舍的营销路线图 | `marketing-council`, `marketing-ideas`, `company-marketing-plan` |
| `product-marketing-strategy` | 形成定位、Offer、包装和定价相互一致的产品营销决策 | `offers`, `product-pricing`, `product-marketing` |
| `marketing-psychology` | 用合乎伦理的行为科学视角改进用户理解与选择 | `marketing-psychology` |
| `revenue-operations` | 把营销、销售和客户成功数据转化为可执行的收入流程与治理 | `revops` |
| `one-person-company` | Founder evidence and constraints to a focused, profitable operating loop | `find-community`, `validate-idea`, `processize`, `mvp`, `pricing`, `first-customers`, `marketing-plan`, `grow-sustainably`, `minimalist-review`, `company-values` |
| `decision-research` | Evidence to decision brief | `evidence-based-research` |
| `meeting-execution` | Meeting record to owned execution | `meeting-to-actions` |
| `content-campaign` | Goal to measurable campaign package | `content-campaign-pack` |
| `sales-account-research` | ICP to verified prospect list | `prospect-research` |
| `api-integration` | API or external service to a validated agent integration | `xopc-model-gateway`, `xopc-connector-builder`, `mcp-server-builder` |
| `software-delivery` | Engineering evidence or production impact to safer recovery and release | `playwright-webapp-testing`, `supabase-postgres-best-practices`, `react-native-best-practices`, `release-notes`, `code-review`, `systematic-debugging`, `github-actions-ci-fix`, `test-driven-development`, `github-review-comments`, `merge-conflict-resolution`, `incident-response-coordination` |
| `document-compliance` | Supplied requirements to traceable review | `document-requirements-review` |
| `weekly-planning` | Open loops to a capacity-feasible week | `weekly-planning-review` |
| `product-interface-design` | Product brief to rendered and accessible interface | `frontend-design` |
| `software-security` | Architecture, code and ownership evidence to prioritized security action | `security-threat-model`, `secure-code-review`, `security-ownership-analysis` |
| `data-notebooks` | Analysis or lesson to reproducible `.ipynb` | `jupyter-notebook` |
| `internal-communications` | Operating facts to audience-appropriate internal update | `internal-communications` |
| `developer-tools` | Repeated workflow to durable agent-friendly CLI | `agent-cli-builder` |
| `software-architecture` | Leaky module to deep stable interface | `module-design` |
| `office-documents` | Source material to verified editable document or fixed-layout PDF | `document-authoring`, `pdf-workbench` |
| `office-data` | Tabular evidence to trustworthy workbook or visualization | `spreadsheet-workbench`, `data-visualization-report` |
| `office-presentations` | Purpose and evidence to a rendered editable deck | `presentation-deck` |
| `email-productivity` | Mailbox context to attention list or grounded reply draft | `inbox-triage`, `email-reply-drafting` |
| `calendar-productivity` | Calendar evidence to daily understanding, meeting readiness, or ranked slots | `daily-agenda-brief`, `meeting-preparation`, `group-scheduling` |
| `knowledge-workspace` | Scattered evidence to a cited answer or governed knowledge base | `workspace-knowledge-synthesis`, `knowledge-base-curation` |
| `work-management` | Communications, specs and project evidence to executable work | `commitment-task-capture`, `project-status-synthesis`, `workstream-digest`, `spec-to-work-items` |
| `business-operations` | Customer, financial, or process evidence to a reviewable operations package | `customer-support-ticket-triage`, `invoice-receipt-reconciliation`, `sop-authoring` |
| `language-localization` | Source content to locale-correct reviewed translation | `translation-localization-review` |
| `file-organization` | Bounded files to a safe, previewed and reversible organization plan | `safe-file-organization` |
| `forms-surveys` | Collection goal to testable form and response schema | `form-survey-builder` |
| `procurement-operations` | Vendor evidence to cost, risk and recommendation | `vendor-evaluation` |
| `people-operations` | Recruiting records to pipeline health and operating actions | `recruiting-pipeline-review` |
| `product-discovery` | One uncertain decision to observable prototype evidence | `decision-prototype` |
| `media-production` | Source media or facts to faithful transcript or verified explainer | `audio-transcription`, `explainer-video-production` |
| `brand-operations` | Approved brand guide to accessible artifact conformance | `brand-style-application` |
| `business-analysis` | Financial or ecommerce evidence to decision-ready diagnosis | `financial-statement-analysis`, `ecommerce-performance-diagnosis` |
| `chinese-professional-writing` | Facts and authority context to review-ready Chinese official text | `chinese-official-document-drafting` |
| `user-research` | Mixed research evidence to traceable product insight | `user-research-synthesis` |
| `teaching-support` | Learning context or assessment evidence to aligned teaching action | `teaching-plan-design`, `learning-assessment-analysis` |
| `travel-planning` | Trip constraints and current facts to feasible itinerary | `travel-itinerary-planning` |
| `career-support` | Verified experience and target role to truthful tailored resume | `resume-tailoring` |
| `personal-finance` | Household records and goals to a privacy-aware budget review | `personal-budget-review` |
| `data-protection` | Sensitive source artifact to verified redacted copy | `privacy-redaction` |
| `market-intelligence` | Current market evidence to fair competitor intelligence | `competitive-intelligence` |
| `china-social-content` | Verified source material to a platform-native Chinese social asset | `china-social-content-adaptation` |
| `life-safety` | Suspicious contact to a safe verification and containment plan | `scam-message-triage` |
| `cultural-entertainment` | Cultural symbols to an explicitly recreational reflection | `cultural-divination` |
| `personal-focus` | One immediate task to a bounded and resumable focus session | `focus-session-planning` |
| `reading-life` | Reading intent or notes to a sustainable practice and synthesis | `reading-companion` |
| `public-services` | Location-specific China social-security questions to current official guidance | `china-social-security-guidance` |
| `home-living` | Renovation scope and evidence to a reviewable risk checklist | `home-renovation-review` |
| `chinese-content-editing` | Supplied Chinese prose to natural, faithful authorial expression | `chinese-natural-style-editing` |
| `visual-diagrams` | Complex relationships to an accurate and accessible diagram | `diagram-communication` |
| `tender-operations` | Tender requirements and response evidence to a compliance matrix | `tender-response-compliance-review` |
| `academic-writing` | Research intent and evidence to an integrity-preserving manuscript revision | `academic-writing-coach` |
| `skill-security` | An untrusted Skill package to a pre-installation risk decision | `agent-skill-security-review` |
| `wechat-miniprogram` | Mini Program requirements and source to a verified platform-aware change | `wechat-miniprogram-delivery` |
| `document-conversion` | 将多格式资料转换为保留来源定位、结构和丢失说明的 Markdown 文件集 | `document-to-markdown` |
| `long-form-content` | 把资料、论点和读者目标转化为跨章节一致、来源可追溯的长篇稿件 | `long-form-authoring` |
| `skill-development` | 将已明确的重复工作流程转化为可安装、触发清晰且可评测的 Skill 包 | `reusable-skill-authoring` |
| `browser-operations` | 通过可用浏览器工具完成有明确范围的网页事务并逐项验证结果 | `browser-workflow-execution` |
| `financial-operations` | 将可比预算和实际数据转化为可复算的差异、驱动因素与行动建议；把月结清单和勾稽证据整理为可追溯的未结项、负责人和关账就绪状态 | `business-budget-variance`, `month-end-close-review` |
| `contract-operations` | 从指定合同版本提取有条款定位的履约义务、日期条件和待确认事项 | `contract-obligation-tracking` |
| `product-requirements` | 把用户问题与业务约束转化为范围明确、可验证并可供评审的 PRD | `product-requirements-authoring` |
| `employee-operations` | 根据已确定岗位和公司材料生成有依赖、负责人和验收证据的入职计划 | `employee-onboarding-planning` |
| `fiction-writing` | 将原创故事设定和已写章节转化为人物、时间线和伏笔一致的后续正文 | `fiction-continuity-writing` |
| `work-handoff` | 将当前任务证据压缩为保留目标、状态、约束和可继续步骤的交接材料 | `work-context-handoff` |
| `prompt-quality` | 将具体任务的提示词失败案例转化为可对比、可复现的提示词修订与评测结论 | `prompt-evaluation-improvement` |

Each `SCENARIO.md` explains the user boundary, why the current Skills were selected, rejected overlaps, and candidates worth watching. A watchlist entry is research evidence, not approval to distribute it.

## Selection rule

1. Define a repeated user job and its acceptance criteria.
2. Search VoltAgent's official-team index first, then source repositories and other markets.
3. Prefer first-party domain expertise, permissive licensing, maintained source, narrow triggers, reusable artifacts, and verifiable outcomes.
4. Adapt only after pinning the source commit and recording XOPC changes in `SOURCE.json`.
5. Reject duplicates: one Skill owns one primary intent; adjacent Skills compose through artifacts.
6. Assign every Skill to exactly one Store category: one of the 12 SkillHub-aligned general categories or XOPC's `one-person-company` category, with at most 20 Skills per category. Experimental Skills may enter when the specific scenario and boundary are clear, then graduate using real usage evidence.

Scenario directories intentionally do not contain a root `SKILL.md`. This preserves recursive discovery of every child Skill in common Agent Skills installers.
