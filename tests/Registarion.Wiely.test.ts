import { test, expect } from "@playwright/test";

test('Registration', async ({ page }) => {

  const goToURL = "https://onlinelibrary.wiley.com";
  await page.goto(goToURL);

  await page.waitForSelector('.sign-in-label');
  await page.click('.sign-in-label');

  await page.click('.linkBtn.float-left');

  const registrationUrl = 'https://onlinelibrary.wiley.com/action/registration?acdl-redirect=true';
  await page.waitForURL(registrationUrl);

  
  await page.waitForSelector('#login.email', { timeout: 10000 });
  await page.fill('#login.email', 'gevinduinduwara28@gmail.com');

  await page.waitForSelector('#login.password');
  await page.fill('#login.password', 'Rango@1234');

  await page.waitForSelector('#personal.givenNames');
  await page.fill('#personal.givenNames', 'Gevindu');

  await page.waitForSelector('#personal.surname');
  await page.fill('#personal.surname', 'Induwara');

  await page.waitForSelector('#taxonomy[0].values');
  await page.fill('#taxonomy[0].values', 'Sri Lanka');

  await page.waitForSelector('#taxonomy-1-values');
  await page.fill('#taxonomy-1-values', 'YourAreaOfInterest');

  await page.waitForSelector('label.checkbox--primary input[type="checkbox"]');
  await page.check('label.checkbox--primary input[type="checkbox"]');


  await page.waitForSelector('label.checkbox--primary input[type="checkbox"]');
  await page.check('label.checkbox--primary input[type="checkbox"]');

  await page.waitForSelector('#recaptcha-anchor'); 
  await page.click('#recaptcha-anchor');


  await page.waitForFunction(() => document.getElementById('recaptcha-anchor')?.getAttribute('aria-checked') === 'true');

  await page.waitForSelector('input[type="submit"][name="submitButton"]:not([disabled])');
  await page.click('input[type="submit"][name="submitButton"]');

  await page.waitForLoadState('load');

  const expectedUrl = 'https://onlinelibrary.wiley.com/dashboard';
  expect(page.url()).toBe(expectedUrl);

});



// A nodemodule call playwright was used to write this test case for browser automation.The purpose of the test case is to evaluate the "https://onlinelibrary.wiley.com/" website's registration feature

//Test Name:  Registration


// Test Steps
//  Test Step: 1. Navigate to https://onlinelibrary.wiley.com/
//  Test Step: 2. Click on the sign in button
//  Test Step: 3. Click on the new user button
//  Test Step: 4. Wait for the page to load
//  Test Step: 5. Enter the email address
//  Test Step: 6. Enter the password
//  Test Step: 7. Enter the first name
//  Test Step: 8. Enter the last name
//  Test Step: 9. Enter the country
//  Test Step: 10. Enter the area of interest
//  Test Step: 11. Check the terms and conditions checkbox
//  Test Step: 12. Check the marketing email checkbox
//  Test Step: 13. Click on the recaptcha checkbox
//  Test Step: 14. Wait for the recaptcha checkbox to be checked
//  Test Step: 15. Click on the submit button
//  Test Step: 16. Wait for the page to load
//  Test Step: 17. Verify that the URL is https://onlinelibrary.wiley.com/dashboard

//purpose

// The purpose of this test case is to evaluate the "https://onlinelibrary.wiley.com/" website's registration feature
// The test case verifies that the registration feature is working as expected by checking the URL after the registration is performed


