import puppeteer from 'puppeteer';

const baseUrl = 'https://cartercountysheriff.us/inmates2.html';
const sourceName = "CarterCountyTest";

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
    for (let i = 0; i < inmateName.length; i++) {
        let name  = await (await inmateName[i].getProperty('textContent')).jsonValue();
        inmates.push({ name, sourceName });
    }
    inmates = inmates.map((inmate) => {
        // @ts-ignore
        inmate.name = inmate.name.trim();
        return inmate;
    })


    console.log(inmates);
    await browser.close();
};
getInmates();