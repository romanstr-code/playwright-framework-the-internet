const { test, expect } = require('@playwright/test');

test('Positive Login', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');

    // Locate username and password fields and fill them
    await page.locator('#username').fill('tomsmith');
    await page.locator('#password').fill('SuperSecretPassword!');

    // Locate and click the login button
    await page.locator('button[type="submit"]').click();

    //Wait for navigation to secure page (or for success message to appear)
    await page.waitForURL('**/secure'); //Wait for URL to contain '/secure'

    //Assert success message 
    const successMessage = page.locator('div#flash.flash.success');
    await expect(successMessage).toBeVisible();
    await expect(successMessage).toContainText('You logged into a secure area!');

    //Assert logout button visible (indicates successful login)
    const logoutButton = page.locator('.button.secondary');
    await expect(logoutButton).toBeVisible();
    await expect(logoutButton).toHaveText('Logout');

    // click logout button
    await page.locator('.button.secondary').click();
    await page.waitForURL('**/login'); //Wait for URL to contain '/login'
});

test('Negative Login - Invalid Password', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');

    // Fill in username and Incorrect password
    await page.locator('#username').fill('tomsmith');
    await page.locator('#password').fill('IncorrectPassword');

    await page.locator('button[type="submit"]').click();

    // Assert error message
    const errorMessage = page.locator('div#flash.flash.error');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Your password is invalid!'); 

    // Optionally, assert that we are still on the login page (URL doesn't change to /secure)
    await expect(page).not.toHaveURL('**/secure'); // Negatice URL assertion

});