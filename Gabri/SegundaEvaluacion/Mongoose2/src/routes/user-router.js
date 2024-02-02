import { Router } from "express";
import {
  getUsersController,
  createUserController,
} from "../controllers/users-controllers";

const router = Router();
router.get("/", getUsersController);
router.get("/", createUserController);

export default router;
