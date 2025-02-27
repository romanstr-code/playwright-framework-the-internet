# Introduction to Page Object Model (POM) - Why and How

*Explanation:* The Page Object Model (POM) is a design pattern widely used in test automation. 

- It aims to:

*Improve Maintainability:* Isolate page-specific locators and interactions within page object classes. If the UI changes, you only need to update the page object, not every test that uses that page.

*Enhance Reusability:* Page objects encapsulate page functionality, which can be reused across multiple tests.

*Increase Readability:* Tests become cleaner and more focused on the test logic, as page interactions are abstracted into page objects.

- How POM Works:

- For each web page you want to test, create a corresponding Page Object class.

- In the Page Object class:

1. Define locators for elements on that page as class properties.

2. Create methods (functions) that represent user interactions on that page. These methods use the defined locators to perform actions.

- In the tests:

- We will create instances of the Page Object classes.

- Use the methods of the Page Object classes to interact with the page in the tests.

## Creating Page Object Classes for "The Internet" website sections.

**Action:** I create Page Object classes for some sections of "The Internet" website. I'll start with the Homepage and the Login Page.

```javascript
// page-objects/HomePage.js
const { expect } = require('@playwright/test');

class HomePage {
  constructor(page) {
    this.page = page;
    // Locators for elements on the Homepage
    this.heading = page.locator('h1.heading');
    this.abTestingLink = page.locator('a', { hasText: 'A/B Testing' });
    this.loginLink = page.locator('a', { hasText: 'Form Authentication' }); // Link to Login page
    // ... add more locators for other elements on the homepage as needed
  }

  async gotoHomePage() {
    await this.page.goto('https://the-internet.herokuapp.com/');
  }

  async clickABTestingLink() {
    await this.abTestingLink.click();
  }

  async clickLoginLink() {
    await this.loginLink.click();
  }

  async verifyHomePageHeading() {
    await expect(this.heading).toBeVisible();
    await expect(this.heading).toHaveText('Welcome to the-internet');
  }

  // ... add more methods for homepage interactions and verifications
}

module.exports = HomePage; // Export the class so we can use it in tests
```

```javascript
// page-objects/LoginPage.js
const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    // Locators for Login Page elements
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('button[type="submit"]');
    this.successMessage = page.locator('#flash-messages .success');
    this.errorMessage = page.locator('#flash-messages .error');
    this.logoutButton = page.locator('.button.secondary');
  }

  async gotoLoginPage() {
    await this.page.goto('https://the-internet.herokuapp.com/login');
  }

  async enterUsername(username) {
    await this.usernameInput.fill(username);
  }

  async enterPassword(password) {
    await this.passwordInput.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async login(username, password) { // Combined login action
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }

  async verifySuccessMessage() {
    await expect(this.successMessage).toBeVisible();
    await expect(this.successMessage).toContainText('You logged into a secure area!');
  }

  async verifyErrorMessage() {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toContainText('Your username is invalid!'); // Or adjust message as needed
  }

  async verifyLogoutButtonVisible() {
    await expect(this.logoutButton).toBeVisible();
    await expect(this.logoutButton).toHaveText('Logout');
  }

  async verifyLogoutButtonNotVisible() {
    await expect(this.logoutButton).not.toBeVisible();
  }
}

module.exports = LoginPage;
```

*Explanation:*

- Each Page Object class has a constructor that takes the page fixture as an argument and stores it (this.page = page;).

- Locators are defined as properties of the class (e.g., this.heading, this.usernameInput).

- Methods are created for common actions on the page (e.g., `gotoHomePage()`, `clickLoginButton()`, `verifySuccessMessage()`). These methods use the locators defined in the class.