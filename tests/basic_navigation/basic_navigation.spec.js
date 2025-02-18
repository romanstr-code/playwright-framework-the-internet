// import necessary modules from Playwright
const { test, expect } = require('@playwright/test');

// Grouping relevant tests under a describe block for better organization
test.describe('Basic Navigation', () => {

    // Positive Test Case: Verify if the page title is correct
    test('Positive: Check Page Title', async ({ page }) => {
        // Navigate to the target website
        await page.goto('https://the-internet.herokuapp.com/');

        // Assert that the page title is exactly "The Internet"
        await expect(page).toHaveTitle('The Internet');
    });
});