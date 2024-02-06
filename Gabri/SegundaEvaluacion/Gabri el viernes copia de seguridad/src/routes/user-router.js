import {Router} from 'express';
import { getUserController, createUserController } from '../controllers/users-controller.js';

const router = Router();

router.get('/', getUserController);
router.post('/', createUserController)

export default router;
