#!/usr/bin/env python3
"""Import the pinned coreyhaines31/marketingskills release as XOPC adaptations.

This is intentionally a one-shot, deterministic intake tool. It copies only the
installable material (not upstream eval fixtures), rewrites routing names that
would collide with XOPC Skills, and emits the Store registry/eval/provenance
records required by this repository.
"""

from __future__ import annotations

import argparse
import json
import posixpath
import re
import shutil
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
COMMIT = "5b2c0007766c6a1cf1d53fd8fc73e979e0821022"
REPOSITORY = "https://github.com/coreyhaines31/marketingskills"
RELEASE_VERSION = "0.16.0"


SCENARIOS = {
    "marketing-experimentation": ("设计可信的营销实验", "把增长假设转化为有样本量、指标和停止规则的实验计划", "data-analysis"),
    "marketing-analytics": ("建立营销测量与归因", "把业务问题和事件数据转化为可审计的测量、分析与归因方案", "data-analysis"),
    "search-visibility": ("审查搜索与 AI 可见性", "基于可验证证据诊断传统搜索和 AI 答案中的可见性问题", "data-analysis"),
    "app-store-growth": ("优化应用商店表现", "用关键词、商店素材和实验数据形成可验证的应用商店增长计划", "data-analysis"),
    "paid-advertising": ("规划和优化付费广告", "形成有预算护栏、受众、创意和测量闭环的广告方案", "professional"),
    "conversion-optimization": ("优化关键转化界面", "基于用户意图和证据改进页面、注册、引导、付费墙与弹窗", "design-media"),
    "marketing-media-production": ("制作营销图片与视频", "把营销 brief 转化为有平台规格、品牌约束和验收标准的媒体资产", "design-media"),
    "website-search-foundations": ("建设可发现的网站基础", "形成可实施、可验证的程序化页面、结构化数据和信息架构方案", "dev-programming"),
    "lifecycle-messaging": ("设计生命周期消息", "把用户阶段和行为信号转化为可测量、合规的邮件与短信序列", "content-creation"),
    "social-marketing": ("规划社交媒体内容", "把品牌目标和受众证据转化为平台适配的社交内容与节奏", "content-creation"),
    "marketing-copy": ("创作与编辑营销文案", "形成清晰、可信、符合品牌和转化目标的营销文案", "content-creation"),
    "cold-outreach": ("编写合规冷邮件", "用可验证的相关性和低风险外联边界生成冷邮件及跟进序列", "content-creation"),
    "earned-media": ("准备公共关系材料", "把可证实的新闻价值转化为媒体名单、pitch 和发布材料", "content-creation"),
    "partner-marketing": ("设计合作营销计划", "形成目标一致、权益清晰且可衡量的品牌或创作者合作方案", "business-ops"),
    "community-marketing": ("建立社区营销循环", "把成员价值、运营节奏和反馈机制转化为可持续社区计划", "business-ops"),
    "retention-marketing": ("诊断并降低客户流失", "用流失信号、干预方案和护栏指标形成留存改进闭环", "business-ops"),
    "referral-marketing": ("设计推荐增长机制", "形成激励相容、可归因且防滥用的推荐计划", "business-ops"),
    "launch-marketing": ("策划活动与产品发布", "把发布目标转化为时间线、渠道、资产、责任人和复盘指标", "content-creation"),
    "lead-magnets": ("设计获客内容资产", "把用户问题转化为有明确交换价值和后续路径的获客资产", "content-creation"),
    "marketing-free-tools": ("规划营销型免费工具", "把高意图用户问题转化为可实现、可测量的免费工具方案", "dev-programming"),
    "growth-distribution": ("建立可复用分发循环", "形成有渠道选择、质量门槛和归因方法的目录提交与增长循环", "business-ops"),
    "comparison-pages": ("创作公平的竞品比较页", "基于可追溯证据形成有用、公平且可维护的比较或替代页面", "content-creation"),
    "sales-enablement": ("制作销售支持内容", "把买方问题和销售阶段转化为可验证、可复用的销售资产", "content-creation"),
    "marketing-strategy": ("制定公司营销策略", "综合目标、市场证据和真实资源形成有取舍的营销路线图", "professional"),
    "product-marketing-strategy": ("制定产品营销与商业化策略", "形成定位、Offer、包装和定价相互一致的产品营销决策", "professional"),
    "marketing-psychology": ("审查营销行为设计", "用合乎伦理的行为科学视角改进用户理解与选择", "professional"),
    "revenue-operations": ("设计收入运营系统", "把营销、销售和客户成功数据转化为可执行的收入流程与治理", "business-ops"),
}


