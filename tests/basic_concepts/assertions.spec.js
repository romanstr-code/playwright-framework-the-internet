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