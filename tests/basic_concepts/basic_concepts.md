# Understanding playwright basics

## Browsers, Contexts, and Pages - Core concepts explained

<!-- Playwright interacts with browsers using three core concepts: 
1. Browser
2. Browser Context 
3. and Page. -->

```javascript
const { test } = require('@playwright/test');

test('Browser, Context, Page Example', async ({ browser }) => {
    // 'browser' fixture is available
    console.log('Browser type:', browser.browserType().name()); // Get the browser type (chromium, firefox, webkit)

    const context = await browser.newContext(); // Create a new browser context
    const page1 = await context.newPage(); // Create a new page in the context
    await page1.goto('https://example.com');
    console.log('Page 1 title:', await page1.title());

    const page2 = await context.newPage(); // Create another page in the same context
    await page2.goto('https://wikipedia.org');
    console.log('Page 2 title:', await page2.title());

    await context.close(); // Close the browser context (and all pages within it)
    // Browser is automatically closed by Playwright after all tests are done in this file.
});
```
