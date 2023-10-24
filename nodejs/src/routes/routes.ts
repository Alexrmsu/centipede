import {Router} from "express";
import {getScrapers} from "../controllers/scraper";
import {}
const router: Router = Router();



router.route('/available').get(getScrapers)



export default router;