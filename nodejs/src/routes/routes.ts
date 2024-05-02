import {Router} from "express";
import {
    createScraper,
    getScrapers
} from "../controllers/scraper";
const router: Router = Router();
import cors from 'cors';

router.use(cors(
    {
        allowedHeaders: ['Content-Type', 'Authorization'],
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        optionsSuccessStatus: 200
        }
));

router.route('/getScrapers')
    .get(getScrapers);

router.route('/create')
    .post(createScraper);

export default router;