# Intermediate Playwright Features and Test Organization

## Navigation_BackForwardReload

- Test Case ID: TC_Navigation_BackForwardReload

- Description: Test back, forward, and reload navigation.

**Steps:**

1. Navigate to "https://the-internet.herokuapp.com/".

2. Click the "A/B Testing" link.

3. Wait for the A/B Testing page to load.

4. Go back in history.

5. Verify that you are back on the homepage.

6. Go forward in history.

7. Verify that you are back on the A/B Testing page.

8. Reload the page.

9. Verify that you are still on the A/B Testing page (URL remains the same).

**Expected Result:** Navigation back, forward, and reload should work as expected, taking you to the correct pages and maintaining state.

## FormElements_CheckboxesRadioDropdown

**Test Case ID:** TC_FormElements_CheckboxesRadioDropdown

**Description:** Test interactions with checkboxes, radio buttons, and dropdowns.

***Steps:***

1. Navigate to "https://the-internet.herokuapp.com/dropdown".

2. Select "Option 1" from the dropdown.

3. Verify that "Option 1" is selected.

4. Select "Option 2" from the dropdown.

5. Verify that "Option 2" is selected.

6. Navigate to "https://the-internet.herokuapp.com/checkboxes".

7. Check checkbox 1.

8. Verify checkbox 1 is checked.

9. Uncheck checkbox 1.

10. Verify checkbox 1 is unchecked.

- 11. (If "The Internet" had radio buttons, we'd test them similarly).

**Expected Result:** Dropdown selections and checkbox interactions should work correctly, and assertions should reflect the selected/checked states.

## LoginForm_PositiveLogin

**Test Case ID:** TC_LoginForm_PositiveLogin

**Description:** Test successful login with valid credentials.

***Steps:***

1. Navigate to "https://the-internet.herokuapp.com/login".

2. Enter username "tomsmith".

3. Enter password "SuperSecretPassword!".

4. Click the "Login" button.

5. Wait for navigation to the secure area page.

6. Verify that the success message "You logged into a secure area!" is displayed.

7. Verify that the "Logout" button is visible.

8. Expected Result: User should be logged in successfully, success message and logout button should be visible.

## LoginForm_NegativeLogin_InvalidPassword

**Test Case ID:** TC_LoginForm_NegativeLogin_InvalidPassword

**Description:** Test unsuccessful login with an invalid password.

***Steps:***

1. Navigate to "https://the-internet.herokuapp.com/login".

2. Enter username "tomsmith".

3. Enter password "wrongpassword".

4. Click the "Login" button.

5. Verify that the failure message "Your username is invalid!" is displayed.

6. Verify that the login form is still present (or you are not redirected to the secure area).

7. Expected Result: Login should fail, error message should be displayed.

## Alerts_JSAlert 

**Test Case ID:** TC_Alerts_JSAlert

**Description:** Test handling of a JavaScript Alert.

***Steps:***

1. Navigate to "https://the-internet.herokuapp.com/javascript_alerts".

2. Click the "Click for JS Alert" button.

3. Verify that an alert dialog appears with the text "I am a JS Alert".

4. Accept the alert.

5. Verify that the result text "You successfully clicked an alert" is displayed.

6. Expected Result: Alert should be handled, and success message should appear after accepting the alert

## Waiting_DynamicLoading

**Test Case ID:** TC_Waiting_DynamicLoading

**Description:** Test dynamic loading of content - wait for an element to appear after a delay.

***Steps:***

1. Navigate to "https://the-internet.herokuapp.com/dynamic_loading/1".

2. Click the "Start" button.

3. Wait for the "Hello World!" text to appear.

4. Verify that the "Hello World!" text is visible.

- Expected Result: Test should wait until "Hello World!" appears and then verify its presence.