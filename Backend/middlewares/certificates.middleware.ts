import { NextFunction, Response } from 'express';
import Skill from '../models/skill.model';
import {
  createCertificateSchema,
  updateCertificateSchema,
} from '../schemas/certificate.schema';
import AuthorizationRequestTypes from '../types/middlewares.types';
import CustomError from '../utils/customError.util';
import { handleValidationError } from '../utils/handleMiddleware.util';

const createCertificateValidation = (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction,
) => {
  const { file, body } = req;
  const { error } = createCertificateSchema.validate({
    ...body,
    image: file ? file.filename : '',
  });
  handleValidationError(res, next, error);
};

const updateCertificateValidation = (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction,
) => {
  const { file, body } = req;
  const { error } = updateCertificateSchema.validate({
    ...body,
    image: file ? file.filename : '',
  });
  handleValidationError(res, next, error);
};

const isCertificateExist = (create?: boolean) => {
  return async (
    req: AuthorizationRequestTypes,
    res: Response,
    next: NextFunction,
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
            message: 'Skill name is duplicated',
          });
        }
        return next();
      }
      res.status(500).json({
        message: 'No Data Sent',
      });
    } catch (error: any) {
      const err = new CustomError(error.message, 500);
      return next(err);
    }
  };
};

export {
  createCertificateValidation,
  isCertificateExist,
  updateCertificateValidation,
};
