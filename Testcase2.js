const { test, expect } = require('@playwright/test');

test('Check that search results contain expected text', async ({ page }) => {
  await page.goto('https://duckduckgo.com/');
  await page.fill('#search_form_input_homepage',"Test");




});

