const { test, expect } = require('@playwright/test');

test('Dropdown Interaction', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');

    const dropdown = page.locator('#dropdown');

    // Select "Option 1" from dropdown
    await dropdown.selectOption({ value: '1' });
    await expect(dropdown).toHaveValue('1'); // Assert that the dropdown value is "1"

    // Select "Option 2" by label
    await dropdown.selectOption({ label: 'Option 2' });
    await expect(dropdown).toHaveValue('2'); // Assert that the dropdown value is "2"
});

test('Checkbox Interaction', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    const checkbox1 = page.locator('input[type="checkbox"]').nth(0);
});