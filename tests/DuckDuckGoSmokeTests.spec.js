const { test, expect } = require('@playwright/test');

test('Checxking that page and logo loads', async ({ page }) => {
  await page.goto('https://duckduckgo.com/');
  const title = page.locator('#logo_homepage_link');
  await expect(title).toBeVisible;
});

test('Check that search results contain expected text', async ({ page }) => {
  await page.goto('https://duckduckgo.com/');
  await page.fill('#search_form_input_homepage',"Test");
  await page.click('#search_button_homepage');
  const firstResultText = await page.textContext("#r1-0");
  
  expect(firstResultText).toContain("Test");


});