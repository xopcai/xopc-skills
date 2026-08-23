---
name: playwright-webapp-testing
description: Add, repair, and run resilient Playwright end-to-end tests for an existing web application, including selectors, auth state, API mocking, traces, and flaky-test diagnosis. Use for Playwright test suites and browser acceptance flows; do not use for one-off browsing, scraping, or non-web unit tests.
license: MIT
metadata:
  author: XOPC, adapted from TestMu AI
  version: "0.1.0"
---

# Playwright Web Application Testing

Turn a user-visible journey into a deterministic test that runs against the application's real start command and produces evidence when it fails. Default to local Playwright; use a cloud grid only when the user requests it or the required browser/OS combination cannot run locally.

## Workflow

1. Inspect the repository before adding dependencies. Detect language, package manager, Playwright version, existing configuration, test conventions, application start command, base URL, and CI environment.
2. Define the journey in user terms: starting state, actor, actions, observable outcome, and cleanup. Ask for missing credentials or destructive-test authorization instead of inventing fixtures.
3. Match the existing suite. For a new TypeScript suite, use `@playwright/test`; do not introduce a Page Object Model until repeated flows or more than a few tests justify it.
4. Prefer selectors in this order: role/name, label, placeholder, stable visible text, then test ID. Use raw CSS/XPath only for a third-party widget with no semantic locator.
5. Use Playwright's web-first assertions. Never replace a state condition with `waitForTimeout`. Keep tests independent; create or reset their own state.
6. For authentication, keep secrets out of test files and artifacts. Reuse `storageState` only when its lifecycle is controlled and the file is ignored by version control.
7. Run the narrowest affected test first, then the relevant project/browser matrix. Keep trace on first retry and screenshots/videos on failure when artifact sensitivity permits.
8. On failure, classify product defect, environment/startup failure, selector drift, data collision, race, browser incompatibility, or test defect. Read [references/reliability.md](references/reliability.md) for flaky tests, mocking, CI, or authentication.
9. Deliver the test diff, commands run, pass/fail evidence, generated artifact locations, and what was not tested.

## Guardrails

- Do not run tests against production unless the user explicitly authorizes the target, accounts, data mutations, and cleanup.
- Do not silently switch from local execution to a paid cloud provider.
- Do not weaken assertions, add broad retries, or increase timeouts merely to make a flaky test green.
- Mask or disable screenshots, videos, traces, and logs when they can capture credentials or regulated data.
- Preserve the application's accessibility semantics; a locator failure may expose a product accessibility issue rather than a reason to add a brittle selector.

## Minimum acceptance evidence

- The intended flow fails before the product fix when the task is regression coverage, or the new test is shown to detect a controlled broken condition.
- The test passes after the change in the requested browser scope.
- A second run passes without shared-state dependence.
- Configuration parses and the complete affected test file runs, not only a pasted fragment.

## Attribution

Adapted from TestMu AI's MIT-licensed `playwright-skill`, pinned in `SOURCE.json`. XOPC removes the default cloud-service coupling and retains the local-first selector, assertion, debugging, and validation patterns.
