const { test, expect } = require('@playwright/test');
const HomePage = require('../../../pages/HomePage'); // Import HomePage class

test('Homepage title and heading are correct using POM', async ({ page }) => {
  const homePage = new HomePage(page); // Create an instance of HomePage

  await homePage.gotoHomePage(); // Use the Page Object method to navigate
  await homePage.verifyHomePageHeading(); // Use Page Object method to verify heading
  const title = await page.title(); // Still access page directly for title (can add to HomePage if needed)
  expect(title).toBe('The Internet');
});

test('Navigate to A/B Testing page from Homepage using POM', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.gotoHomePage();
    await homePage.clickAbTestingLink(); // Corrected capitalization: Ab → Ab
    await page.waitForURL('**/abtest');
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/abtest');
  });

test('Navigate to Login page from Homepage using POM', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.gotoHomePage();
  await homePage.clickLoginLink(); // Use Page Object method to click the login link
  await page.waitForURL('**/login');
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');
});