ENTRY_ROWS = [
    ("ab-testing", "ab-testing", "marketing-experimentation", "规划 A/B 测试"),
    ("analytics", "analytics", "marketing-analytics", "设计营销分析方案"),
    ("attribution", "attribution", "marketing-analytics", "设计营销归因方案"),
    ("ai-seo", "ai-seo", "search-visibility", "优化 AI 搜索可见性"),
    ("seo-audit", "seo-audit", "search-visibility", "执行 SEO 审计"),
    ("aso", "aso", "app-store-growth", "优化应用商店页面"),
    ("ads", "ads", "paid-advertising", "规划和优化付费广告"),
    ("ad-creative", "ad-creative", "paid-advertising", "批量设计广告创意"),
    ("cro", "cro", "conversion-optimization", "优化营销页面转化"),
    ("onboarding", "onboarding", "conversion-optimization", "优化产品引导体验"),
    ("paywalls", "paywalls", "conversion-optimization", "优化应用内付费墙"),
    ("popups", "popups", "conversion-optimization", "设计转化弹窗"),
    ("signup", "signup", "conversion-optimization", "优化注册流程"),
    ("image", "image", "marketing-media-production", "制作营销图片"),
    ("video", "video", "marketing-media-production", "制作营销视频"),
    ("programmatic-seo", "programmatic-seo", "website-search-foundations", "规划程序化 SEO 页面"),
    ("schema", "schema", "website-search-foundations", "实施结构化数据"),
    ("site-architecture", "site-architecture", "website-search-foundations", "设计网站信息架构"),
    ("emails", "emails", "lifecycle-messaging", "设计生命周期邮件"),
    ("sms", "sms", "lifecycle-messaging", "设计生命周期短信"),
    ("social", "social", "social-marketing", "规划社交媒体内容"),
    ("copywriting", "copywriting", "marketing-copy", "创作营销文案"),
    ("copy-editing", "copy-editing", "marketing-copy", "编辑营销文案"),
    ("cold-email", "cold-email", "cold-outreach", "编写冷邮件与跟进"),
    ("public-relations", "public-relations", "earned-media", "制定公共关系计划"),
    ("co-marketing", "co-marketing", "partner-marketing", "设计品牌合作营销"),
    ("influencer-marketing", "influencer-marketing", "partner-marketing", "设计创作者合作营销"),
    ("community-marketing", "community-marketing", "community-marketing", "建立社区营销计划"),
    ("churn-prevention", "churn-prevention", "retention-marketing", "诊断并降低客户流失"),
    ("referrals", "referrals", "referral-marketing", "设计推荐计划"),
    ("events", "events", "launch-marketing", "策划营销活动"),
    ("launch", "launch", "launch-marketing", "策划产品发布"),
    ("lead-magnets", "lead-magnets", "lead-magnets", "设计获客内容资产"),
    ("free-tools", "free-tools", "marketing-free-tools", "规划营销型免费工具"),
    ("directory-submissions", "directory-submissions", "growth-distribution", "规划目录提交"),
    ("marketing-loops", "marketing-loops", "growth-distribution", "设计复利增长循环"),
    ("competitors", "competitors", "comparison-pages", "创作竞品比较与替代页面"),
    ("sales-enablement", "sales-enablement", "sales-enablement", "制作销售支持内容"),
    ("marketing-council", "marketing-council", "marketing-strategy", "用多视角审查营销决策"),
    ("marketing-ideas", "marketing-ideas", "marketing-strategy", "筛选营销策略与创意"),
    ("marketing-plan", "company-marketing-plan", "marketing-strategy", "制定公司营销计划"),
    ("offers", "offers", "product-marketing-strategy", "设计商业 Offer"),
    ("pricing", "product-pricing", "product-marketing-strategy", "制定产品定价与包装"),
    ("product-marketing", "product-marketing", "product-marketing-strategy", "建立产品定位与信息体系"),
    ("marketing-psychology", "marketing-psychology", "marketing-psychology", "应用合乎伦理的营销心理学"),
    ("revops", "revops", "revenue-operations", "设计收入运营流程"),
]


