const { test, expect } = require('@playwright/test');

test('Check Basic Button Interaction', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/entry_ad');

    const modal = page.locator('.modal');
    const closeButton = modal.locator('.modal-footer p');
    //Assuming close button is inside footer

    // Verify modal is initially visible
    await expect(modal).toBeVisible();
    // Click on close button
    await closeButton.click();

    // Verify modal is not visible
    await expect(modal).toBeHidden();
});


test('Check Link navigation', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');

    const abTestingLink = page.locator('a', { hasText: 'A/B Testing' });
    // Click on A/B Testing link
    await abTestingLink.click();

    // Wait for navigation to complete and assert the URL
    await page.waitForURL('**/abtest');// wait for URL to contain /abtest
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/abtest');

    // Assert the heading on the A/B Testing page
    const heading = page.locator('h3');
    await expect(heading).toHaveText('A/B Test Variation 1', { timeout: 10000 });
});


test('Check Text Input and Echo', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/inputs');

    const inputField = page.locator('input[type="number"]'); // Assuming input field is of type number
    // Type text into input field
    await inputField.fill('12345');

    // Wait a bit ( optional, but sometimes helpful for UI updates)
    await page.waitForTimeout(100);

    // Assert the value in the input field
    await expect(inputField).toHaveValue('12345');
});