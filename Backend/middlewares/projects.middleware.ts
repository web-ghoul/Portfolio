import { NextFunction, Response } from "express";
import {
  createProjectSchema,
  updateProjectSchema,
} from "../schemas/project.schema";
import AuthorizationRequestTypes from "../types/middlewares.types";
import { handleValidationError } from "../utils/handleMiddleware.util";
import Project from "../models/project.model";
import CustomError from "../utils/customError.util";

const createProjectValidation = (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  const { files, body } = req;
  const { error } = createProjectSchema.validate({
    ...body,
    images: files.map((file: { filename: string }) => file.filename),
  });
  handleValidationError(res, next, error);
};

const updateProjectValidation = (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  const { files, body } = req;
  const { error } = updateProjectSchema.validate({
    ...body,
    images: files.map((file: { filename: string }) => file.filename),
  });
  handleValidationError(res, next, error);
};

const isProjectExist = (create?: boolean) => {
  return async (
    req: AuthorizationRequestTypes,
    res: Response,
    next: NextFunction
  ) => {
    try {
      if (req.body) {
        const { name, url, github } = req.body;
        const { id } = req.params;
        const query = create
          ? { $or: [{ name }, { url }, { github }] }
          : {
              $and: [
                { $or: [{ name }, { url }, { github }] },
                { _id: { $ne: id } },
              ],
            };
        const project = await Project.findOne(query);
        if (project) {
          return res.status(400).json({
            message: "Project name , url or github is duplicated",
          });
        }
        return next();
      }
      res.status(500).json({
        message: "No Data Sent",
      });
    } catch (error: any) {
      const err = new CustomError(error.message, 500);
      return next(err);
    }
  };
};

export { createProjectValidation, updateProjectValidation, isProjectExist };
