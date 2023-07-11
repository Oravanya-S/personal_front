import Joi from 'joi';

const profileSchema = Joi.object({
  firstName: Joi.string().trim().required().messages({
    'string.empty': 'First name is required.'
  }),
  lastName: Joi.string().trim().required().messages({
    'string.empty': 'Last name is required.'
  }),
  email: Joi.string().email({ tlds: false }).messages({
    'string.email': 'Must be a valid email'
  }),
  addressLine: Joi.string().trim().optional().allow('').messages({
  }),
  province: Joi.string().trim().optional().allow('').messages({
  }),
  amphoe: Joi.string().trim().optional().allow('').messages({
  }),
  tambon: Joi.string().trim().optional().allow('').messages({
  }),
  zipcode: Joi.string().trim().optional().allow('').messages({
  }),
});

const validateProfile = input => {
    const { error } = profileSchema.validate(input, { abortEarly: false });
    if (error) {
      return error.details.reduce((acc, el) => {
        acc[el.path[0]] = el.message;
        return acc;
      }, {});
    }
  };
  
  export default validateProfile;


  // password: Joi.string()
  //   .pattern(/^[a-zA-Z0-9]{6,30}$/)
  //   .trim()
  //   .required()
  //   .messages({
  //     'string.empty': 'Password is required.',
  //     'string.pattern.base':
  //       'Password must be at least 6 characters and contain only alphabet and number.'
  //   }),
  // confirmPassword: Joi.string().valid(Joi.ref('password')).messages({
  //   'any.only': 'Passwords do not match.',
  //   'string.empty': 'Confirm password is required.'
  // })