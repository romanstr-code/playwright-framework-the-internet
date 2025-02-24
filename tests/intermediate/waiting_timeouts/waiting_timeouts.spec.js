const { test, expect } = require('@playwright/test');

test('Dynamic Loading - Wait for Element to Appear', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1'); // Go to the page

    const startButton = page.locator('button');
    const finishText = page.locator('#finish');

    // Assert that "Hello World!" is initially not visible
    await expect(finishText).not.toBeVisible(); // Assert that the element is not visible
    
});