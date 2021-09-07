const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://duckduckgo.com/');
  const logoIsVisible = await page.isVisible('#logo_homepage_link');
  expect(logoIsVisible).toBe(true);
});
