import Joi from "joi";
import { Response, NextFunction } from "express";

const handleValidationError = (
  res: Response,
  next: NextFunction,
  error?: Joi.ValidationError
) => {
  if (error) {
    return res.status(400).json({
      message: "Validation failed",
      details: error.details.map((err) => err.message),
    });
  } else {
    return next();
  }
};

export { handleValidationError };
