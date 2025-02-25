const { test, expect } = require('@playwright/test');

test('Dynamic Loading - Wait for Element to Appear', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1'); // Go to the page

    const startButton = page.locator('button');
    const finishText = page.locator('#finish');

    // Assert that "Hello World!" is initially not visible
    await expect(finishText).not.toBeVisible(); // Assert that the element is not visible
    
    // Click the start button
    await startButton.click();

    // Wait for the "Hello World!" text to become visible using the waitForSelector (most reliable)
    await finishText.waitFor({ state: 'visible' }); // Waits for visibility

    // Now assert that it IS visible (redundant, but good practice to re-assert after waiting)
    await expect(finishText).toBeVisible();
    await expect(finishText).toHaveText('Hello World!'); // Assert that the text is correct
});