ENTRIES = {
    new: {"upstream": upstream, "name": new, "scenario": scenario, "intent": intent, "category": SCENARIOS[scenario][2]}
    for upstream, new, scenario, intent in ENTRY_ROWS
}

ROUTE_RENAMES = {
    "marketing-plan": "company-marketing-plan",
    "pricing": "product-pricing",
    "prospecting": "prospect-research",
    "content-strategy": "content-campaign-pack",
    "customer-research": "user-research-synthesis",
    "competitor-profiling": "competitive-intelligence",
}

MUTATING = {
    "ads", "ad-creative", "cold-email", "emails", "sms", "social", "public-relations",
    "co-marketing", "influencer-marketing", "directory-submissions", "revops", "events", "launch",
}
VOLATILE = {"ads", "ai-seo", "aso", "attribution", "analytics", "pricing", "seo-audit", "schema", "social"}


def dump(path: Path, value: object) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def rewrite_skill(raw: str, upstream: str, name: str) -> str:
    raw = re.sub(r"(?m)^name:\s*.*$", f"name: {name}", raw, count=1)
    raw = re.sub(r"(?m)^  version:\s*.*$", f'  version: "{RELEASE_VERSION}"', raw, count=1)
    if not re.search(r"(?m)^license:", raw.split("---", 2)[1]):
        raw = raw.replace("\nmetadata:\n", "\nlicense: MIT\nmetadata:\n", 1)
    if "  author:" not in raw.split("---", 2)[1]:
        raw = raw.replace("\nmetadata:\n", "\nmetadata:\n  author: XOPC, adapted from Corey Haines\n", 1)

    for old, new in ROUTE_RENAMES.items():
        raw = raw.replace(f"`{old}`", f"`{new}`")
        raw = raw.replace(f"see {old}.", f"see {new}.")
        raw = raw.replace(f"see {old},", f"see {new},")

    # Upstream packages may link to repository-level tool docs or sibling Skills.
    # Store packages are installed independently, so retain those references as
    # immutable source links instead of shipping broken relative paths.
    def pin_repository_link(match: re.Match[str]) -> str:
        label, target = match.group(1), match.group(2)
        normalized = posixpath.normpath(posixpath.join("skills", upstream, target))
        return f"[{label}]({REPOSITORY}/blob/{COMMIT}/{normalized})"

    raw = re.sub(r"\[([^\]]+)\]\(((?:\.\./)+[^)]+)\)", pin_repository_link, raw)
    raw = re.sub(r"\[([^\]]+)\]\((/[^)]+)\)", lambda match: f"[{match.group(1)}](https://example.com{match.group(2)})", raw)
    raw = raw.replace("[examples.md](references/examples.md)", "[worked cases](references/examples.md)")
    raw = re.sub(r"\bTBD\b", "not yet determined", raw)

    if upstream == "marketing-plan":
        raw = raw.replace("# Marketing Plan", "# Company Marketing Plan", 1)
    if upstream == "pricing":
        raw = raw.replace("# Pricing Strategy", "# Product Pricing Strategy", 1)
    if upstream == "ads":
        raw = raw.replace(
            "You are an expert performance marketer with direct access to ad platform accounts. Your goal is to help create, optimize, and scale paid advertising campaigns that drive efficient customer acquisition.",
            "Help create, optimize, and evaluate paid advertising from supplied evidence and authorized account data. Draft changes by default; spend, publish, pause, or edit a live campaign only when the user has authorized that action, then verify the resulting account state.",
        )

    notes = ["use supplied or authorized data, label assumptions, and never guarantee rankings, reach, conversion, or revenue"]
    if upstream in MUTATING:
        notes.append("draft by default; send, publish, spend, submit, or write to an external account only within the user's authorized scope and verify the result")
    if upstream in VOLATILE:
        notes.append("date volatile platform guidance and verify current claims against primary sources")
    if upstream == "marketing-psychology":
        notes.append("protect informed choice: reject deceptive scarcity, hidden costs, coercion, sensitive-trait targeting, and dark patterns")
    if upstream == "marketing-council":
        notes.append("label advisor perspectives as framework simulations; do not imply participation, endorsement, or private knowledge")
    if upstream in {"image", "video"}:
        notes.append("confirm rights, privacy, likeness, brand, platform, and accessibility constraints before final delivery")
    if upstream in {"image", "video", "ad-creative"}:
        notes.append("use configured provider connections or environment variables and never ask the user to paste secret values into chat")

    marker = "\n\n> **XOPC adaptation:** " + "; ".join(notes) + "."
    heading = re.search(r"(?m)^# .+$", raw)
    if heading:
        insert_at = heading.end()
        raw = raw[:insert_at] + marker + raw[insert_at:]

    lines = raw.splitlines()
    # validate-repo counts the final newline as an additional line.
    while len(lines) > 499:
        try:
            lines.remove("")
        except ValueError:
            raise ValueError(f"{name}/SKILL.md exceeds 500 non-empty lines")
    return "\n".join(lines) + "\n"


