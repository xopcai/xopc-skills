#!/usr/bin/env python3
"""Create a small, reproducible Git ownership-risk report without dependencies."""

import argparse
import csv
import fnmatch
import json
import subprocess
from collections import Counter, defaultdict
from datetime import datetime, timezone
from pathlib import Path


def git(repo, *args):
    result = subprocess.run(
        ["git", "-C", str(repo), *args],
        check=False,
        capture_output=True,
        text=True,
    )
    if result.returncode:
        raise SystemExit(result.stderr.strip() or "git command failed")
    return result.stdout


def parse_args():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--repo", type=Path, default=Path.cwd())
    parser.add_argument("--out", type=Path, required=True)
    parser.add_argument("--since", help="Git date accepted by --since, for example 12 months ago")
    parser.add_argument(
        "--sensitive",
        action="append",
        default=[],
        help="Sensitive path glob; repeat as needed (default: common auth/secret/payment patterns)",
    )
    parser.add_argument("--stale-days", type=int, default=365)
    parser.add_argument("--identity", choices=["email", "name", "name-email"], default="email")
    parser.add_argument("--exclude-author", action="append", default=[], help="Author glob to omit; repeat as needed")
    parser.add_argument("--exclude-path", action="append", default=[], help="Path glob to omit; repeat as needed")
    return parser.parse_args()


def main():
    args = parse_args()
    repo = args.repo.resolve()
    git(repo, "rev-parse", "--is-inside-work-tree")
    patterns = args.sensitive or [
        "*auth*", "*security*", "*secret*", "*credential*", "*payment*", "*crypto*", "*permission*"
    ]
    command = ["log", "--format=@@%aI%x09%aN%x09%aE", "--name-only"]
    if args.since:
        command.append(f"--since={args.since}")
    authors = defaultdict(Counter)
    last_touch = {}
    current = None
    for line in git(repo, *command).splitlines():
        if line.startswith("@@"):
            stamp, name, email = line[2:].split("\t", 2)
            identities = {"email": email, "name": name, "name-email": f"{name} <{email}>"}
            author = identities[args.identity]
            current = None if any(fnmatch.fnmatch(author.lower(), pattern.lower()) for pattern in args.exclude_author) else (stamp, author)
        elif line and current:
            if any(fnmatch.fnmatch(line.lower(), pattern.lower()) for pattern in args.exclude_path):
                continue
            stamp, author = current
            authors[line][author] += 1
            if line not in last_touch or stamp > last_touch[line]:
                last_touch[line] = stamp

    now = datetime.now(timezone.utc)
    rows = []
    for path, counts in authors.items():
        ordered = counts.most_common()
        total = sum(counts.values())
        top_author, top_touches = ordered[0]
        touched_at = datetime.fromisoformat(last_touch[path].replace("Z", "+00:00"))
        stale_days = (now - touched_at).days
        sensitive = any(fnmatch.fnmatch(path.lower(), pattern.lower()) for pattern in patterns)
        rows.append({
            "path": path,
            "sensitive": sensitive,
            "distinct_authors": len(ordered),
            "top_author": top_author,
            "top_author_share": round(top_touches / total, 4),
            "total_touches": total,
            "last_touch": last_touch[path],
            "stale_days": stale_days,
            "low_bus_factor": len(ordered) < 2,
        })
    rows.sort(key=lambda row: (not row["sensitive"], not row["low_bus_factor"], -row["top_author_share"], row["path"]))

    args.out.mkdir(parents=True, exist_ok=True)
    fields = list(rows[0]) if rows else [
        "path", "sensitive", "distinct_authors", "top_author", "top_author_share",
        "total_touches", "last_touch", "stale_days", "low_bus_factor",
    ]
    with (args.out / "files.csv").open("w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(handle, fieldnames=fields)
        writer.writeheader()
        writer.writerows(rows)
    risky = [row for row in rows if row["sensitive"] and (row["low_bus_factor"] or row["stale_days"] >= args.stale_days)]
    summary = {
        "repository": str(repo),
        "history_window": args.since or "all available history",
        "sensitive_patterns": patterns,
        "identity_mode": args.identity,
        "excluded_author_patterns": args.exclude_author,
        "excluded_path_patterns": args.exclude_path,
        "files_analyzed": len(rows),
        "sensitive_files": sum(row["sensitive"] for row in rows),
        "sensitive_low_bus_factor_files": sum(row["sensitive"] and row["low_bus_factor"] for row in rows),
        "sensitive_stale_files": sum(row["sensitive"] and row["stale_days"] >= args.stale_days for row in rows),
        "highest_risk_paths": [row["path"] for row in risky[:20]],
        "limitations": [
            "Commit touches do not prove expertise, accountability, availability, or employment status.",
            "Renames, aliases, bots, generated files, and bulk commits can distort results.",
            "Validate findings against current CODEOWNERS and team context before acting.",
        ],
    }
    (args.out / "summary.json").write_text(json.dumps(summary, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(summary, indent=2))


if __name__ == "__main__":
    main()
