import * as pupeteer from 'puppeteer';
import * as fs from 'fs';
import {AnyArray} from "mongoose";

const url : string = 'https://www.pcfactory.cl';


async function getLinks (url: string) {
    const browser = await pupeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const links = await page.evaluate(() => {
        const links = document.querySelectorAll('a');
        const linksArray = Array.from(links);
        return linksArray.map(link => link.href);
    });
    fs.writeFile('links.json', JSON.stringify(links), (err) => {
        if (err) throw err;
        console.log('Links saved!');
    });

    await browser.close();
    return links;
}

async function getSmartphones (url: string) {
    getLinks(url).then(links => console.log(links));
    const readLinks = fs.readFileSync('links.json', 'utf8');
    // link only a one smartphone link related
    const links = JSON.parse(readLinks).filter((link: string) => link.includes('smartphone'));
    console.log(links)


    const browser = await pupeteer.launch();
    const page = await browser.newPage();

    for (let i = 0; i < links.length; i++) {
        await page.goto(links[i]);
        const smartphones = await page.evaluate(() => {
            const smartphones = document.querySelectorAll('a');
            const smartphonesArray = Array.from(smartphones);
            return smartphonesArray.map(smartphone => smartphone.href);
        });
        fs.writeFile('smartphones.json', JSON.stringify(smartphones), (err) => {
            if (err) throw err;
            console.log('Smartphones saved!');
        });
    }
}

getSmartphones(url).then(smartphones => console.log(smartphones));