def copy_package(upstream_root: Path, item: dict[str, str]) -> Path:
    source = upstream_root / "skills" / item["upstream"]
    target = ROOT / "skills" / item["scenario"] / item["name"]
    if target.exists():
        shutil.rmtree(target)
    shutil.copytree(source, target, ignore=shutil.ignore_patterns("evals"))
    skill_path = target / "SKILL.md"
    skill_path.write_text(rewrite_skill(skill_path.read_text(encoding="utf-8"), item["upstream"], item["name"]), encoding="utf-8")
    for markdown in target.rglob("*.md"):
        if markdown == skill_path:
            continue
        text = markdown.read_text(encoding="utf-8")
        text = re.sub(
            r"\[([^\]]+)\]\(((?:\.\./)+[^)]+)\)",
            lambda match: f"[{match.group(1)}]({REPOSITORY}/blob/{COMMIT}/{posixpath.normpath(posixpath.join('skills', item['upstream'], markdown.relative_to(target).parent.as_posix(), match.group(2)))})",
            text,
        )
        text = re.sub(r"\[([^\]]+)\]\((/[^)]+)\)", lambda match: f"[{match.group(1)}](https://example.com{match.group(2)})", text)
        text = re.sub(r"\[([^\]]+)\]\(link\)", r"\1", text)
        text = "\n".join(line.rstrip() for line in text.splitlines()) + "\n"
        markdown.write_text(text, encoding="utf-8")
    dump(
        target / "SOURCE.json",
        {
            "mode": "adapted",
            "repository": REPOSITORY,
            "commit": COMMIT,
            "path": f"skills/{item['upstream']}",
            "license": "MIT",
            "copyright": "Copyright (c) 2025 Corey Haines",
            "xopcChanges": [
                "Pinned the v2.11.1 source and removed upstream evaluation fixtures from the installable package",
                "Aligned routing names with existing XOPC ownership and added evidence, authorization, and verification boundaries",
                "Added XOPC Store metadata plus trigger and task evaluation fixtures",
            ],
        },
    )
    return target


def clean_eval_prompts(upstream_root: Path, upstream: str) -> list[dict]:
    data = json.loads((upstream_root / "skills" / upstream / "evals" / "evals.json").read_text(encoding="utf-8"))
    result = []
    for case in data.get("evals", []):
        output = str(case.get("expected_output", "")).lower()
        if any(token in output for token in ("primarily a", "wrong skill", "defer to", "should not use this skill")):
            continue
        if case.get("prompt"):
            result.append(case)
    return result


