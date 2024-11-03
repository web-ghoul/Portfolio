import bcrypt from 'bcryptjs';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user.model';
import { forgotPasswordTemp } from '../templates/forgotPasword/forgotPassword.template';
import AuthorizationRequestTypes from '../types/middlewares.types';
import CustomError from '../utils/customError.util';
import { transporter } from '../utils/sendMail.util';

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user) {
      const isCorrect = await bcrypt.compare(password, user.password);
      if (isCorrect) {
        //Expired in 30 days
        const token = jwt.sign(
          { id: user._id, type: user.type },
          `${process.env.SECRET_KEY}`,
          { expiresIn: `${process.env.TOKEN_EXPIRED}` },
        );

        return res.status(200).json({
          token,
          userId: user._id,
          type: user.type,
          message: 'Login Successfully',
        });
      }
    }
    const err = new CustomError("Username or Password isn't Correct", 402);
    return next(err);
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, username, password } = req.body;
    const user = await User.findOne({
      $or: [{ email }, { username }],
    });
    if (!user) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        ...req.body,
        password: hashedPassword,
      });
      if (newUser) {
        return res.status(201).json({
          message: 'Account is Created Successfully',
        });
      }
    }
    const err = new CustomError('User is already Exist', 404);
    return next(err);
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const forgotPassword = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      //Expired in an hour
      const token = jwt.sign(
        { id: user._id, type: user.type },
        `${process.env.SECRET_KEY}`,
        {
          expiresIn: `${process.env.TOKEN_EXPIRED_FOR_FORGOT_PASSWORD}`,
        },
      );

      await transporter.sendMail({
        from: `${process.env.OFFICIAL_EMAIL}`,
        to: email,
        subject: 'Reset your password 🔒',
        html: forgotPasswordTemp(
          `${process.env.CLIENT_URL}/resetPassword/${token}`,
        ),
      });

      return res.status(200).json({
        message: 'Check your Email Inbox',
      });
    } else {
      const err = new CustomError("User doesn't Exist", 404);
      return next(err);
    }
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const resetPassword = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password } = req.body;
    const user = await User.findOne({ _id: req?.userData?.id });
    if (user) {
      const hashedPassword = await bcrypt.hash(password, 10);
      await User.updateOne({ _id: user._id }, { password: hashedPassword });
      return res.status(206).json({
        message: 'Password is Changed Successfully',
      });
    } else {
      const err = new CustomError("User doesn't Exist", 404);
      return next(err);
    }
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

export { forgotPassword, login, register, resetPassword };
