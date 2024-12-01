import mongoose, { Schema } from "mongoose";
import { SkillTypes } from "../types/models.types";
import CustomError from "../utils/customError.util";

const SkillSchema: Schema<SkillTypes> = new Schema<SkillTypes>(
  {
    name: {
      type: String,
      required: [true, "Skill name is required"],
      unique: true,
    },
    logo: {
      type: String,
      required: [true, "Skill logo is required"],
    },
  },
  { timestamps: true }
);

SkillSchema.set("autoIndex", true);

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
SkillSchema.post("save", handleDuplicateKeyError);

export default mongoose.model<SkillTypes>("Skill", SkillSchema);
