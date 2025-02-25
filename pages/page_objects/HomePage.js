// page-objects/HomePage.js

const { expect } = require('@playwright/test'); // Import the expect function from Playwright.


// The HomePage class contains all the elements and methods of the Home page.

class HomePage {  
    // The constructor function is called when a new instance of the class is created.
    constructor(page) { 
        // The page object is passed to the constructor function and stored in the this.page variable.
        this.page = page; 
        // Locators for elements on the Home page.
        this.heading = page.locator('h1.heading'); // The heading element on the Home page.
        this.abTestingLink = page.locator('a', { hasText: 'A/B Testing' }); // The A/B Testing link on the Home page.  
        this.loginLink = page.locator('a', { hasText: 'Form Authentication' }); // Link to Login page.
        
        // ... add more locators for other elements on the Home page as needed.
        // Example:
        // this.dropdownLink = page.locator('a', { hasText: 'Dropdown' }); // Link to Dropdown page.
        // this.hoversLink = page.locator('a', { hasText: 'Hovers' }); // Link to Hovers page.
        // this.keyPressesLink = page.locator('a', { hasText: 'Key Presses' }); // Link to Key Presses page.
    };

    async gotToHomePage() { // This method navigates to the Home page and is called before each test.
        await this.page.goto('https://the-internet.herokuapp.com/'); // Navigates to the Home page.
    };

    async clickLoginLink() {
        await this.loginLink.click(); // Clicks the Login link. 
    };

    async verifyHomePageHeading() { // This method verifies that the Home page is displayed.   
        await expect(this.heading).toBeVisible(); // Verifies that the heading is visible.
        await expect(this.heading).toHaveText('Welcome to the-internet'); // Verifies that the heading text is correct. 
    };

    // .. we can add more methods to interact with other elements on the Home page as needed.
    // Example:
    // async clickDropdownLink() {
    //     await expect(this.heading).toBeClickable(); // Verifies that the heading is clickable.
    //     await expect(this.heading).toHaveText('Dropdown List'); // Verifies that the heading text is correct.   
    //     await this.dropdownLink.click(); // Clicks the Dropdown link.         
    //};
};

module.exports = HomePage; // Exports the HomePage class so that it can be used in other files.