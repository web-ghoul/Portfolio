import mongoose, { Schema } from "mongoose";
import { ProjectTypes } from "../types/models.types";

const ProjectSchema: Schema<ProjectTypes> = new Schema<ProjectTypes>(
  {
    name: {
      type: String,
      required: [true, "Project name is required"],
    },
    description: {
      type: String,
      required: [true, "Project description is required"],
    },
    images: {
      type: [String],
      required: [true, "Project images is required"],
    },
    url: {
      type: String,
      required: [true, "Project URL is required"],
    },
    github: {
      type: String,
      required: [true, "Project github is required"],
    },
  },
  { timestamps: true }
);

export default mongoose.model<ProjectTypes>("Project", ProjectSchema);
