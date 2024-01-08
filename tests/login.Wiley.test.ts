
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