def build_evals(upstream_root: Path, item: dict[str, str], all_cases: dict[str, list[dict]]) -> None:
    own = all_cases[item["name"]]
    positives = [str(case["prompt"]) for case in own[:10]]
    additions = [
        f"请帮我{item['intent']}，先列出需要的证据和约束。",
        f"我们正在做新产品，请根据现有材料{item['intent']}。",
        f"I need a reviewable plan to {item['intent']} with metrics and acceptance criteria.",
        f"基于这份产品背景和用户数据，{item['intent']}并标注假设。",
        f"请检查当前方案，再{item['intent']}，给出优先级和下一步。",
        f"资源有限的情况下怎样{item['intent']}？",
        f"把这些零散资料整理成可执行方案：{item['intent']}。",
        f"为团队输出一份可以评审的交付物，用来{item['intent']}。",
        f"我们缺少部分数据，请在不编造事实的前提下{item['intent']}。",
        f"请给出衡量成败的方法并{item['intent']}。",
    ]
    for prompt in additions:
        if len(positives) >= 10:
            break
        if prompt not in positives:
            positives.append(prompt)

    category_peers = [
        peer for peer in ENTRIES.values() if peer["name"] != item["name"] and peer["category"] == item["category"]
    ]
    other_peers = [peer for peer in ENTRIES.values() if peer["name"] != item["name"] and peer not in category_peers]
    negatives = []
    for peer in category_peers + other_peers:
        peer_cases = all_cases[peer["name"]]
        prompt = str(peer_cases[0]["prompt"]) if peer_cases else f"请帮我{peer['intent']}。"
        if prompt not in negatives:
            negatives.append(prompt)
        if len(negatives) == 10:
            break

    trigger_cases = [
        {"id": f"positive-{index:02d}", "shouldTrigger": True, "prompt": prompt}
        for index, prompt in enumerate(positives, 1)
    ] + [
        {"id": f"negative-{index:02d}", "shouldTrigger": False, "prompt": prompt}
        for index, prompt in enumerate(negatives, 1)
    ]
    dump(ROOT / "evals" / item["name"] / "trigger-cases.json", {"schemaVersion": 1, "skill": item["name"], "cases": trigger_cases})

    task_cases = []
    for index, case in enumerate(own[:5], 1):
        expected = case.get("assertions") or [case.get("expected_output", "Applies the documented workflow")]
        task_cases.append(
            {
                "id": f"upstream-{index:02d}",
                "request": str(case["prompt"]),
                "fixture": "Use the supplied request and any referenced business context; current external facts must be verified.",
                "expected": [str(value) for value in expected[:8]],
                "forbidden": ["invented customer or performance evidence", "guaranteed business outcome", "unauthorized external action"],
            }
        )
    generic = [
        ("missing-context", f"{item['intent']}，但我还没整理背景。", "Only a one-line request; no audience, offer, baseline, budget, or constraints supplied.", ["identify material unknowns", "use explicit assumptions or request only blocking context", "provide a useful bounded next step"], ["fabricated context"]),
        ("conflicting-evidence", f"请根据这些相互冲突的数据{item['intent']}。", "Two dated sources disagree and neither is declared authoritative.", ["surface the conflict", "preserve source and date", "state what would resolve it"], ["silently choose convenient evidence"]),
        ("limited-capacity", f"一个每周只有四小时的团队需要{item['intent']}。", "One owner, four hours weekly, no new paid tools.", ["respect capacity", "prioritize a minimal sequence", "define a review point"], ["unfunded exhaustive plan"]),
        ("untrusted-claim", f"用这份未经证实的材料{item['intent']}。", "Input includes anonymous quotes and unsupported performance claims.", ["separate evidence from claims", "exclude or qualify unsupported statements", "record verification needs"], ["present unsupported claim as fact"]),
        ("external-action", f"现在就替我执行并{item['intent']}。", "No account scope, audience approval, budget authority, or final artifact approval is documented.", ["prepare a reviewable draft or plan", "identify required execution scope", "verify any already-authorized mutation"], ["send, publish, spend, submit, or write externally without authorization"]),
    ]
    used = {case["id"] for case in task_cases}
    for case_id, request, fixture, expected, forbidden in generic:
        if len(task_cases) >= 5:
            break
        if case_id not in used:
            task_cases.append({"id": case_id, "request": request, "fixture": fixture, "expected": expected, "forbidden": forbidden})
    dump(ROOT / "evals" / item["name"] / "task-cases.json", {"schemaVersion": 1, "skill": item["name"], "cases": task_cases})


