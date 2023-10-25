import {Request, Response} from 'express';
import Scraper from "../models/scraper";

export async function getScraper(req: Request, res: Response) {
    const scraper = await Scraper.find();
    return res.json(scraper);
}