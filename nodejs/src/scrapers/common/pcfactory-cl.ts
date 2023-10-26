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

    await browser.close();
    return links;
}


async function getProducts (url:string) {

    const browser = await pupeteer.launch();
    const page = await browser.newPage();
    await page.goto(url+'/componentes');

    const products = await page.evaluate(() => {
        const products = document.querySelectorAll('.product');
        const productsArray = Array.from(products);
        return productsArray.map(product => product.textContent);
    })

    await browser.close();


    fs.writeFile('products.json', products.toString(), 'utf8', () => console.log('File created'));

    return products;



}


getLinks(url).then(links => console.log(links));
getProducts(url).then(products => console.log(products));
