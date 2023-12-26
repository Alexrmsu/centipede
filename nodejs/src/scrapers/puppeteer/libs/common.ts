import puppeteer from 'puppeteer';
import fs from 'fs';
import {Document} from "mongoose";
import {Request, Response} from "express";

export async function getHTML(url: string) : Promise<string> {
    console.time('getting html document... from ' + url);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const html = await page.content();
    await browser.close();
    console.timeEnd('End' + url);
    return html;
}

