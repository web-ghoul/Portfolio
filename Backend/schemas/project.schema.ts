import Joi from "joi";
import mongoose from "mongoose";

const isObjectId = (value: string) => mongoose.Types.ObjectId.isValid(value);

const createProjectSchema = Joi.object({
  name: Joi.string().min(2).max(50).required().messages({
    "string.base": "Project name must be a string",
    "string.empty": "Project name is required",
    "string.min": "Project name must be at least 2 characters",
    "string.max": "Project name must not exceed 50 characters",
    "any.required": "Project name is required",
  }),
  description: Joi.string().min(50).max(500).required().messages({
    "string.base": "Project description must be a string",
    "string.empty": "Project description is required",
    "string.min": "Project description must be at least 50 characters",
    "string.max": "Project description must not exceed 500 characters",
    "any.required": "Project description is required",
  }),
  images: Joi.array()
    .items(
      Joi.string()
        .pattern(/\.(jpg|jpeg|png|gif|webp|svg)$/i, "image extension")
        .messages({
          "string.pattern.base":
            "Each image must have a valid extension (.jpg, .jpeg, .png, .gif, .webp, .svg)",
        })
    )
    .required()
    .messages({
      "array.base": "Project images must be an array",
      "array.empty": "Project images are required",
      "any.required": "Project images are required",
    }),
  url: Joi.string().uri().required().messages({
    "string.base": "Project URL must be a string",
    "string.empty": "Project URL is required",
    "string.uri": "Project URL must be a valid URL",
    "any.required": "Project URL is required",
  }),
  github: Joi.string().uri().required().messages({
    "string.base": "Project GitHub must be a string",
    "string.empty": "Project GitHub is required",
    "string.uri": "Project GitHub must be a valid URL",
    "any.required": "Project GitHub is required",
  }),
  skills: Joi.array()
    .items(
      Joi.string()
        .custom((value, helpers) => {
          if (!isObjectId(value)) {
            // Ensure the error message fits the expected type
            return helpers.error("any.invalid", {
              message: "Each skill must be a valid ObjectId",
            });
          }
          return value;
        })
        .required()
    )
    .min(1)
    .required()
    .messages({
      "array.base": "Skills must be an array",
      "array.empty": "At least one skill is required",
      "any.required": "Skills are required",
      "array.min": "At least one skill must be provided",
    }),
});

const updateProjectSchema = Joi.object({
  name: Joi.string().min(2).max(50).messages({
    "string.base": "Project name must be a string",
    "string.empty": "Project name is required",
    "string.min": "Project name must be at least 2 characters",
    "string.max": "Project name must not exceed 50 characters",
    "any.required": "Project name is required",
  }),
  description: Joi.string().min(50).max(500).messages({
    "string.base": "Project description must be a string",
    "string.empty": "Project description is required",
    "string.min": "Project description must be at least 50 characters",
    "string.max": "Project description must not exceed 500 characters",
    "any.required": "Project description is required",
  }),
  images: Joi.array()
    .items(
      Joi.string()
        .allow("")
        .pattern(/\.(jpg|jpeg|png|gif|webp|svg)$/i, "image extension")
        .messages({
          "string.pattern.base":
            "Each image must have a valid extension (.jpg, .jpeg, .png, .gif, .webp, .svg)",
        })
    )
    .messages({
      "array.base": "Project images must be an array",
      "array.empty": "Project images are required",
      "any.required": "Project images are required",
    }),
  url: Joi.string().uri().messages({
    "string.base": "Project URL must be a string",
    "string.empty": "Project URL is required",
    "string.uri": "Project URL must be a valid URL",
    "any.required": "Project URL is required",
  }),
  github: Joi.string().uri().messages({
    "string.base": "Project GitHub must be a string",
    "string.empty": "Project GitHub is required",
    "string.uri": "Project GitHub must be a valid URL",
    "any.required": "Project GitHub is required",
  }),
  skills: Joi.array()
    .items(
      Joi.string()
        .custom((value, helpers) => {
          if (!isObjectId(value)) {
            // Ensure the error message fits the expected type
            return helpers.error("any.invalid", {
              message: "Each skill must be a valid ObjectId",
            });
          }
          return value;
        })
        .required()
    )
    .min(1)
    .messages({
      "array.base": "Skills must be an array",
      "array.empty": "At least one skill is required",
      "any.required": "Skills are required",
      "array.min": "At least one skill must be provided",
    }),
});

export { createProjectSchema, updateProjectSchema };
