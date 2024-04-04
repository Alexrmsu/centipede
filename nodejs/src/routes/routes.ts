import {Router} from "express";
import {
    createScraper,
    testExecuteScrapyScraper
} from "../controllers/scraper";
const router: Router = Router();
const cors = require('cors');

router.use(cors(
    {
        allowedHeaders: ['Content-Type', 'Authorization'],
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        optionsSuccessStatus: 200
        }
));



export default router;