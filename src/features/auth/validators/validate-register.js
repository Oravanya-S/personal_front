import Joi from 'joi';

const registerSchema = Joi.object({
  firstName: Joi.string().trim().required().messages({
    'string.empty': 'First name is required.'
  }),
  lastName: Joi.string().trim().required().messages({
    'string.empty': 'Last name is required.'
  }),
  email: Joi.string().email({ tlds: false }).messages({
    'string.email': 'Must be a valid email'
  }),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .trim()
    .required()
    .messages({
      'string.empty': 'Password is required.',
      'string.pattern.base':
        'Password must be at least 6 characters and contains only alphabet and number.'
    }),
  confirmPassword: Joi.string().valid(Joi.ref('password')).messages({
    'any.only': 'Passwords do not match.',
    'string.empty': 'Confirm password is required.'
  })
});

const validateRegister = input => {
  const { error } = registerSchema.validate(input, { abortEarly: false });
  if (error) {
    return error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
  }
};

export default validateRegister;