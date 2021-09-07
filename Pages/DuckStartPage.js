const { test, expect } = require('@playwright/test');
const { DuckStartPage } = require('../pages/duckStartPage')

test.describe('Duck duck smoke test suite', () => {

  let page;
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
      startPage = new DuckStartPage(page);

  });


test.beforeEach(async () => {
  await startPage.goto();
});


test('Checking that page and logo loads', async () => {
  const isLogoVisible = await page.isVisible("#logo_homepage_link")
  expect(isLogoVisible).toBe(true);
});

test.only('Check that search results contain expected text', async () => {
  startPage.initiateSearch("Test");
  const firstResultText = await page.textContent("#r1-0");
  
  expect(firstResultText).toContain("Test"); 
});

test('T3 Check that Cheat sheet for MSWord is displayed', async () => {

  await page.fill('#search_form_input_homepage', "Microsoft word cheat sheet");
  await page.click('#search_button_homepage');
  await page.waitForNavigation();
  await page.click("span.chomp--link__mr");

  expect(await page.isVisible('h6.cheatsheet__title:has-text("Formatting")')).toBe(true);
});
test('T4 Check that URL shortening feature works', async () => {
  await page.fill('#search_form_input_homepage', "shorten www.wikipedia.com");
  await page.click('#search_button_homepage');
  const shortUrl = await page.inputValue("#shorten-url");
  await page.goto(shortUrl);
  //await page.waitForNavigation("networkidle");
  const newPageUrl = await page.url();
  expect(newPageUrl).toBe("https://www.wikipedia.org/")
}, 60);

test('T5 Check that intitle functionality works', async () => {

  await page.fill('#search_form_input_homepage', "intitle:panda");
  await page.click('#search_button_homepage');
  await page.waitForNavigation();
  const results = await page.evaluate(() => Array.from(document.querySelectorAll("h2.result__title.js-result-title"), element => element.textContent));
  results.forEach(result => {
            expect(result.toLowerCase()).toContain("panda");
        }); 
});

const passwordsLengthsPositive = ['8', '16', '64']; 

passwordsLengthsPositive.forEach(passwordLength => { 
test(`T7 Check that generated passwords for length ${passwordLength}  are of correct length`, async () => {
  await page.fill('#search_form_input_homepage', ("password " + passwordLength)); 
  await page.click('#search_button_homepage');
  const generatedPassword = await page.textContent("h3.c-base__title");
  expect(generatedPassword.length).toEqual(+passwordLength);
});
  });
  const passwordsLengthsNegative = ['8', '16', '64'];
  });