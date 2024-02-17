import puppeteer from 'puppeteer';

const url = "https://it.co.lancaster.pa.us/SPS/Public";
const resourceName = "Lancaster Secure Search";

const lastName = "John"
const firstName = "Doe"

const searchInmates = async () => {
    console.time('Puppeteer Lancaster');
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    });

    const page = await browser.newPage();

    await page.goto(url, {
        waitUntil: "domcontentloaded",
    });

    await page.waitForSelector('input[name="LastName"]');
    await page.type('input[name="LastName"]', lastName);
    await page.type('input[name="FirstName"]', firstName);
    await page.click('input[type="submit"]');

    await page.waitForNavigation({
        waitUntil: "domcontentloaded",
    });



    if (noResults.length > 0) {
        console.log('No results found');
        await browser.close();
        return;
    }


    const html = await page.content();
    console.log(html);

    console.log('COMPLETED');
    await browser.close();
    console.timeEnd('Puppeteer Lancaster');

};

searchInmates();