import puppeteer from 'puppeteer';
import fs from 'fs';
import {Document} from "mongoose";
import {Request, Response} from "express";


async function getHTML(url: string) : Promise<string> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const html = await page.content();
    await browser.close();
    return html;
}


