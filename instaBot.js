import puppeteer from 'puppeteer';
import dotenv from 'dotenv';
dotenv.config();



(async () => {

  function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

  console.log(process.env.PASSWORD)
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://instagram.com');

  // login input class = _aa4b _add6 _ac4d _ap35
  await page.waitForSelector('input[name="username"]');

  await page.type('input[name="username"]', 'marceloaraujophotography');
  console.log('waiting...')
  await delay(3000);
  console.log('moving on')
  await page.waitForSelector('input[name="password"]');

  await page.type('input[name="password"]', process.env.PASSWORD)

  await page.click('button[class=" _acan _acap _acas _aj1- _ap30"]', );

  // await browser.close();
})();
