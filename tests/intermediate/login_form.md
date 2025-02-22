# Form Handling - Submitting forms and validating results.

## Explanation:  Let's test a form submission. "The Internet" website has a "Login" page. We can test both successful and unsuccessful login scenarios.

`fill(): To fill input fields in a form.

`click():` To click the submit button.

`waitForURL():` To wait for page navigation after form submission (if the form redirects).

Assertions: To verify success/failure messages or page content after submission.

- Example Test Cases (tests/login_form.spec.js):

***Test Case ID:*** TC_LoginForm_PositiveLogin

***Description:*** Test successful login with valid credentials.

***Steps:***

1. Navigate to "https://the-internet.herokuapp.com/login".

2. Enter username "tomsmith".

3. Enter password "SuperSecretPassword!".

4. Click the "Login" button.

5. Wait for navigation to the secure area page.

6. Verify that the success message "You logged into a secure area!" is displayed.

7. Verify that the "Logout" button is visible.

8. Expected Result: User should be logged in successfully, success message and logout button should be visible.

``` javascript
    const { test, expect } = require('@playwright/test');

test('Positive Login - Successful Login', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  // Locate username and password input fields and fill them
  await page.locator('#username').fill('tomsmith');
  await page.locator('#password').fill('SuperSecretPassword!');

  // Locate and click the login button
  await page.locator('button[type="submit"]').click();

  // Wait for navigation to the secure page (or for success message to appear)
  await page.waitForURL('**/secure'); // Wait for URL to contain '/secure'

  // Assert success message
  const successMessage = page.locator('#flash-messages .success');
  await expect(successMessage).toBeVisible();
  await expect(successMessage).toContainText('You logged into a secure area!');

  // Assert logout button is visible (indicates successful login)
  const logoutButton = page.locator('.button.secondary');
  await expect(logoutButton).toBeVisible();
  await expect(logoutButton).toHaveText('Logout');
});

test('Negative Login - Invalid Password', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  // Fill username and WRONG password
  await page.locator('#username').fill('tomsmith');
  await page.locator('#password').fill('wrongpassword');

  await page.locator('button[type="submit"]').click();

  // Assert error message
  const errorMessage = page.locator('#flash-messages .error');
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText('Your username is invalid!'); // Message is actually about username/password combo

  // Optionally, assert that we are still on the login page (URL doesn't change to '/secure')
  await expect(page).not.toHaveURL('**/secure'); // Negative URL assertion
});
```