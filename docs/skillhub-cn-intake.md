# SkillHub China intake — 2026-08-23

## Purpose

SkillHub China is a discovery source for Chinese user jobs, not a trusted upstream by default. A listing score, download count, enterprise label, or security badge does not establish copyright permission, runtime safety, factual correctness, or XOPC quality.

Sources reviewed:

- Marketplace and category taxonomy: <https://skillhub.cn/skills>
- Public registry API and files exposed by `api.skillhub.cn`
- Public search index exposed by `lightmake.site`
- SkillHub open-source API description: <https://github.com/saker-ai/skillhub>

The market states that content can originate from public channels, enterprises, and user uploads and that copyright remains with original authors. Therefore XOPC copies or derives content only when a candidate has a verified redistributable license. Otherwise the listing is a scenario signal and XOPC writes an independent implementation.

## Category coverage

| SkillHub category | XOPC disposition |
|---|---|
| Pay Skill | Commercial attribute, not a user scenario; do not create an XOPC category |
| 办公效率 | Already covered by office documents, data, presentations, email, calendar, files, forms, and work management |
| 内容创作 | Already covered by content campaign, media production, brand operations, and professional writing |
| 开发编程 | Already covered by software delivery, architecture, security, API integration, and developer tools |
| 数据分析 | Strengthened by business analysis and user research; generic spreadsheet, visualization, and notebook Skills already exist |
| 设计多媒体 | Already covered by product interface design, presentations, media production, and brand operations |
| AI Agent | Already covered where a concrete integration or developer outcome exists; reject generic self-improvement Skills without bounded state and evals |
| 知识管理 | Already covered by workspace knowledge and decision research |
| 商业运营 | Strengthened by ecommerce performance; support, finance intake, procurement, recruiting, sales, and project operations already exist |
| 教育学习 | Added teaching support |
| 行业专业 | Added financial analysis and Chinese professional writing; legal, medical, and investment Skills require separate domain governance |
| IT 运维与安全 | Software security and delivery exist; infrastructure operations remain a future evidence-backed opportunity |
| 生活服务 | Added travel planning; health and regulated life advice remain out of scope pending governance |

XOPC retains scenario-specific category names with `en` and `zh-CN` labels. This produces clearer Store routing than mirroring a broad marketplace taxonomy, while every released Skill still belongs to exactly one non-empty category.

## Audited shortlist

Counts are discovery signals observed through the public search API on the review date; they are not quality scores.

| Market candidate | Category | Signal | License finding | XOPC decision |
|---|---|---:|---|---|
| `ecommerce-data-zh` | 商业运营 | 2,414 downloads / 9 stars | MIT declared in package | Use the scenario as evidence; independently implement a stricter cross-platform metric-contract and privacy workflow |
| `corp-financial-analysis` | 行业专业 | 721 / 0 | No redistributable license found in package | Reference only; independently design financial analysis with reconciliation, model-fit, and professional-advice boundaries |
| `govwriting` | 行业专业 | 4,879 / 5 | No verified redistributable license in reviewed package metadata | Reference only; independently design evidence, document-type, current-authority, and approval controls |
| `design-research-synthesizer` | 数据分析 | 26 / 0 | No verified redistributable license | Reference only; scenario selected for clear separation from survey creation and prototyping |
| `teaching-design-helper` | 教育学习 | 697 / 1 | No verified redistributable license in reviewed files | Reference only; independently design objective–assessment–activity alignment without copying templates or samples |
| `wb-trip-planner` | 生活服务 | 166 / 1 | No verified redistributable license in reviewed files | Reference only; independently design live verification, feasibility, authorization, and privacy controls |
| `sentiment-analyzer-pro` | 数据分析 | 537 / 2 | No verified redistributable license; package relies on named framework and static thresholds | Hold; needs methodology provenance, fresh-data evaluation, and crisis-response safety review |
| `audit-new` / contract review candidates | 行业专业 | up to 11,592 / 47 | License and legal-authority provenance not verified | Hold; requires China legal domain owner, dated primary sources, jurisdiction handling, and harmful-error baseline |
| A-share and quantitative trading candidates | 行业专业 / 数据分析 | strong demand signals | Mixed or unverified | Hold; investment-risk governance and data-provider terms are prerequisites |
| WeChat, Douyin, and platform automation candidates | 内容创作 / 数据分析 | strong local demand | Mixed; often credentialed or automation-dependent | Hold or compose later; require official API terms, account authorization, anti-abuse, and publish confirmation |

## First XOPC-native release

The first intake adds six mutually exclusive Skills:

1. `financial-statement-analysis`
2. `ecommerce-performance-diagnosis`
3. `chinese-official-document-drafting`
4. `user-research-synthesis`
5. `teaching-plan-design`
6. `travel-itinerary-planning`

All six are `xopc-original`. No SkillHub text, template, sample, script, asset, or brand claim is redistributed. Market candidates support Q0 scenario evidence only; XOPC's instructions, boundaries, fixtures, ownership, and release artifacts are maintained here.

## Next review gates

- Run realistic Chinese-language baselines with anonymized artifacts.
- Assign a domain reviewer for finance, professional writing, education, ecommerce, UX research, and travel.
- Measure trigger collision against adjacent official Skills.
- Measure unsupported claims, omissions, formula errors, volatile-fact freshness, and privacy leakage.
- Promote only individual Skills whose real-task evidence clears their blockers; do not promote the batch by download popularity.

