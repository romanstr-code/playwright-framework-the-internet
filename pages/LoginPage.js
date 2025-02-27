// page-objects/LoginPage.js

const { expect } = require('@playwright/test');

// Define the LoginPage class
class LoginPage {
    // Define the constructor
    constructor(page){
        // Define the page object
        this.page = page;
        // Locators for Login Page Elements
        this.usernameInput = page.locator('#username');
        // Define the password input locator
        this.passwordInput = page.locator('#password');
        // Define the login button locator
        this.loginButton = page.locator('button[type="submit"]'); 
        // Define the error message locator
        this.errorMessage = page.locator('#flash-messages .error');
        // Logout button define locator
        this.logoutButton = page.locator('.button.secondary');
    };

    // Define the login method
    async gotoLoginPage(){
        await this.page.goto('https://the-internet.herokuapp.com/login');
    };

    // Define username input method
    async enterUsername(username){
        await this.usernameInput.fill(username);
    };

    // Define password input method
    async enterPassword(password){
        await this.passwordInput.fill(password);
    };

    // Define login button method
    async clickLoginButton(){
        await this.loginButton.click();
    };

    // Define login method
    async login(username, password){
        // combined login methods
        await this.enterUsername(username); // enter username
        await this.enterPassword(password); // enter password
        await this.clickLoginButton(); // click login button
    };

    // Verify success message
    async verifySuccessMessage(){
        await expect(this.successMessage).toBeVisible();
        // Verify the success message text
        await expect(this.successMessage).toContainText('You logged into a secure area!');
    };

    // Verify error message
    async verifyErrorMessage(){
        await expect(this.errorMessage).toBeVisible();
        // Verify the error message text
        await expect(this.errorMessage).toContainText('Your username is invalid!');
    };

    // Define logout method
    async clickLogoutButtonVisible(){
        await expect(this.logoutButton).toBeVisible();
        await expect(this.logoutButton).toHaveText('Logout');
    };

    // Logout button not visible
    async clickLogoutButtonNotVisible() {
        await expect(this.logoutButton).not.toBeVisible();
    };
};

// Export the LoginPage class
export default LoginPage; 