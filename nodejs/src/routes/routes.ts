import {Router} from "express";
import {createScraper, getScraper, getScraperById, testCreateFile} from "../controllers/scraper";
const router: Router = Router();

router.route('/findAll')
    .get(getScraper)

router.route('/execute/:id')
    .get(getScraperById)

router.route('/execute')

router.route('/create')
    .post(createScraper)

router.route('/test')
    .get(testCreateFile)

export default router;