import { NextFunction, Response } from "express";
import projectSchema from "../schemas/project.schema";
import AuthorizationRequestTypes from "../types/middlewares.types";

const validation = (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  const { files, body } = req;
  const { error } = projectSchema.validate({
    ...body,
    images: files.map((file: { filename: string }) => file.filename),
  });
  if (error) {
    return res.status(400).json({
      message: "Validation failed",
      details: error.details.map((err) => err.message),
    });
  } else {
    return next();
  }
};

export { validation };
