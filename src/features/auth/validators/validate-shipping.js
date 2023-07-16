import Joi from 'joi';

const shippingSchema = Joi.object({
    phone: Joi.string().pattern(/^[0-9]{10}$/).trim().required().messages({
      'string.empty': 'Phone is required.',
      'string.pattern.base':
        'Phone must be 10 digits of number.'
    }),
    address: Joi.string().trim().required().messages({
        'string.empty': 'Address is required.'
    })
});
  
  const validateShipping = input => {
    const { error } = shippingSchema.validate(input, { abortEarly: false });
    if (error) {
      return error.details.reduce((acc, el) => {
        acc[el.path[0]] = el.message;
        return acc;
      }, {});
    }
  };
  
  export default validateShipping;