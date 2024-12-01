import { NextFunction, Response } from "express";
import { createSkillSchema, updateSkillSchema } from "../schemas/skill.schema";
import AuthorizationRequestTypes from "../types/middlewares.types";
import { handleValidationError } from "../utils/handleMiddleware.util";
import Skill from "../models/skill.model";
import CustomError from "../utils/customError.util";

const createSkillValidation = (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  const { file, body } = req;
  const { error } = createSkillSchema.validate({
    ...body,
    logo: file ? file.filename : "",
  });
  handleValidationError(res, next, error);
};

const updateSkillValidation = (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  const { file, body } = req;
  const { error } = updateSkillSchema.validate({
    ...body,
    logo: file ? file.filename : "",
  });
  handleValidationError(res, next, error);
};

const isSkillExist = (create?: boolean) => {
  return async (
    req: AuthorizationRequestTypes,
    res: Response,
    next: NextFunction
  ) => {
    try {
      if (req.body) {
        const { name } = req.body;
        const { id } = req.params;
        const query = create
          ? { $or: [{ name: name }] }
          : { $and: [{ name: name }, { _id: { $ne: id } }] };
        const skill = await Skill.findOne(query);
        if (skill) {
          return res.status(400).json({
            message: "Skill name is duplicated",
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

export { createSkillValidation, updateSkillValidation, isSkillExist };
