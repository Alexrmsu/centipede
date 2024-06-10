import { Request, Response} from 'express';
import util from 'util';
import fs from 'fs';
import { sendSuccessResponse, sendErrorResponse } from '../libs/responses';
const mysqlConnection = require('../database/connection'); // javascript-typescript ahhh moment



const fsExists = util.promisify(fs.exists);
const fsWriteFile = util.promisify(fs.writeFile);
const queryAsync = util.promisify(mysqlConnection.query).bind(mysqlConnection);

export async function getScrapers(req: Request, res: Response): Promise<void> {
  const query = 'SELECT * FROM scraper';
  try {
    const rows = await queryAsync(query);
    sendSuccessResponse(res, rows, 'Scrapers retrieved successfully', 200);
  } catch (err) {
    console.error('Database error:', err); // log for the moment
    sendErrorResponse(res, err, 'Database error');
  }
}


export async function createScraper(req: Request, res: Response) {
  try {
    const { path: filePath, tech, source } = req.body;
    const pathFile: string = filePath.match('puppeteer') ? filePath + '.ts' : filePath + '.py';

    if (await fsExists(pathFile)) {
      return res.status(200).json({
        message: 'File already exists',
        data: pathFile
      });
    }

    await fsWriteFile(pathFile, source);

    const query = 'INSERT INTO scraper (path, tech, source) VALUES (?, ?, ?)';
    mysqlConnection.query(query, [filePath, tech, source], (err: Error, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Database error', error: err.message });
      }

      return res.status(200).json({
        message: 'Scraper successfully created',
        data: results
      });
    });
  } catch (err) {
    console.error('Error creating scraper:', err);
    return res.status(500).json({ message: 'Internal server error', error: err.message });
  }
}

export async function testCreateFile(req: Request, res: Response) {
    const {path,source ,tech  } = {path: 'src/scrapers/puppeteer/pcfactory', source: 'test', tech: ['test']}
    const pathFile : string = path.match("puppeteer") ? path + '.ts' : path + '.py';
    if (fs.existsSync(pathFile)) {
        return res.json({
            message: 'File already exists',
            status: 200,
            data: pathFile
        });
    }
    else {
        fs.writeFile(pathFile, source, function (err: any) {
            if (err) throw err;
            if (!err) return console.log('File is created successfully.');
        });
        return res.json({
            message: 'File successfully created',
            status: 200,
            data: pathFile
        });
    }
}

