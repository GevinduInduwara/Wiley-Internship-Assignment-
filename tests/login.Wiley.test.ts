
import { test, expect } from "@playwright/test";

test('valid login', async ({ page }) => {

  const goToURL ="https://onlinelibrary.wiley.com";  
  await page.goto(goToURL);


  await page.waitForSelector('.sign-in-label');
  await page.click('.sign-in-label');


  await page.waitForSelector('#username');
  await page.fill('#username', "gevinduinduwara28@gmail.com");

  await page.waitForSelector('#password');
  await page.fill('#password', "Rango@1234");

  // await page.waitForSelector('input[type="submit"][name="submitButton"]:not([disabled])');

  // await page.click('input[type="submit"][name="submitButton"]');
  await page.click('.accessSubmit');
  await page.waitForLoadState('load');

  
  const expectedUrl = 'https://onlinelibrary.wiley.com/action/doLogin?societyURLCode=';
  expect(page.url()).toBe(expectedUrl);
});


// A nodemodule call playwright was used to write this test case for browser automation.The purpose of the test case is to evaluate the "https://onlinelibrary.wiley.com/" website's login feature

// Test Name: valid login

// Test Steps

// Test Step: 1. Navigate to https://onlinelibrary.wiley.com/
// Test Step: 2. Click on the sign in button
// Test Step: 3. Enter "gevinduinduwara28@gmail" in the username field
// Test Step: 4. Enter "Rango@1234" in the password field
// Test Step: 5. Click on the login button
// Test Step: 6. Wait for the page to load
// Test Step: 7. Verify that the URL is https://onlinelibrary.wiley.com/action/doLogin?societyURLCode=
// Test Step: 8. Verify that the user is logged in


// purpose
// The purpose of this test case is to evaluate the "https://onlinelibrary.wiley.com/" website's login feature
// The test case verifies that the login feature is working as expected by checking the URL after the login is performed
