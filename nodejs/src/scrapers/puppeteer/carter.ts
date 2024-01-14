import {getHTML} from "./libs/common";
import puppeteer from 'puppeteer';

const baseUrl = 'https://cartercountysheriff.us/inmates2.html';
const sourceName = "Carter County Sheriff's Office";

const scrapeInmate = async (url: string) => {
    const html = await getHTML(url);
    return html;
};


