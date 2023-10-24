import {Router} from "express";
import {getScraper} from "../controllers/scraper";
const router: Router = Router();



router.route('/available')
    .get(getScraper)



export default router;