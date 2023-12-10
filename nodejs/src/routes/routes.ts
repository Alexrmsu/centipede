import {Router} from "express";
import {
    createScraper,
    getScraper,
    getScraperById,
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

router.route('/findAll')
    .get(getScraper)

router.route('/execute/:id')
    .get(getScraperById)

router.route('/execute')

router.route('/create')
    .post(createScraper)

router.route('/test')
    .get(testExecuteScrapyScraper)

export default router;