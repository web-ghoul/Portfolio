import { NextFunction, Response } from "express";
import AuthorizationRequestTypes from "../types/middlewares.types";
import CustomError from "../utils/customError.util";
import { uploadImage } from "../utils/upload.util";
import Skill from "../models/skill.model";

const createSkill = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const { body, file } = req;
    if (file) {
      const result = await uploadImage(file);
      req.body.logo = result;
    }
    const newSkill = await Skill.create(body);
    if (newSkill) {
      return res.status(201).json({
        message: "Skill is created successfully",
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

const updateSkill = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const { file, body, params } = req;
    if (file) {
      const result = await uploadImage(file);
      if (result.length > 0) {
        req.body.logo = result;
      }
    }
    const updatedSkill = await Skill.updateOne({ _id: params.id }, body);
    if (updatedSkill) {
      return res.status(201).json({
        message: "Skill is updated successfully",
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

const getSkills = async (
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
    const skills = await Skill.find(queries)
      .sort({ createdAt: -1 })
      .limit(+(process.env.LIMIT || 10))
      .skip(skipped);
    return res.status(200).json({
      data: skills,
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const deleteSkill = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const deletedSkill = await Skill.deleteOne({ _id: id });
    if (deletedSkill) {
      return res.status(200).json({
        message: "Skill is deleted successfully",
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

export { createSkill, updateSkill, getSkills, deleteSkill };
