# Scenario Brief: fix-failing-github-actions

## User and outcome

Developers need to understand and repair failing GitHub Actions checks on a pull request. The output is a log-grounded diagnosis, approved minimal fix, local verification, and an honest current check status.

Success means the target PR and failing check are resolved, relevant logs are bounded and summarized, external checks are not misrepresented, code changes wait for approval, and passing claims use fresh evidence.

## Boundaries

- GitHub Actions only; other CI providers are report-only by default.
- Inspection permission does not authorize reruns, pushes, repository setting changes, or authentication mutation.
- Creating a new CI pipeline and ordinary local test debugging are separate tasks.

## Evaluation

Fixtures cover failed, pending, missing-log, external-provider, flaky, and unrelated-to-diff checks. Script tests verify run/job URL parsing, failure-window extraction, and safe non-network help behavior.