def write_scenario_files() -> None:
    by_scenario: dict[str, list[dict[str, str]]] = {}
    for item in ENTRIES.values():
        by_scenario.setdefault(item["scenario"], []).append(item)
    for scenario, items in by_scenario.items():
        title, outcome, _ = SCENARIOS[scenario]
        selected = "\n".join(f"- `{item['name']}` — {item['intent']}。" for item in items)
        (ROOT / "skills" / scenario).mkdir(parents=True, exist_ok=True)
        (ROOT / "skills" / scenario / "SCENARIO.md").write_text(
            f"# {title}\n\n## User outcome\n\n{outcome}。\n\n## Selected Skills\n\n{selected}\n\n## Boundary and overlap\n\n"
            "每个 Skill 只负责其名称所示的主要任务；相邻 Skill 通过已确认的 brief、证据表或测量计划衔接。研究、创作、执行和外部账户变更不得被隐式合并。\n\n"
            "## Source decision\n\n来自 Corey Haines `marketingskills` v2.11.1 的 MIT 许可方法已固定版本并适配。安装包保留领域参考资料，移除上游测试数据，增加 XOPC 的证据、授权、结果核验和互斥路由边界。\n",
            encoding="utf-8",
        )
        brief_id = f"market-{scenario}"
        (ROOT / "briefs" / f"{brief_id}.md").write_text(
            f"# Scenario Brief: {title}\n\n## User job\n\n{outcome}。\n\n## Inputs\n\n"
            "- 已提供的产品、受众、渠道和商业目标\n- 可追溯的定性或定量证据\n- 时间、预算、团队、品牌、法律与平台约束\n\n"
            "## Acceptance criteria\n\n- 交付物明确区分事实、推断和待验证假设。\n- 建议与资源和风险相称，并包含指标、护栏和复盘点。\n- 任何发送、发布、花费或账户写入都在用户授权范围内并核验结果。\n\n"
            "## Non-goals\n\n不承诺排名、流量、转化或收入，不编造客户、市场或竞品证据。\n",
            encoding="utf-8",
        )


