import puppeteer from 'puppeteer';
import bodyParser from 'body-parser';

const baseUrl = 'https://cartercountysheriff.us/inmates2.html';
const sourceName = "Carter County Sheriff's Office";

const getInmates = async () => {
    let inmates = [];

    const browser = await puppeteer.launch({
        headless: true,
        defaultViewport: null,
    });

    const page = await browser.newPage();

    await page.goto(baseUrl, {
        waitUntil: "domcontentloaded",
    });

    let inmateName = await page.$x('//tr[@class="RowStyle"]//td[2]/span/text()');




    // all inmateNames
    console.log(inmateName);
    await browser.close();
};
getInmates();