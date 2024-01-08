import { test, expect } from "@playwright/test";

test('Search field test', async ({ page }) => {

  const goToURL ="https://onlinelibrary.wiley.com/";

  const searchTerm = "A molecular mechanism for qE-quenching";

  await page.goto(goToURL);

  
    await page.fill('#searchField1',searchTerm);


    await page.click('.quick-search__button');

   
    await page.waitForLoadState('load');

    const expectedUrl = 'https://onlinelibrary.wiley.com/action/doSearch?AllField=A+molecular+mechanism+for+qE-quenching';
    expect(page.url()).toBe(expectedUrl);
}); 


// A nodemodule call playwright was used to write this test case for browser automation.The purpose of the test case is to evaluate the "https://onlinelibrary.wiley.com/" website's search feature

// Test Name: Search field test

// Test Steps
//  Test Step: 1. Navigate to https://onlinelibrary.wiley.com/
//  Test Step: 2. Enter "A molecular mechanism for qE-quenching" in the search field
//  Test Step: 3. Click on the search button
//  Test Step: 4. Wait for the page to load
//  Test Step: 5. Verify that the URL is https://onlinelibrary.wiley.com/action/doSearch?AllField=A+molecular+mechanism+for+qE-quenching


//purpose
// The purpose of this test case is to evaluate the "https://onlinelibrary.wiley.com/" website's search feature
// The test case verifies that the search feature is working as expected by checking the URL after the search is performed
