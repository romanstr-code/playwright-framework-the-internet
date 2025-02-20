// Locator Check Welcome text
const { test, expect } = require('@playwright/test');

test('Verify Welcome text using text Locator', async ({ page}) => {
    await page.goto('https://the-internet.herokuapp.com/');

    // Locator by Text: finds an element that *contains* the given text (case-insensitive)
    const welcomeTextLocator = page.locator('text=Welcome to the-internet');

    // Assertion: Check if the locator is visible (meaning the element exists and is displayed)
    await expect(welcomeTextLocator).toBeVisible();
});

test ('Verify Elemental Selenium link using CSS Selector', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');

    // Locator by CSS Selector: using a class name '.heading'
    const elementalSeleniumLinkLocator = page.locator('div#content > .heading');
    // space means descendant, so this will find an 'a' element that is a descendant of an element with class 'heading'

    // Assertion: Check if the link is visible
    await expect(elementalSeleniumLinkLocator).toBeVisible();

    // You can also check the text of the link
    await expect(elementalSeleniumLinkLocator).toHaveText('Welcome to the-internet');
});

