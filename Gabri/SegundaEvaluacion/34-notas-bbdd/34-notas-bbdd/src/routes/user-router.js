import { Router } from 'express';
import { getUsersController, createUserController, getUserMe } from '../controllers/users-controller.js';
import { checkToken } from '../middlewares/auth-middleware.js';

const router = Router();


router.get('/me', checkToken, getUserMe);
router.get('/',checkToken, getUsersController);
router.post('/', createUserController);

export default router;
