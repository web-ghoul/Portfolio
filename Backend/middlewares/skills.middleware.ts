import { NextFunction, Response } from "express";
import skillSchema from "../schemas/skill.schema";
import AuthorizationRequestTypes from "../types/middlewares.types";

const validation = (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  const { file, body } = req;
  const { error } = skillSchema.validate({
    ...body,
    logo: file ? file.filename : "logo.png",
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
