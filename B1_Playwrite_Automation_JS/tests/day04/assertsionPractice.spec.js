import { expect, test } from '@playwright/test';

const base_url = "https://the-internet.herokuapp.com"; 


test('page - URL and title', async ({ page }) => {
    //await page.goto(`${base_url}/login`);
    await page.goto(`${process.env.BASE_URL}/login`); 
    await page.waitForTimeout(5000); 

    await expect(page).toHaveTitle("The Internet"); 
    // EXPECTED:    - "The Internet"
    // ACTUA:       -  await expect(page).toHaveTitle();


    // think that you have clicked an element and it took you to new URL, now validate URL
    await expect(page).toHaveURL(`${base_url}/login`); 
});







// * Explanation of BASE portion of URL
// https://the-internet.herokuapp.com    /checkboxes
// https://the-internet.herokuapp.com    /abtest
// https://the-internet.herokuapp.com    /login