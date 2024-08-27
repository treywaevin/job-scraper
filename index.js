const puppeteer = require('puppeteer');

const main = async () => {
  console.log("Starting Puppeteer");
  browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  // Open Up GlassDoor
  await page.goto('https://www.glassdoor.com');
};

main();