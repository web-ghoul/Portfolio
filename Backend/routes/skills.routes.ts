import express, { Router } from "express";
import upload from "../middlewares/multer.middleware";
import { validation } from "../middlewares/skills.middleware";
import {
  getSkills,
  deleteSkill,
  createSkill,
  updateSkill,
} from "../controllers/skills.controller";

const router: Router = express.Router();

router.route("/").post(upload.single("logo"), validation, createSkill);

router.route("/:id").put(upload.single("logo"), validation, updateSkill);

router.route("/").get(getSkills);

router.route("/:id").delete(deleteSkill);

export default router;