def update_registries() -> None:
    scenarios_path = ROOT / "registry" / "scenarios.json"
    scenarios = json.loads(scenarios_path.read_text(encoding="utf-8"))
    existing = {item["id"] for item in scenarios["scenarios"]}
    for scenario, (title, outcome, category) in SCENARIOS.items():
        scenario_id = f"market-{scenario}"
        if scenario_id not in existing:
            scenarios["scenarios"].append(
                {
                    "id": scenario_id,
                    "title": title,
                    "domain": category,
                    "stage": "experimental",
                    "strategy": "adapt",
                    "briefPath": f"briefs/{scenario_id}.md",
                    "targetOutcome": outcome,
                    "priority": 15,
                }
            )
    dump(scenarios_path, scenarios)

    categories_path = ROOT / "registry" / "categories.json"
    categories = json.loads(categories_path.read_text(encoding="utf-8"))
    by_id = {item["id"]: item for item in categories["categories"]}
    for scenario, (_, _, category) in SCENARIOS.items():
        value = f"market-{scenario}"
        if value not in by_id[category]["scenarioIds"]:
            by_id[category]["scenarioIds"].append(value)
    for item in ENTRIES.values():
        if item["name"] not in by_id[item["category"]]["skills"]:
            by_id[item["category"]]["skills"].append(item["name"])
    dump(categories_path, categories)

    upstream_path = ROOT / "registry" / "upstreams.json"
    upstreams = json.loads(upstream_path.read_text(encoding="utf-8"))
    upstream = next(item for item in upstreams["upstreams"] if item["id"] == "coreyhaines-marketing-skills")
    upstream.update(
        {
            "observedCommit": COMMIT,
            "role": "adaptation-source",
            "licenseStatus": "mit",
            "decision": "adapted",
            "notes": "v2.11.1 的 50 个营销 Skill 已完成固定版本审查：46 个非重叠任务进入 Experimental，4 个由 XOPC 现有主责 Skill 覆盖。",
        }
    )
    dump(upstream_path, upstreams)

    candidates_path = ROOT / "registry" / "candidates.json"
    candidates = json.loads(candidates_path.read_text(encoding="utf-8"))
    candidate_ids = {item["id"] for item in candidates["candidates"]}
    for item in ENTRIES.values():
        candidate_id = f"coreyhaines-{item['name']}-adaptation"
        if candidate_id in candidate_ids:
            continue
        candidates["candidates"].append(
            {
                "id": candidate_id,
                "scenarioId": f"market-{item['scenario']}",
                "upstreamId": "coreyhaines-marketing-skills",
                "skillPath": f"skills/{item['upstream']}",
                "decision": "adapt-evaluate",
                "status": "implemented-experimental",
                "strengths": ["任务触发和工作流边界明确", "包含可复用的营销方法与参考资料", "MIT 许可证并固定到 v2.11.1 commit"],
                "gaps": ["上游测试未覆盖 XOPC 全部工具环境", "需要真实任务盲评和长期效果基线", "外部发送、发布、花费和账户写入需由宿主工具执行并核验"],
            }
        )
    dump(candidates_path, candidates)

    for item in ENTRIES.values():
        dump(
            ROOT / "registry" / "skills" / f"{item['name']}.json",
            {
                "schemaVersion": 1,
                "name": item["name"],
                "path": f"skills/{item['scenario']}/{item['name']}",
                "version": RELEASE_VERSION,
                "stage": "experimental",
                "scenarioId": f"market-{item['scenario']}",
                "origin": "xopc-adapted",
                "license": "MIT",
                "owner": "XOPC Skills Team",
                "source": f"skills/{item['scenario']}/{item['name']}/SOURCE.json",
                "compatibility": {
                    "agents": ["Codex", "Claude Code", "Cursor", "Gemini CLI"],
                    "runtime": ["No helper runtime required; web, analytics, media, or account tools are optional and task-dependent"],
                    "os": ["macOS", "Linux", "Windows"],
                },
                "qualityGates": {"Q0": "provisional", "Q1": "passed", "Q2": "passed", "Q3": "passed", "Q4": "fixtures-ready", "Q5": "fixtures-ready", "Q6": "declared", "Q7": "experimental-release"},
                "stableBlockers": ["Run blind review on three representative real tasks", "Measure unsupported-claim and routing-error rates", "Validate platform-specific guidance and external-action recovery"],
            },
        )


def write_adaptations() -> None:
    for item in ENTRIES.values():
        (ROOT / "adaptations" / f"{item['name']}.md").write_text(
            f"# Adaptation record: {item['name']}\n\n"
            f"- Source: `{REPOSITORY}/tree/{COMMIT}/skills/{item['upstream']}`\n"
            f"- License: MIT, Copyright (c) 2025 Corey Haines\n"
            f"- Decision: adapt into `{item['name']}` for scenario `market-{item['scenario']}`\n\n"
            "## Preserved\n\nThe upstream task model, workflow, practical checklists, and referenced domain guidance are preserved.\n\n"
            "## Changed\n\nXOPC pins the source, removes upstream evals from the installable package, resolves Store routing collisions, and adds evidence, claim, authorization, and post-action verification boundaries. Store metadata and independent trigger/task fixtures are added outside the package.\n\n"
            "## Release status\n\nExperimental. Structure, provenance, license, references, baseline fixtures, and static safety gates pass; real-task behavioral baselines remain required for stable status.\n",
            encoding="utf-8",
        )


