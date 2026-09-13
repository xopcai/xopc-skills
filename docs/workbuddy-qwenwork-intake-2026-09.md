# WorkBuddy / QwenWork 技能补充审计

审查日期：2026-09-13。负责人：XOPC Skills Team。此记录是当前可见证据的筛选结果，不是两家市场的全量镜像，也不代表对第三方技能执行效果的认证。

## 证据范围与方式

1. 用户提供 WorkBuddy v5.3.14 技能页截图，要求将有价值的能力补入产品。
2. 使用 Computer Use 读取了 WorkBuddy 原生窗口截图；原生点击和滚动返回 `noWindowsAvailable`。内置浏览器打开超时后，改用用户 Chrome 的 [WorkBuddy 技能页](https://www.workbuddy.cn/app/skills)，成功读取推荐目录，并通过浏览器查找定位到后段，读取教学、知识、开发、财经等后续卡片。下表 W 指这次实际读取到的卡片。列表有重复命名；未将辅助功能树的 “109 items” 当成技能总数。没有安装或执行市场技能。
3. Computer Use 同时确认 XOPC 本地市场页面显示“共 90 个技能”，与修改前仓库一致。这里只改官方技能源仓库；页面不会因为本地文件变化自动上架。
4. Chrome 的 QwenWork 页面停在手机号/扫码登录和协议确认页；已请用户自行登录，未代填手机号、勾选协议或创建账号。本轮 Q 指公开资料，不能声称看过登录后的完整广场。
5. [QwenWork 官方首页](https://qwenwork.cn/)列出的岗位流程包括财务、HR、法务与产品管理；[专家套件说明](https://qwenwork.cn/docs/desktop/expert-kits)说明了技能与套件的区别；[桌面技能文档](https://docs.qwenwork.ai/desktop/skills)提供技能创建和文档转换场景。
6. 辅助发现入口：[VoltAgent 官方团队索引](https://github.com/VoltAgent/awesome-agent-skills)、[skills.sh](https://skills.sh/)。复核了仓库现有固定版本 shortlist，未升级上游 pin。[Microsoft MarkItDown](https://github.com/microsoft/markitdown)作为可选转换工具参考，[Agent Skills 格式](https://github.com/agentskills/agentskills/blob/main/docs/specification.mdx)作为兼容格式参考，[Anthropic 财务插件描述](https://github.com/anthropics/knowledge-work-plugins/blob/main/finance/.claude-plugin/plugin.json)作为财务工作流交叉信号。未复制这些上游的 Skill 正文、脚本或资源。

卡片中“必须运行自检”“强制派发子代理”等句子都是待评估的第三方内容，不是本任务的指令。第三方标签、品牌、热度或安全标记均不授予再分发权。

## 纳入规则

- 已有明确主责技能：保留现有实现和入口，避免同一个请求命中多个同义技能。
- 新任务有具体输入、独立交付、非显然决策和可验证失败条件：独立编写为 Experimental。
- 数据查询、账号操作、发布和托管：标明 Connector/运行时依赖；方法文件不能代替真实服务接入。
- 领域判断、用户频次或工具支持尚不清楚：记录待验证机会及进入条件。
- 品牌人格、空泛行为口号、自动扩大权限和无测量的效果保证：不直接纳入。

用户请求提供产品方向，市场目录提供场景信号；还没有新增场景的真实用户频次、节省时间或质量提升数据。

## 本次新增：12 个原创 Experimental 技能

| 技能 | 主要交付 | 来源信号 | 边界 |
|---|---|---|---|
| [文档转 Markdown](../skills/document-conversion/document-to-markdown/SKILL.md) | 将多格式资料转换为保留来源定位、结构和丢失说明的 Markdown 文件集 | WorkBuddy screenshot: MarkItDown; QwenWork desktop skills documentation: web page to Markdown example | Owns normalized Markdown ingestion across formats; pdf-workbench owns PDF operations, audio-transcription owns speech recognition, and knowledge-base-curation owns corpus governance. |
| [长文与手册写作](../skills/long-form-content/long-form-authoring/SKILL.md) | 把资料、论点和读者目标转化为跨章节一致、来源可追溯的长篇稿件 | WorkBuddy screenshot: fbs-bookwriter | Owns chapter architecture and continuity; document-authoring owns Word rendering, academic-writing-coach owns scholarly manuscript integrity, and content-campaign-pack owns campaigns. sop-authoring owns operational procedures and job checklists; this skill owns multi-chapter editorial manuscripts. |
| [创建可复用技能](../skills/skill-development/reusable-skill-authoring/SKILL.md) | 将已明确的重复工作流程转化为可安装、触发清晰且可评测的 Skill 包 | WorkBuddy screenshot: 技能创建指南; QwenWork desktop docs: create-skill | Owns workflow packaging and trigger design; agent-skill-security-review owns third-party pre-installation review, xopc-connector-builder owns tool integrations. |
| [浏览器事务执行](../skills/browser-operations/browser-workflow-execution/SKILL.md) | 通过可用浏览器工具完成有明确范围的网页事务并逐项验证结果 | WorkBuddy live marketplace: Web Access, BrowserSkill, Playwright Browser Automation, 网页自动化 | Owns executing a user's browser transaction; playwright-webapp-testing owns reusable test suites, evidence-based-research owns research synthesis. Adds workflow guidance, not a browser engine. |
| [企业预算差异分析](../skills/financial-operations/business-budget-variance/SKILL.md) | 将可比预算和实际数据转化为可复算的差异、驱动因素与行动建议 | QwenWork official homepage: financial toolkit budget workflow | Owns plan-versus-actual operating control; financial-statement-analysis owns statement ratios, personal-budget-review owns household cash flow, spreadsheet-workbench owns workbook mechanics. |
| [月结证据与异常检查](../skills/financial-operations/month-end-close-review/SKILL.md) | 把月结清单和勾稽证据整理为可追溯的未结项、负责人和关账就绪状态 | QwenWork official homepage: financial toolkit month-end close workflow | Owns cross-process close readiness; invoice-receipt-reconciliation owns document matching, financial-statement-analysis owns financial performance conclusions. |
| [合同履约台账](../skills/contract-operations/contract-obligation-tracking/SKILL.md) | 从指定合同版本提取有条款定位的履约义务、日期条件和待确认事项 | QwenWork official homepage and expert-kits docs: contract management | Owns contractual operational obligations; document-requirements-review owns conformance against supplied requirements; legal enforceability and contract negotiation are not claimed. |
| [产品需求文档](../skills/product-requirements/product-requirements-authoring/SKILL.md) | 把用户问题与业务约束转化为范围明确、可验证并可供评审的 PRD | QwenWork official homepage and expert-kits docs: product management PRD workflow | Owns requirements decisions and acceptance definition; spec-to-work-items starts with an approved spec, decision-prototype tests uncertainty, user-research-synthesis synthesizes raw research. |
| [员工入职协同](../skills/employee-operations/employee-onboarding-planning/SKILL.md) | 根据已确定岗位和公司材料生成有依赖、负责人和验收证据的入职计划 | QwenWork official homepage: HR toolkit onboarding materials | Owns post-selection onboarding readiness; recruiting-pipeline-review owns hiring pipeline, sop-authoring owns reusable operating procedures. Does not grant account access. |
| [小说创作与连续性管理](../skills/fiction-writing/fiction-continuity-writing/SKILL.md) | 将原创故事设定和已写章节转化为人物、时间线和伏笔一致的后续正文 | WorkBuddy live marketplace: 开放小说创作助手, AI网文创作, 章节正文生成器 | Owns original fictional narrative and story-state continuity; long-form-authoring owns evidence-based nonfiction, chinese-natural-style-editing owns same-language style revision. |
| [工作上下文交接](../skills/work-handoff/work-context-handoff/SKILL.md) | 将当前任务证据压缩为保留目标、状态、约束和可继续步骤的交接材料 | WorkBuddy live marketplace: handoff | Owns task continuation context; project-status-synthesis owns stakeholder reporting, workspace-knowledge-synthesis owns cross-source answers. Does not automatically write persistent memory. |
| [提示词评测与优化](../skills/prompt-quality/prompt-evaluation-improvement/SKILL.md) | 将具体任务的提示词失败案例转化为可对比、可复现的提示词修订与评测结论 | WorkBuddy live marketplace: 提示词工程专家, MiniMax H3 提示词编写 | Owns task-prompt quality and measured comparison; reusable-skill-authoring owns installable packages. Model-specific media parameters require verified documentation and are not bundled here. |

这些是 XOPC 独立实现，不是竞品包的改名或镜像。浏览器操作需要宿主工具；转换需要本地转换器；提示词实测需要可用模型运行环境。财务技能只做证据与计算支持，合同技能只做履约提取，入职技能不参与录用判断。

## WorkBuddy 可见推荐目录的去重与处置

下列按用户任务合并卡片，保留原名用于复查。表中的“已有”指任务主责覆盖，不承诺同等工具、模板或效果。

| 实际可见卡片（W） | 处置 | XOPC 主责 / 后续条件 |
|---|---|---|
| Excel 表格处理（多条）、Excel 文件处理、WJ 的 Excel / WPS 表格自动化工具 | 已有 | `spreadsheet-workbench`；具体 WPS/宏兼容性按任务验证 |
| PPT 演示文稿（多条）、guizang-PPT-Skill、PPT 一键生成大师 | 已有 | `presentation-deck`；视觉模板不无授权搬运 |
| Word 文档生成、MASTER工作台-Word、文档格式化排版 | 已有 | `document-authoring` + `chinese-official-document-drafting` |
| PDF 文档处理、PDF 文档生成、Markdown转PDF（CJK）、PDF图片文字提取、腾讯文档 PDFKit | 已有 + 服务依赖 | `pdf-workbench`；PDFKit 接口和签名权限另审 |
| OfficeCLI 办公文档工具 | 工具候选 | 办公技能可使用已可用的工具；先验证安装来源、格式保真和运行时 |
| MarkItDown（两条） | 新增 | `document-to-markdown`，统一来源清单和转换失败状态 |
| 腾讯问卷 | 已有 + 待接入 | `form-survey-builder` 负责问题、分支和响应结构；腾讯问卷实际创建、发布和统计接口另接 |
| fbs-bookwriter | 新增 | `long-form-authoring`，保留证据和跨章一致性 |
| 开放小说创作助手、AI网文创作、章节正文生成器 | 新增 | `fiction-continuity-writing`，与非虚构长文分开 |
| 技能创建指南、仓颉Skill | 新增 | `reusable-skill-authoring`；提炼方法不等于获得原材料再分发权 |
| Web Access、Playwright Browser Automation、浏览器自动化、网页自动化、BrowserSkill、QQ浏览器自动化、Browser (Puppeteer)、Smooth Browser | 新增 + 运行时依赖 | `browser-workflow-execution`；不打包各种浏览器或导出会话凭据 |
| 提示词工程专家 | 新增 | `prompt-evaluation-improvement`，以失败样本和对照评测驱动 |
| MiniMax H3 提示词编写 | 部分覆盖 + 待接入 | 通用提示词评测复用新增技能；模型专用字段、参考素材和媒体生成仍需核验接口 |
| handoff | 新增 | `work-context-handoff` |
| 润泽小馆·日报撰写、周报生成助手、周报生成器 | 已有 | `internal-communications`、`workstream-digest`、`project-status-synthesis`，按资料范围路由 |
| 去AI味、卡兹克公众号写作、公众号文章生成器 | 已有 | `chinese-natural-style-editing`、`china-social-content-adaptation`；不用仿冒作者身份 |
| Wechat Publisher、公众号草稿推送、微信公众号文章发布 | 待接入 | 复用内容技能，补公众号草稿接口与授权，不能把草稿生成说成已上传 |
| 创业可以学 | 已有 | 十个 `one-person-company` 生命周期技能 |
| grill-me、严格拷问 | 已有主责 | 需求/方案可交给 `product-requirements-authoring`、`decision-prototype` 或 `module-design`；暂不新增泛追问入口 |
| Superpowers 工程方法论、Karpathy行为准则 | 已有主责 | 现有 TDD、调试、评审、规格拆解；不引入对所有任务生效的总控规则 |
| 前端设计、Impeccable、前端开发 | 已有 + 部分缺口 | `frontend-design`；附带媒体生成不等于已有图像模型能力 |
| 腾讯微云、钉钉套件、企业微信套件、飞书套件、金山文档/WPS云文档、腾讯会议 | 待接入 | 已有文档、会议、日程、任务方法；实际读写范围、SDK/API、账号授权及回读验证另立接入项 |
| 腾讯ima、腾讯乐享、obsidian、notion中文、Karpathy LLM Wiki | 已有 + 待接入 | `workspace-knowledge-synthesis`、`knowledge-base-curation`；专属存储连接另审 |
| IMAP/SMTP邮件、QQ邮箱、智能体邮箱 | 待接入 | `inbox-triage`、`email-reply-drafting`；收发与附件需要邮箱连接能力 |
| TAPD、cnb.cool、github | 已有 + 待接入 | 现有工作管理/GitHub技能；不同平台 API、权限和状态写回另接 |
| 腾讯新闻、AIHOT、新闻摘要、每日财经新闻 | 已有主责 + 部分缺口 | `evidence-based-research` 可做有范围简报；周期调度、数据源和语音播报依赖宿主 |
| 多引擎搜索、Tavily AI Search、Exa 网络搜索、wechat-article-search | 工具/连接器候选 | 搜索能力服务现有研究与内容技能，不增加同义搜索方法 Skill |
| Exa 企业调研、企查查（工商信息） | 已有 + 数据依赖 | `prospect-research`、`competitive-intelligence`；公司数据权限/来源需验证 |
| 鹅厂辟谣助手 | 已有部分主责 | 证据核验与 `scam-message-triage`；不宣称拥有腾讯内部参考或官方裁定权 |
| Skill安全审计（云鼎实验室）、Skill安全扫描（朱雀实验室）、skill-vetter | 已有 | `agent-skill-security-review`；未运行第三方扫描器 |
| NeoData金融搜索服务、A股全栈数据、国泰海通金融数据查询、金融数据-东方财富妙想、同花顺iFinD金融数据查询、westockdata、平安证券行情查询、市场搜索-东方财富妙想、平安证券资讯查询 | 待数据接入 | 先验证许可、账号、字段、更新时间和历史覆盖，再供现有研究/财务技能使用 |
| Wind Alice-A股短线策略报告、A股每日复盘、股票分析专家、A股短线交易 | 专项待验证 | 非个性化行情复盘可研究；策略、选股与交易不能因卡片存在直接纳入 |
| 富途行情与交易、宏观数据监控 | 待接入 / 产品运行能力 | 行情与交易分离；实时调度、推送、交易授权和结果核验需要独立设计 |
| QQ音乐助手、微信读书助手 | 已有部分主责 + 待接入 | `reading-companion` 覆盖阅读方法；音乐/书架/笔记账户访问另接 |
| 足球贝叶斯分析 | 待验证 | 先验证赛事数据和模型校准，不以未校准概率支撑投注 |
| 腾讯云CloudBase、HTML Deploy | 待托管接入 | 前端/小程序技能已有；部署权限、成本、数据存储和回滚由宿主/连接器提供 |
| 腾讯云通用文字识别 OCR、本地语音转文字 | 已有 + 工具候选 | 转换/PDF技能和 `audio-transcription`；识别引擎与离线质量另测 |
| Nano Banana Pro 图片生成与编辑、canvas-design（视觉设计） | 待验证新场景 | 独立视觉资产确有缺口；先核实产品图像工具、字体/素材许可与输出验收，不把提示词当图片 |
| 班级活动方案、班级活动通知、家长会发言稿·班主任版/学科老师版、安全教育通知 | 待验证教育扩展 | 教学计划与材料写作可组合；活动组织、家校沟通和安全预案需要教师场景样本 |
| 学情分析报告·初中/高中、分析报告·小学 | 已有 | `learning-assessment-analysis`，不按学段复制三个技能 |
| 注意力不足/情绪管理困难/语言能力较弱/学习障碍/新转学/阅读困难学生支持 | 待教师评审 | 现有教学技能可支持课程调整；个别化支持计划需证据、隐私与教师评审，不承诺诊断 |
| 报考简历完善助手 | 已有 | `resume-tailoring`，资格判断及报考平台另处理 |
| 课题申报书 | 待专项验证 | 与 `academic-writing-coach` 相邻但申报任务不同；先收集真实指南、模板和验收案例 |
| Legal Logic Analysis、专利交底书智能生成助手 | 待专业评审 | 合同履约仅覆盖运营提取；法律推理/专利查新和权利要求不声称已有 |
| 报告审核 | 已有部分主责 | `document-requirements-review` + 文档批注，依赖用户审核规则；专业估值判断待评审 |
| GEO诊断报告 | 待专项验证 | 需要真实多引擎观测与可重复指标；不把虚拟推理包装成测量结果 |
| 贝壳找房、携程问道、中国电商搜索、tencent-weather | 已有部分主责 + 待接入 | `travel-itinerary-planning`、`home-renovation-review` 等可复用；房源/预订/商品和天气数据另接 |
| MigraQ | 待专项验证 | 云迁移 TCO/资源扫描需目标平台、凭据边界与可验证迁移样本 |
| AI交付前全自动自检技能、darwin-skill、caveman、女娲 | 不直接纳入 | 分别涉及全局强制流程、自改技能、未测 token 收益或人格蒸馏；有具体需求时按任务重新定义 |
| Stealth Browser | 不直接纳入 | 不把隐身/验证码绕过作为常规产品技能；已有授权浏览器事务足以覆盖正常操作 |

## QwenWork 公开场景对照

这里的岗位套件名称来自官方展示，以下 XOPC 的拆分与取舍是我们的产品判断，不是声称拥有对应套件源码。

| 公开岗位方向（Q） | 现有覆盖 | 本次补充或剩余条件 |
|---|---|---|
| 财务 | 财务报表、票据对账、表格 | 新增预算差异和月结证据检查；税务申报、记账与审计另需专业流程 |
| HR | 招聘漏斗与简历 | 新增入职协同；薪酬/劳动规则和人事系统读写另验证 |
| 法务 | 对照给定要求审文档 | 新增合同履约台账；诉讼、合同法律意见与签约不冒充覆盖 |
| 产品管理 | 用户研究、原型、规格拆工单 | 新增 PRD；路线图可与现有计划能力组合，待真实排期需求再拆分 |
| 博主、商家、广告 | 内容、社媒、品牌、竞品、电商经营 | 广告法规审查需法域和规则来源；平台数据/发布属于连接器 |
| 教师、导游 | 教案、学情、行程 | 教育扩展见 W 表；导游讲解与实际团队操作需专门样本 |
| 分析师 | 证据研究、财报分析、会议提取 | 可比公司/估值模型与专业行情数据另验证 |
| 艺术家、鉴定师 | 前端视觉、品牌、文档规则审查 | 独立视觉资产、专业鉴定判断不能宣称已覆盖 |

## 上游选择与版权记录

- 本轮选择 Build：以用户任务和可见卡片定义缺口，独立编写输入、工作流、交付和评测。
- 通用办公/研究/开发上游已在仓库使用，新增同名包装不会带来明确新价值。
- 竞品市场包没有在本轮获得固定 commit、完整来源和再分发许可，所以没有下载后改名或转存。品牌名只作来源索引。
- MarkItDown、浏览器或模型工具均是可选运行依赖，不包含在新技能包中，也没有自动安装。
- 本轮不改变现有第三方固定版本。若以后采用代码/模板，需新增 SOURCE.json、commit、license 和 adaptation 记录。

## 产品接入清单与验证状态

新增目录接入现有 `registry/skills`、`registry/scenarios.json`、`registry/categories.json`，继续使用 Store 的确定性 ZIP 发布流程。版本为 0.15.0；技能总数从 90 到 102，场景从 92 到 104，场景目录从 53 到 64，分类仍为 13，单类未超过 20。

评测资产：241 条触发样例（120 正向、121 负向）和 60 条带具体输入的任务 fixture。它们只表示测试材料已就绪。仓库结构/脚本/打包检查及本轮抽查结果见 [验证记录](workbuddy-qwenwork-validation-2026-09.md)。真实宿主端到端执行、独立领域评审和无技能 baseline 尚未完成，均保留为 Stable blocker。

发布到线上 Store 仍须正常提交和发布流程；本地新增文件不代表线上已更新。没有代用户安装竞品技能、操作其业务账号或发布生产版本。
