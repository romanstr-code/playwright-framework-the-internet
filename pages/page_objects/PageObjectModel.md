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