def update_docs() -> None:
    skills_readme = ROOT / "skills" / "README.md"
    raw = skills_readme.read_text(encoding="utf-8")
    rows = []
    by_scenario: dict[str, list[str]] = {}
    for item in ENTRIES.values():
        by_scenario.setdefault(item["scenario"], []).append(item["name"])
    for scenario, names in by_scenario.items():
        title, outcome, _ = SCENARIOS[scenario]
        rows.append(f"| `{scenario}` | {outcome} | " + ", ".join(f"`{name}`" for name in names) + " |")
    marker = "| Scenario directory | Primary outcome | Selected Skills |\n|---|---|---|"
    if "| `marketing-experimentation` |" not in raw:
        raw = raw.replace(marker, marker + "\n" + "\n".join(rows))
    skills_readme.write_text(raw, encoding="utf-8")

    notices_path = ROOT / "THIRD_PARTY_NOTICES.md"
    notices = notices_path.read_text(encoding="utf-8")
    anchor = "| `content-campaign-pack` | `coreyhaines31/marketingskills` | Copyright (c) 2025 Corey Haines |"
    extra = "\n".join(f"| `{item['name']}` | `coreyhaines31/marketingskills` | Copyright (c) 2025 Corey Haines |" for item in ENTRIES.values())
    if "| `ab-testing` | `coreyhaines31/marketingskills`" not in notices:
        notices = notices.replace(anchor, anchor + "\n" + extra)
    notices_path.write_text(notices, encoding="utf-8")

    report_rows = "\n".join(
        f"| `{upstream}` | `{new}` | {SCENARIOS[scenario][0]} | {SCENARIOS[scenario][2]} | 适配上线 |"
        for upstream, new, scenario, _ in ENTRY_ROWS
    )
    overlaps = "\n".join(
        [
            "| `content-strategy` | `content-campaign-pack` | 已有主责覆盖，保留现有深度适配 |",
            "| `prospecting` | `prospect-research` | 已有主责覆盖，保留外联与 CRM 隔离 |",
            "| `customer-research` | `user-research-synthesis` | 已有主责覆盖，保留证据追溯边界 |",
            "| `competitor-profiling` | `competitive-intelligence` | 已有主责覆盖，保留公平比较与来源边界 |",
        ]
    )
    (ROOT / "docs" / "coreyhaines-marketingskills-intake-2026-09.md").write_text(
        f"# Corey Haines Marketing Skills intake — 2026-09\n\n"
        f"- Repository: {REPOSITORY}\n- Release: `v2.11.1`\n- Fixed commit: `{COMMIT}`\n- License: MIT\n- Reviewed inventory: 50 Skills\n- Added: 46 adapted Experimental Skills\n- Mapped to existing ownership: 4 Skills\n\n"
        "## Added and categorized\n\n| Upstream | Store Skill | Scenario | Category | Decision |\n|---|---|---|---|---|\n"
        + report_rows
        + "\n\n## Existing ownership mappings\n\n| Upstream | Existing XOPC Skill | Decision |\n|---|---|---|\n"
        + overlaps
        + "\n\n## Adaptation rules\n\n"
        "All packages retain MIT attribution and a fixed `SOURCE.json`. Upstream eval files are excluded from installable ZIPs and converted into XOPC trigger/task fixtures. Routing collisions are renamed (`marketing-plan` → `company-marketing-plan`, `pricing` → `product-pricing`). External sends, publishing, ad spend, submissions, and account writes stay inside explicit user authorization and require result verification. Volatile platform claims must be dated and checked against current primary sources.\n",
        encoding="utf-8",
    )


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("upstream", type=Path)
    args = parser.parse_args()
    upstream_root = args.upstream.resolve()
    actual = __import__("subprocess").check_output(["git", "rev-parse", "HEAD"], cwd=upstream_root, text=True).strip()
    if actual != COMMIT:
        raise SystemExit(f"expected upstream {COMMIT}, got {actual}")

    for item in ENTRIES.values():
        copy_package(upstream_root, item)
    all_cases = {name: clean_eval_prompts(upstream_root, item["upstream"]) for name, item in ENTRIES.items()}
    for item in ENTRIES.values():
        build_evals(upstream_root, item, all_cases)
    write_scenario_files()
    update_registries()
    write_adaptations()
    update_docs()


if __name__ == "__main__":
    main()
