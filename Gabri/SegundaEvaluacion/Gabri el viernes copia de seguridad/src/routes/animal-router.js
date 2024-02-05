import { Router } from "express";
import {
  createAnimal,
  updateAnimal,
  getAnimals,
  getAnimal,
  deleteAnimal,

} from "../controllers/animal-controller.js";

const router = Router();

router.get("/", getAnimals);
router.get("/:id", getAnimal);

router.post("/", createAnimal);
router.patch("/:id", updateAnimal);
router.delete("/:id", deleteAnimal);
export default router;
