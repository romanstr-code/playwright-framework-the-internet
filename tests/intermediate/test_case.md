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
