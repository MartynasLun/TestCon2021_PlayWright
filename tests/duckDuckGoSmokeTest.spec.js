const { test, expect } = require('@playwright/test');

test('Check that page and logo loads', async ({ page }) => {
  await page.goto('https://duckduckgo.com/');
 // await page.pause()  //will stop the test when reaches that line
  const title = page.locator('#logo_homepage_link');
  await expect(title).toBeVisible();
});