import * as pupeteer from 'puppeteer';
import * as fs from 'fs';

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
    fs.writeFile('links.txt', Object.values(links).join('\n'), (err) => {
        if (err) throw err;
        console.log('Links saved!');
    });

    await browser.close();
    return links;
}


getLinks(url).then(links => console.log(links));
