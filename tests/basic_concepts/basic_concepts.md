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

```Javascript
const { test, expect } = require('@playwright/test');

test('Verify Welcome Text using Text Locator', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');

  // Locator by Text:  finds an element that *contains* the given text (case-insensitive)
  const welcomeTextLocator = page.locator('text=Welcome to the-internet');

  // Assertion: Check if the locator is visible (meaning the element exists and is displayed)
  await expect(welcomeTextLocator).toBeVisible();
});

test('Verify Elemental Selenium Link using CSS Selector', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');

  // Locator by CSS Selector:  using a class name '.heading'
  const elementalSeleniumLinkLocator = page.locator('div#content > .heading'); // space means descendant

  // Assertion: Check if the link is visible
  await expect(elementalSeleniumLinkLocator).toBeVisible();

  // You can also check the text content of the link
  await expect(elementalSeleniumLinkLocator).toHaveText('Welcome to the-internet');
});
```

Explanation:

* `page.locator('text=Welcome to the-internet'):`  Creates a locator that finds elements containing the text "Welcome to the-internet".

* `page.locator('.div#content > .heading'):` Selects an element with the class 'div' and id 'content' that contains a child element with the class 'heading'.

* `expect(locator).toBeVisible():` Asserts that the element located by locator is visible on the page.

* `expect(locator).toHaveText('Welcome to the-internet'):` Asserts that the element located by locator has the text content "Welcome to the-internet"

## Actions - Interacting with ELEMENTS

Explanation: Once you have located an element, you can perform actions on it. Common actions include:

`click():`Clicks on an element.

`type('text'):` Types text into an input field or editable element.

`fill('text'):` Similar to type, but often preferred for input fields as it clears the field first.

`hover():` Hovers the mouse over an element.

`selectOption('value') or selectOption({ label: 'Option Text' }):`Selects an option in a dropdown.

`check():` Checks a checkbox or radio button.

`uncheck():` Unchecks a checkbox.

`setInputFiles('filepath'):`  Uploads files to an `<input type="file">` element.

### Code Implementation

```javascript
const { test, expect } = require('@playwright/test');

test('Add and Remove Elements', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

  // Locate the "Add Element" button by text
  const addButton = page.locator('button', { hasText: 'Add Element' }); // More robust locator
  const deleteButtonLocator = page.locator('#elements button', { hasText: 'Delete' }); // Locator for Delete button

  // Click the "Add Element" button
  await addButton.click();

  // Verify that the "Delete" button is visible
  await expect(deleteButtonLocator).toBeVisible();

  // Click the "Delete" button
  await deleteButtonLocator.click();

  // Verify that the "Delete" button is NOT visible (using .not.toBeVisible())
  await expect(deleteButtonLocator).not.toBeVisible();
});
```

Explanation:

`page.locator('button', { hasText: 'Add Element' }):`  Locator for the "Add Element" button using the hasText option for more robust text-based locating.

`page.locator('#elements button', { hasText: 'Delete' }):` Locator for the "Delete" button. We use #elements button to be specific to buttons inside the #elements div (where dynamically added elements appear).

`addButton.click():` Performs a click action on the "Add Element" button.

`deleteButtonLocator.click():` Performs a click action on the "Delete" button.

`expect(deleteButtonLocator).not.toBeVisible():`  Asserts that the "Delete" button is not visible on the page after clicking it.

## Assertions - Verifying expected outcomes

Explanation: We've already used expect for basic visibility and text assertions. Playwright's expect library (from expect-playwright) provides a rich set of matchers to verify various conditions. Some common assertions:

`.toBeVisible():` Checks if an element is visible.

`.toBeHidden():` Checks if an element is hidden.

`.toHaveText('text'):` Checks if an element has the specified text content.

`.toContainText('text'):` Checks if an element's text content contains the specified text.

`.toHaveAttribute('attributeName', 'attributeValue'):` Checks if an element has a specific attribute with a value.

`.toHaveValue('value'):` Checks the value of an input field or other form element.

`.toHaveClass('className'):` Checks if an element has a specific CSS class.

`.toHaveURL('url'):` Checks if the current page URL matches the expected URL.

`.toHaveTitle('title'):` Checks if the page title matches the expected title.

### Code_Implementation

```javascript
const { test, expect } = require('@playwright/test');

test('Checkboxes Default State', async ({ page}) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    const checkbox1 = page.locator("//form[@id='checkboxes']/input[1]"); // Get the first checkbox
    // Checkinc if the checkbox is visible and exists
    await expect(checkbox1).toBeVisible();

    const checkbox2 = page.locator("//form[@id='checkboxes']/input[2]"); // Get the second checkbox

    //Assertion: Checkbox 1 should NOT be checked initially
    await expect(checkbox1).not.toBeChecked();

    //Assertion: Checkbox 2 should be checked initially
    await expect(checkbox2).toBeChecked();
});
```

- Explanation:

`page.locator('input[type="checkbox"]').nth(0):` Locates all checkboxes (input[type="checkbox"]) and uses .nth(0) to get the first one (index 0). .nth(1) gets the second one.

`expect(checkbox1).not.toBeChecked():` Asserts that checkbox 1 is not checked.

`expect(checkbox2).toBeChecked():` Asserts that checkbox 2 is checked.
