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
    let inmateSex = await page.$x('//tr[@class="RowStyle"]//td[3]/span/text()');
    let inmateRace = await page.$x('//tr[@class="RowStyle"]//td[4]/span/text()');
    let inmateDob = await page.$x('//tr[@class="RowStyle"]//td[5]/span/text()');
    let inmateAddress = await page.$x('//tr[@class="RowStyle"]//td[6]/span/text()');
    let inmateBookedDate = await page.$x('//tr[@class="RowStyle"]//td[7]/span/text()');
    let inmateReleaseDate = await page.$x('//tr[@class="RowStyle"]//td[8]/span/text()');
    let inmateCharges = await page.$x('//tr[@class="RowStyle"]/td[9]/table/tbody/text()');

    inmateAddress = inmateAddress.length === inmateName.length ? inmateAddress : new Array(inmateName.length).fill('');

    for (let i = 0; i < inmateName.length; i++) {
        const name : string  = await (await inmateName[i].getProperty('textContent')).jsonValue();
        const sex : string  = await (await inmateSex[i].getProperty('textContent')).jsonValue();
        const race : string = await (await inmateRace[i].getProperty('textContent')).jsonValue();
        const dob : string = await (await inmateDob[i].getProperty('textContent')).jsonValue();
        const bookedDate : string = await (await inmateBookedDate[i].getProperty('textContent')).jsonValue();
        inmates.push({sourceName, name, sex , race, dob, bookedDate });
    }
    inmates = inmates.map((inmate) => {
        inmate.name = inmate.name.trim();
        inmate.sex = inmate.sex.trim();
        inmate.race = inmate.race.trim();
        return inmate;
    });




    console.log('COMPLETED');
    await browser.close();
};
getInmates();