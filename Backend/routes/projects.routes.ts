import express, { Router } from "express";
import {
  createProject,
  deleteProject,
  getProject,
  getProjects,
  updateProject,
} from "../controllers/projects.controller";
import upload from "../middlewares/multer.middleware";

const router: Router = express.Router();

router.route("/").post(upload.array("images"), createProject);

router.route("/:id").put(upload.array("images"), updateProject);

router.route("/").get(getProjects);

router.route("/:id").get(getProject);

router.route("/:id").delete(deleteProject);

export default router;
