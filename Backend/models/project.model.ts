import mongoose, { Schema } from 'mongoose';
import { ProjectTypes } from '../types/models.types';

const ProjectSchema: Schema<ProjectTypes> = new Schema<ProjectTypes>(
  {
    name: {
      type: String,
      required: [true, 'Project name is required'],
    },
    description: {
      type: String,
      required: [true, 'Project description is required'],
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

export default mongoose.model<ProjectTypes>('Project', ProjectSchema);
