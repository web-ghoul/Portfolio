import express, { Router } from "express";
import upload from "../middlewares/multer.middleware";
import {
  createSkillValidation,
  isSkillExist,
  updateSkillValidation,
} from "../middlewares/skills.middleware";
import {
  getSkills,
  deleteSkill,
  createSkill,
  updateSkill,
} from "../controllers/skills.controller";

const router: Router = express.Router();

router
  .route("/")
  .post(
    upload.single("logo"),
    isSkillExist(true),
    createSkillValidation,
    createSkill
  );

router
  .route("/:id")
  .put(
    upload.single("logo"),
    isSkillExist(false),
    updateSkillValidation,
    updateSkill
  );

router.route("/").get(getSkills);

router.route("/:id").delete(deleteSkill);

export default router;
