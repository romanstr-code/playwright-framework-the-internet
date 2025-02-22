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

    // Check the first checkbox
    await checkbox1.check();
    await expect(checkbox1).toBeChecked(); // Assert that the first checkbox is checked

    // Uncheck the first checkbox
    await checkbox1.uncheck();
    await expect(checkbox1).not.toBeChecked(); // Assert that the first checkbox is not checked

    // Radio Button example (if "The Internet" had radio buttons - for demonstration)
    // test('Radio Button Interaction', async ({ page }) => {
    //   await page.goto('URL_WITH_RADIO_BUTTONS');
    //
    //   const radioButton1 = page.locator('input[type="radio"]').nth(0);
    //   const radioButton2 = page.locator('input[type="radio"]').nth(1);
    //
    //   await radioButton1.check();
    //   await expect(radioButton1).toBeChecked();
    //   await expect(radioButton2).not.toBeChecked(); // Assuming radio buttons are in the same group
    //
    //   await radioButton2.check();
    //   await expect(radioButton2).toBeChecked();
    //   await expect(radioButton1).not.toBeChecked();
    // });

});