import express from "express";
import { login } from "../controllers/login-controller.js";
import miscRouter from "./misc-router.js";
import userRouter from "./user-router.js";

const router = express.Router();

router.post("/login", login);

router.use(miscRouter);
router.use("/users", userRouter);

export default router;