## Second intake — v0.10

The second pass compared SkillHub China demand with skills.sh adoption signals and existing XOPC boundaries. It adds nine XOPC-original Skills:

| Skill | Chinese market signal | Additional ecosystem signal | Primary quality improvement |
|---|---|---|---|
| `knowledge-base-curation` | 飞书/个人知识库整理 candidates | `basic-memory@memory-curate` | Source lineage, access metadata, conflict preservation, and retrieval tests |
| `sop-authoring` | SOP 编写与治理 candidates | `founder-skills@sop-creator` | Observed-versus-approved state, explicit controls, exception paths, and walkthrough evidence |
| `resume-tailoring` | Multiple 简历优化 candidates | `resumeskills@resume-tailor` with 6K+ installs | Requirement-to-evidence mapping and strict non-fabrication |
| `personal-budget-review` | 家庭记账与预算 candidates | Smaller personal-budget ecosystem | Transfer/refund handling, irregular expenses, variable-income scenarios, and privacy |
| `privacy-redaction` | 数据脱敏 candidates with strong local demand | Privacy/redaction specialist Skills | Copy-only operation, hidden-layer checks, mapping isolation, and residual-risk disclosure |
| `learning-assessment-analysis` | 学情与试卷分析 candidates | Education assessment specialist Skills | Item quality, objective mapping, privacy, non-labeling, and reassessment |
| `incident-response-coordination` | Production incident demand signal | Anthropic incident-response with 5K+ installs | Organization-specific severity, mutation authorization, recovery evidence, and blameless action verification |
| `competitive-intelligence` | 竞品分析 candidates | Anthropic competitive intelligence with 3K+ installs | Comparable definitions, dated sources, fair disadvantages, and ethical collection |
| `china-social-content-adaptation` | Strong WeChat/Xiaohongshu/Douyin demand | `marketingskills@social-content` with 60K+ installs | China-platform adaptation, claims/rights ledger, disclosure, privacy, and publish confirmation |

These packages are original XOPC implementations. External packages supplied scenario and adoption evidence; no external Skill text, templates, code, or assets are redistributed. Contract review, investment trading, medical advice, autonomous account operation, scraping, and crisis sentiment automation remain held for stronger domain and platform governance.

## Life-service intake — v0.11

On 2026-08-23, XOPC reviewed the score-ranked `life-service` results from the public SkillHub API. The category contained 8,529 listings at review time. Marketplace rank, downloads, and stars were treated as demand signals only; they did not waive license, safety, freshness, or evaluation requirements.

| Market signal | Observed signal | XOPC decision | Reason |
|---|---:|---|---|
| Anti-fraud assistance | score 100,000 / 146,772 downloads | Build `scam-message-triage` | Very strong daily need; XOPC adds independent-channel verification, containment, evidence preservation, and secondary-recovery-scam controls |
| Gift or red-envelope claiming | score 8,726 | Reject | Account automation, credential, platform-abuse, and payment risk exceed the user benefit |
| Money, spending, and pressure tests | scores 7,252–8,474 | Covered / hold | Budget review already owns actionable finance reflection; unvalidated personality scoring could label users without reliable benefit |
| WeRead assistant | score 6,850 / 54 stars | Build provider-neutral `reading-companion` | Reading support is broadly useful, but official XOPC capability must not depend on one account or reproduce copyrighted text |
| Travel assistant | score 6,307 / 26 stars | Already covered | `travel-itinerary-planning` already owns the itinerary outcome and current-fact checks |
| Bazi and divination assistants | scores 3,243–5,677 / up to 25 stars | Build `cultural-divination` | Clear entertainment demand; bounded to cultural symbolism and reflection, never certainty or consequential advice |
| FocusFlow | score 2,988 | Build `focus-session-planning` | A short immediate execution loop is distinct from weekly planning and useful without medicalizing procrastination |
| China social-security advisor | top-60 listing | Build `china-social-security-guidance` | High local relevance; requires location, effective date, official primary sources, explicit formulas, and no eligibility guarantees |
| Renovation helpers | top-60 listings | Build `home-renovation-review` | Quotes, scope gaps, change orders, and milestone evidence are reviewable; regulated inspection and payment remain human decisions |
| Relationship coaches | multiple top-60 listings | Hold | Needs a clearer boundary from mental-health support and stronger harmful-advice evaluation |
| Fitness, nutrition, CBT, and disease-probability assistants | multiple top-60 listings | Hold | Medical and mental-health governance, qualified review, crisis routing, and harmful-error baselines are prerequisites |
| Lottery and wealth prediction | multiple listings | Reject | Encourages unsupported financial claims and gambling harm; it is not an acceptable extension of cultural entertainment |

This intake adds six mutually exclusive, XOPC-original packages: `scam-message-triage`, `cultural-divination`, `focus-session-planning`, `reading-companion`, `china-social-security-guidance`, and `home-renovation-review`. No SkillHub instructions, code, templates, assets, or brand claims are copied. Travel, job search, and personal budgeting remain in their existing scenario groups instead of receiving duplicate Skills.
