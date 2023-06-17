import Joi from 'joi';

const bagSchema = Joi.object({
    hexcode: Joi.string().trim().required().messages({
      'string.empty': 'Bagtype name is required.'
    }),
});
  
  const validateBagtype = input => {
    const { error } = bagSchema.validate(input, { abortEarly: false });
    if (error) {
      return error.details.reduce((acc, el) => {
        acc[el.path[0]] = el.message;
        return acc;
      }, {});
    }
  };
  
  export default validateBagtype;