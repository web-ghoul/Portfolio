import { Request, Response } from 'express';
import CustomError from './customError.util';

const errorHandler = (error: Error, _: Request, res: Response) => {
  let statusCode = 500;
  let message = 'Internal Server Error';
  if (error instanceof CustomError) {
    statusCode = error.statusCode;
    message = error.message;
  }
  res.status(statusCode);
  res.json({ message });
};

export default errorHandler;
