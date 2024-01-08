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