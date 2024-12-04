import Joi from 'joi';

const createCertificateSchema = Joi.object({
  title: Joi.string().required().messages({
    'any.required': 'Certificate title is required',
    'string.base': 'Certificate title must be a string',
  }),
  image: Joi.string()
    .pattern(/\.(jpg|jpeg|png|gif|svg|jfif)$/i)
    .required()
    .optional()
    .messages({
      'any.required': 'Certificate image is required',
      'string.base': 'Certificate image must be a string',
      'string.pattern.base':
        'Certificate image must be a valid image URL with .jpg, .jpeg, .png, .gif, .jfif or .svg extension',
    }),
});

const updateCertificateSchema = Joi.object({
  title: Joi.string().optional().messages({
    'string.base': 'Certificate title must be a string',
  }),
  image: Joi.string()
    .pattern(/\.(jpg|jpeg|png|gif|svg|jfif)$/i)
    .optional()
    .allow('')
    .messages({
      'string.base': 'Certificate image must be a string',
      'string.pattern.base':
        'Certificate image must be a valid image URL with .jpg, .jpeg, .png, .gif, .jfif or .svg extension',
    }),
});

export { createCertificateSchema, updateCertificateSchema };
