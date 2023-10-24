import {Router} from "express";
import {getScrapers} from "../controllers/scraper";
const router: Router = Router();


router.get('/', getScrapers)



export default router;