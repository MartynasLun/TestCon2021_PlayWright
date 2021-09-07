const { test, expect } = require('@playwright/test');

test('Check that Cheat sheet for MSWord is displayed', async ({ page }) => {
  await page.goto('https://duckduckgo.com/');
  await page.fill('#search_form_input_homepage',"Microsoft word cheat sheet");
  await page.click('#search_button_homepage');
  await page.waitForNavigation();
  //expect(await page.isVisible("span.chomp--link__mr")).toBe(true);
  await page.click("span.chomp--link__mr");
  expect(await page.isVisible('h6.cheatsheet__title:has-text("Formatting")'));
  /*const firstResultText = await page.textContent("#r1-0");

  expect(firstResultText).toContain("Test");*/


});

test('T4: Check that URL shortening feature works', async ({ page }) => {
  await page.goto('https://duckduckgo.com/');
  await page.fill('#search_form_input_homepage',"shorten www.wikipedia.com");
  await page.click('#search_button_homepage');
  const shortUrl = await page.inputValue("#shorten-url");
  await page.goto(shortUrl);
  //await page.waitForNavigation();
  const newPageUrl = await page.url();

  expect(newPageUrl).toBe("https://www.wikipedia.org/");

}, 60);