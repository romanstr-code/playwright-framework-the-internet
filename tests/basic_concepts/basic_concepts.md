# Understanding playwright basics

## Browsers, Contexts, and Pages - Core concepts explained

<!-- Playwright interacts with browsers using three core concepts: 
1. Browser
2. Browser Context 
3. and Page. -->

### Explanation

Playwright works by controlling browsers. Understanding these concepts is crucial:

**Browser**: Represents an instance of a browser (like Chromium, Firefox, or WebKit). You can launch different browsers using Playwright.

**Browser Context**: Provides isolated sessions within a browser. Think of it as different browser profiles. Each context has its own cookies, local storage, etc. This is useful for running tests in isolation and preventing state from previous tests from affecting subsequent ones. By default, Playwright creates a new browser context for each test.

**Page**: Represents a single tab or window within a browser context. You interact with web pages through the page object.

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

### Code Explanation

* `async ({ browser }) => { ... }` : We are now using the browser fixture. Playwright provides different fixtures to access browser-level, context-level, and page-level objects.
* `browser.browserType().name()`: Shows the type of browser being used (e.g., "chromium"). By default, Playwright runs tests on Chromium. You can configure it to run on Firefox and WebKit as well.
* `browser.newContext()`: Creates a new browser context.
* `context.newPage()`: Creates a new page within the created context.
* `context.close()`: Closes the context. It's generally good practice to close contexts when you are done with them, although Playwright often manages this automatically.

## Locators - Finding elements on the page

Explanation: Locators are the heart of Playwright. They are used to find specific elements on a web page so you can interact with them. Playwright locators are powerful and resilient. Key locator strategies:

* **By Text**: Locate elements based on their visible text content.
* **By CSS Selector**: Use CSS selectors (like in CSS styling) to target elements.
* **By XPath**: Use XPath expressions to navigate the HTML structure.
* **By Role**: Locate elements based on their semantic HTML role (e.g., "button", "link", "checkbox").
* **By Label**: Locate form elements associated with a specific label.
* **By Placeholder**: Locate input fields based on their placeholder text.
* **By Alt Text**: Locate images based on their alt attribute.
* **Combining Locators**: Chain locators to be more specific.

