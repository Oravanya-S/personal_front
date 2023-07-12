import Joi from 'joi';

const passwordSchema = Joi.object({
  currentPassword: Joi.string().trim().required().messages({
    'string.empty': 'Current password is required.'
  }),
  newPassword: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .trim()
    .required()
    .messages({
      'string.empty': 'Password is required.',
      'string.pattern.base':
        'Password must be at least 6 characters and contains only alphabet and number.'
    }),
  confirmPassword: Joi.string().valid(Joi.ref('newPassword')).trim().messages({
      'any.only': 'Passwords do not match.',
      'string.empty': 'Confirm password is required.'
    })
});

const validatePassword = input => {
    const { error } = passwordSchema.validate(input, { abortEarly: false });
    if (error) {
      return error.details.reduce((acc, el) => {
        acc[el.path[0]] = el.message;
        return acc;
      }, {});
    }
  };
  
  export default validatePassword;


  
  