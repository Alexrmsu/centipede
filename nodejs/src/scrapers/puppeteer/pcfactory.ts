import puppeteer from 'puppeteer';
import fs from 'fs';
import {Document} from "mongoose";
import {Request, Response} from "express";
import {getHTML} from "./libs/common";

const url = 'https://www.pcfactory.cl';

getHTML(url).then(html => {
    console.log(html);
});
