/*
Practice #1 - Add Tags to Tests

Create a file with 4 Playwright tests.

Test 1 - “Google Search” - Tag: @smoke - Navigate to
https://www.google.com - Search for “Playwright Automation”

Test 2 - “Playwright Website” - Tag: @regression - Navigate to
https://playwright.dev - Click “Get started”

Test 3 - “SauceDemo Login” - Tag: @smoke - Navigate to
https://www.saucedemo.com - Login with standard_user / secret_sauce

Test 4 - “Hover Practice” - Tag: @regression - Navigate to
https://the-internet.herokuapp.com/hovers - Hover over one user image.

After creating the tests: 1. Run ALL tests. 2. Run ONLY @smoke tests. 3.
Run ONLY @regression tests. 4. Write the commands you used as comments.
 */

const { test, expect } = require('@playwright/test');
test('Google Search', { tag: ['@smoke'] }, async ({ page }) => {

    await page.goto("https://www.google.com");
    await page.locator("//textarea[@aria-label='Search']").fill("Playwright Automation");
    await page.keyboard.press("Enter");
});