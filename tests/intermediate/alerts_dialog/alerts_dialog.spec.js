const { test, expect } = require('@playwright/test');

test('Handle JS Alerts', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // Set up a lisnter for the 'dialog' event BEFORE clicking the button
    page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('alert'); // Verify dialog type is 'alert'
        expect(dialog.message()).toBe('I am a JS Alert'); // Verify dialog message
        await dialog.accept(); // Accept the alert (click 'OK')
    });

    // Click the ""Click for JS Alert" button
    await page.locator('button', { hasText: 'Click for JS Alert' }).click();

    // Assert the result message after accepting the alert
    const resultMessage = page.locator('#result'); // Get the result message
    await expect(resultMessage).toBeVisible(); // Verify the result message is visible
    await expect(resultMessage).toHaveText('You successfully clicked an alert'); // Verify the result message text
});
