import mongoose, { Schema } from 'mongoose';
import { FileTypes } from '../types/models.types';

const FileSchema: Schema<FileTypes> = new Schema<FileTypes>(
  {
    file: {
      type: String,
      required: [true, 'File link is required'],
    },
    name: {
      type: String,
      required: [true, 'File name is required'],
    },
    uploader: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true },
);

export default mongoose.model<FileTypes>('File', FileSchema);
