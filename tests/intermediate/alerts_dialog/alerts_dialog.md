# Handling Alerts and Dialogs.

**Explanation:** Websites sometimes use JavaScript alerts, confirms, or prompts. Playwright can handle these.

**Event Listeners:** Playwright provides events like dialog that you can listen to on the page object.

- `dialog.type():` Get the type of dialog ('alert', 'confirm', 'prompt').

- `dialog.message():` Get the message displayed in the dialog.

- `dialog.accept():`  Accept (click "OK" or "Yes") the dialog.

- `dialog.dismiss():` Dismiss (click "Cancel" or "No") the dialog.

- `dialog.defaultValue() and dialog.type():` For prompts, get the default value and type text into the prompt using dialog.accept(promptText).

``` javascript
const { test, expect } = require('@playwright/test');

test('Handle JS Alert', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  // Set up a listener for the 'dialog' event BEFORE clicking the button
  page.on('dialog', async dialog => {
    expect(dialog.type()).toBe('alert'); // Verify dialog type is 'alert'
    expect(dialog.message()).toBe('I am a JS Alert'); // Verify alert message
    await dialog.accept(); // Accept the alert (click OK)
  });

  // Click the "Click for JS Alert" button
  await page.locator('button', { hasText: 'Click for JS Alert' }).click();

  // Assert the result message after accepting the alert
  const resultMessage = page.locator('#result');
  await expect(resultMessage).toBeVisible();
  await expect(resultMessage).toHaveText('You successfully clicked an alert');
});

// Similar tests can be written for JS Confirm and JS Prompt, handling 'dialog.dismiss()' and 'dialog.accept(promptText)' accordingly.
```