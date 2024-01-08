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

