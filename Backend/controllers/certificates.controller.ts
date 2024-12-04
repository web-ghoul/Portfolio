import { NextFunction, Response } from 'express';
import Certificate from '../models/certificate.model';
import AuthorizationRequestTypes from '../types/middlewares.types';
import CustomError from '../utils/customError.util';
import { uploadImage } from '../utils/upload.util';

const createCertificate = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { body, file } = req;
    if (file) {
      const result = await uploadImage(file);
      req.body.image = result;
    }
    const newCertificate = await Certificate.create(body);
    if (newCertificate) {
      return res.status(201).json({
        message: 'Certificate is created successfully',
      });
    }
    return res.status(400).json({
      message: 'Error Occurs',
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const updateCertificate = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { file, body, params } = req;
    if (file) {
      const result = await uploadImage(file);
      if (result.length > 0) {
        req.body.image = result;
      }
    }
    const updatedSkill = await Certificate.updateOne({ _id: params.id }, body);
    if (updatedSkill) {
      return res.status(201).json({
        message: 'Certificate is updated successfully',
      });
    }
    return res.status(400).json({
      message: 'Error Occurs',
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const getCertificates = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction,
) => {
  try {
    const search = req.query.search as string;
    const page = req.query.page as string;
    let queries = {};
    if (search) {
      queries = {
        title: {
          $regex: new RegExp(
            search.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'),
            'i',
          ),
        },
      };
    }
    const skipped = (+page - 1) * +(process.env.LIMIT || 10) || 0;
    const certificates = await Certificate.find(queries)
      .sort({ createdAt: -1 })
      .limit(+(process.env.LIMIT || 10))
      .skip(skipped);
    return res.status(200).json({
      data: certificates,
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const deleteCertificate = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const deletedCertificate = await Certificate.deleteOne({ _id: id });
    if (deletedCertificate) {
      return res.status(200).json({
        message: 'Certificate is deleted successfully',
      });
    }
    return res.status(400).json({
      message: 'Error Occurs',
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

export {
  createCertificate,
  deleteCertificate,
  getCertificates,
  updateCertificate,
};
