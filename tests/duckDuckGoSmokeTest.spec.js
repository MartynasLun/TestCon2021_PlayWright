const { test, expect } = require('@playwright/test');

// test('Check that page and logo loads', async ({ page }) => {
//   await page.goto('https://duckduckgo.com/'); 
//   const title = page.locator('#logo_homepage_link');
//   await expect(title).toBeVisible();
// });

test.describe('Duck Workshop', () => {
  test.beforeEach(async ({ page }) => {    
    await page.goto('https://duckduckgo.com/');
  });
  test('T1 Check that page and logo loads', async ({ page }) => {
    const title = page.locator('#logo_homepage_link');
   await expect(title).toBeVisible();    
  });
  test('T2 Check that search results contain expected text', async ({ page }) => {   
  await page.click('[placeholder="Search the web without being tracked"]');  
  await page.fill('[placeholder="Search the web without being tracked"]', 'test');  
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://duckduckgo.com/?q=test&t=hy&va=g&ia=web' }*/),
    page.click('input:has-text("S")')    
  ]);
  const searchResult = await page.textContent("#r1-0")  
  expect(searchResult).toContain('Test');   
  });
});