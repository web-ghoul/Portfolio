import Joi from "joi";

const skillSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "Skill name is required",
    "string.base": "Skill name must be a string",
  }),
  logo: Joi.string()
    .pattern(/\.(jpg|jpeg|png|gif|svg)$/i)
    .required()
    .messages({
      "any.required": "Skill logo is required",
      "string.base": "Skill logo must be a string",
      "string.pattern.base":
        "Skill logo must be a valid image URL with .jpg, .jpeg, .png, .gif, or .svg extension",
    }),
});

export default skillSchema;
