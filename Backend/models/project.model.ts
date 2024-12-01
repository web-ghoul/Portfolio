import mongoose, { Schema } from "mongoose";
import { ProjectTypes } from "../types/models.types";
import CustomError from "../utils/customError.util";

const ProjectSchema: Schema<ProjectTypes> = new Schema<ProjectTypes>(
  {
    name: {
      type: String,
      required: [true, "Project name is required"],
      unique: true,
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
      unique: true,
    },
    github: {
      type: String,
      required: [true, "Project github is required"],
      unique: true,
    },
    skills: {
      type: [mongoose.Schema.ObjectId],
      ref: "Skill",
      required: [true, "Project skills is required"],
    },
  },
  { timestamps: true }
);

ProjectSchema.set("autoIndex", true);

const handleDuplicateKeyError = (error: any, _: any, next: any) => {
  if (error.name === "MongoServerError" && error.code === 11000) {
    const field = Object.keys(error.keyValue).join(", ");
    const err = new CustomError(
      `${field} is duplicated, please choose another one`,
      400
    );
    return next(err);
  } else {
    next(error);
  }
};
ProjectSchema.post("save", handleDuplicateKeyError);

export default mongoose.model<ProjectTypes>("Project", ProjectSchema);
