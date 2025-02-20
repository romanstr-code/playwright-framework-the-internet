const { test, expect } = require('@playwright/test');

test('Add and Remove Elements', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

    // Locate the "Add Element" button by text
    const addButton = page.locator('button', { hasText: 'Add Element'}); // More robust way to locate the button
    const deleteButtonLocator = page.locator('#elements button', { hasText: 'Delete'}); //Locator for the delete button

    // Click the "Add Element" button
    await addButton.click();

    // Verify that the "Delete" button is visible
    await expect(deleteButtonLocator).toBeVisible();

    //Click the "Delete" button
    await deleteButtonLocator.click();

    // Verify that the "Delete" button is NOT visible (using .not.toBeVisible())
    await expect(deleteButtonLocator).not.toBeVisible();
});

