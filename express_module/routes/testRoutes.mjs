import { Router } from 'express';
import TestController from '../controllers/testController.mjs'

const router = Router();

router.get('/', TestController.index);
router.get('/all', TestController.all);

export default router;