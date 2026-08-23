# Playwright reliability patterns

## Stable state, not time

- Prefer `await expect(locator).toBeVisible()` or another outcome assertion.
- Wait for a specific response only when that response is the product contract.
- Avoid `networkidle` for apps with analytics, websockets, polling, or background requests.
- Do not hide races behind global timeouts.

## Authentication

Use a setup project to create storage state when many tests share the same role. Keep separate state per role, do not commit state files, and regenerate them when session scope changes. For security-sensitive flows, log in through the UI when authentication itself is under test.

## Data and cleanup

Generate unique identifiers per worker. Prefer API or database fixtures only when those interfaces are part of the test environment contract. Cleanup should be idempotent and must never broaden to unrelated records.

## API mocking

Mock a boundary to make an upstream failure deterministic, not to replace the product behavior being tested. Assert the request shape when compatibility matters. Keep at least one integration path against the real dependency in an appropriate environment.

## Flake diagnosis

1. Reproduce with the same seed/project and collect a trace.
2. Identify the first incorrect state, not the final timeout.
3. Check shared data, parallelism, animation, virtualized content, clock/timezone, and service-worker/cache state.
4. Fix the state contract or locator, then run repeatedly without increasing retries.

## CI evidence

Retain the Playwright HTML report and trace only for failed/retried tests. Record the application revision, browser project, base URL class, command, and result. Never publish artifacts that contain credentials or personal data.
