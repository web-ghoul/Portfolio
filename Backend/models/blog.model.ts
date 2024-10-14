import mongoose, { Schema } from 'mongoose';
import { BlogTypes } from '../types/models.types';

const BlogSchema: Schema<BlogTypes> = new Schema<BlogTypes>(
  {
    title: {
      type: String,
      required: [true, 'Blog name is required'],
    },
    body: {
      type: String,
      required: [true, 'Blog body is required'],
    },
    tags: {
      type: [String],
    },
    images: {
      type: [mongoose.Schema.ObjectId],
      ref: 'File',
    },
    creator: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Creator is required'],
    },
  },
  { timestamps: true },
);

export default mongoose.model<BlogTypes>('Blog', BlogSchema);
