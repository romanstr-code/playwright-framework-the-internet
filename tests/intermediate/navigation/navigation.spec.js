const { test, expect } = require('@playwright/test');

test ('Navigate Back, Forward, Reload', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');

    const abTestingLink = page.locator('a', {hasText: 'A/B Testing'});
    await abTestingLink.click();
    await page.waitForURL('**/abtest'); // Wait for navigation

    // Verify we are on A/B Testing page
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/abtest');
    
    // Navigate back
    await page.goBack();
    await page.waitForURL('https://the-internet.herokuapp.com/'); // Wait for Homepage
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/');

    // Navigate forward
    await page.goForward();
    await page.waitForURL('**/abtest'); // Wait for A/B Testing page
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/abtest'); // Verify we are on A/B Testing page

    // Reload page
    await page.reload();
    // No need to wait for URL change on reload, it should remain the same
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/abtest'); // Verify we are still on A/B Testing page
}); 