# Waiting and Timeouts - Ensuring tests are reliable.

*Explanation:* Web pages are dynamic. Elements might take time to load or become interactable. Playwright provides various waiting mechanisms to make tests reliable:

- `await page.waitForLoadState('load' | 'domcontentloaded' | 'networkidle'):` Wait for different page load states. `'load'` is full page load, `'domcontentloaded'` is when initial HTML is parsed, `'networkidle'` waits until network activity is idle for a period.

- `await page.waitForSelector('locator'):` Wait until an element matching the locator appears in the DOM.

- `await expect(locator).toBeVisible({ timeout: milliseconds }): `Assertions with timeouts can implicitly wait for an element to become visible within the timeout period.

- `await page.waitForTimeout(milliseconds):`  Pause execution for a fixed duration (use sparingly, prefer event-based waiting).

- Playwright's Auto-Waiting: Many Playwright actions (like `click()`, `fill())` have built-in auto-waiting. They will automatically wait for an element to be actionable before performing the action.