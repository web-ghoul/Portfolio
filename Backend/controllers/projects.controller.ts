import { NextFunction, Response } from "express";
import Project from "../models/project.model";
import AuthorizationRequestTypes from "../types/middlewares.types";
import CustomError from "../utils/customError.util";
import { uploadImages } from "../utils/upload.util";

const createProject = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const { files, body } = req;
    if (files) {
      const result = await uploadImages(files);
      req.body.images = result;
    }
    const newProject = await Project.create(body);
    if (newProject) {
      return res.status(201).json({
        message: "Project is created successfully",
      });
    }
    return res.status(400).json({
      message: "Error Occurs",
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const updateProject = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const { files, body, params } = req;
    if (files) {
      const result = await uploadImages(files);
      if (result.length > 0) {
        req.body.images = result;
      }
    }
    const updatedProject = await Project.updateOne(
      { _id: params.id },
      { ...body }
    );
    if (updatedProject) {
      return res.status(201).json({
        message: "Project is updated successfully",
      });
    }
    return res.status(400).json({
      message: "Error Occurs",
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const getProjects = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const search = req.query.search as string;
    const page = req.query.page as string;
    let queries = {};
    if (search) {
      queries = {
        name: {
          $regex: new RegExp(
            search.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"),
            "i"
          ),
        },
      };
    }
    const skipped = (+page - 1) * +(process.env.LIMIT || 10) || 0;
    const projects = await Project.find()
      .sort({ createdAt: -1 })
      .limit(+(process.env.LIMIT || 10))
      .skip(skipped);
    return res.status(200).json({
      data: projects,
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const getProject = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const project = await Project.findOne({ _id: id });
    return res.status(200).json({
      data: project,
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const deleteProject = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const deletedProject = await Project.deleteOne({ _id: id });
    if (deletedProject) {
      return res.status(200).json({
        message: "Project is deleted successfully",
      });
    }
    return res.status(400).json({
      message: "Error Occurs",
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

export { createProject, updateProject, getProject, getProjects, deleteProject };
