import Joi from "joi";

const createSkillSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "Skill name is required",
    "string.base": "Skill name must be a string",
  }),
  logo: Joi.string()
    .pattern(/\.(jpg|jpeg|png|gif|svg)$/i)
    .required()
    .optional()
    .messages({
      "any.required": "Skill logo is required",
      "string.base": "Skill logo must be a string",
      "string.pattern.base":
        "Skill logo must be a valid image URL with .jpg, .jpeg, .png, .gif, or .svg extension",
    }),
});

const updateSkillSchema = Joi.object({
  name: Joi.string().optional().messages({
    "string.base": "Skill name must be a string",
  }),
  logo: Joi.string()
    .pattern(/\.(jpg|jpeg|png|gif|svg)$/i)
    .optional()
    .allow("")
    .messages({
      "string.base": "Skill logo must be a string",
      "string.pattern.base":
        "Skill logo must be a valid image URL with .jpg, .jpeg, .png, .gif, or .svg extension",
    }),
});

export { createSkillSchema, updateSkillSchema };
