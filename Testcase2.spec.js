test('Check that Cheat sheet for MSWord is displayed', async ({ page }) => {



test('Check that Cheat sheet for MSWord is displayed', async ({ page }) => {

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
  
  await page.fill('#search_form_input_homepage',"shorten www.wikipedia.com");
  await page.click('#search_button_homepage');
  const shortUrl = await page.inputValue("#shorten-url");
  await page.goto(shortUrl);
  //await page.waitForNavigation();
  const newPageUrl = await page.url();

  expect(newPageUrl).toBe("https://www.wikipedia.org/");

}, 60);


test('T5: Check that intitle functionality works', async ({ page }) => {
  
  await page.fill('#search_form_input_homepage',"intitle:panda");
  await page.click('#search_button_homepage');
  await page.waitForNavigation();
  //h2.result__title.js-result-title')
  const results = await page.evaluate(() => Array.from(document.querySelectorAll('h2.result__title.js-result-title'), element => element.textContent));
      results.forEach(result => {
            expect(result.toLowerCase()).toContain('panda');
        });
 });

/*
test('T6: Check that automatic navigation to first result works', async ({ page }) => {
 
  await page.fill('#search_form_input_homepage',"intitle:panda");
  await page.click('#search_button_homepage');
  const 
  expect ().toBe();


}, 60); */


const passwordsLengths = ['8', '16', '64'];

passwordsLengths.forEach(passwordLength => {
test.only(`T7: Check that generated passwords for length ${passwordLength} are of correct length`, async ({ page }) => {
 
  await page.fill('#search_form_input_homepage', ("password " + passwordLength));
  await page.click('#search_button_homepage');
  const generatedPassword1 = await page.textContent("h3.c-base__title");
  expect (generatedPassword1.length).toEqual(+passwordLength);

});

 });

const passwordsLengthsNegative = ['7', '65'];

passwordsLengthsNegative.forEach(passwordLengthNegative => {
test.only(`T8: Check that passwords are not generated for length ${passwordLengthNegative}`, async ({ page }) => {
 
  await page.fill('#search_form_input_homepage', ("password " + passwordLengthNegative));
  await page.click('#search_button_homepage');
  const generatedPassword2 = await page.textContent("h3.c-base__title");
  expect (generatedPassword2.length).toEqual(+passwordLengthNegative);

});

  });





});


/*
test('T9: Check that QR code is correctly generated', async ({ page }) => {
  await page.goto('https://duckduckgo.com/');
  await page.fill('#search_form_input_homepage',"intitle:panda");
  await page.click('#search_button_homepage');
  const ;
  expect ().toBe();


}, 60);

test('T10: Check that menu language can be changed', async ({ page }) => {
  await page.goto('https://duckduckgo.com/');
  await page.fill('#search_form_input_homepage',"intitle:panda");
  await page.click('#search_button_homepage');
  const ;
  expect ().toBe();


}, 60);

test('T11: Waiting for valid API responses for - hyphenation, pronunciation, audio', async ({ page }) => {
  await page.goto('https://duckduckgo.com/');
  await page.fill('#search_form_input_homepage',"intitle:panda");
  await page.click('#search_button_homepage');
  const ;
  expect ().toBe();


}, 60);

test('T12: Check that calculator does math correctly', async ({ page }) => {
  await page.goto('https://duckduckgo.com/');
  await page.fill('#search_form_input_homepage',"intitle:panda");
  await page.click('#search_button_homepage');
  const ;
  expect ().toBe();


}, 60);

*/