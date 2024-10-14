import mongoose, { Schema } from 'mongoose';
import { UserTypes } from '../types/models.types';

const UserSchema: Schema<UserTypes> = new Schema<UserTypes>(
  {
    avatar: {
      type: String,
      default: 'https://cdn-icons-png.flaticon.com/128/3177/3177440.png',
    },
    username: {
      type: String,
      required: [true, 'username is required'],
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'email is required'],
      unique: true,
    },
    type: {
      type: String,
      default: 'user',
      enum: ['admin', 'user'],
      required: [true, 'user type is required'],
    },
  },
  { timestamps: true },
);

export default mongoose.model<UserTypes>('User', UserSchema);
