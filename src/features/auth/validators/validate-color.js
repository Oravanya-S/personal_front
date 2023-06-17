import Joi from 'joi';

const colorSchema = Joi.object({
    groupColorId: Joi.number().integer().required().messages({
        'number.base': 'Group color is required.'
    }),
    hexcode: Joi.string().trim().required().messages({
      'string.empty': 'Color is required.'
    }),
    name: Joi.string().trim().required().messages({
        'string.empty': 'Color name is required.'
    }),
});
  
  const validateColor = input => {
    const { error } = colorSchema.validate(input, { abortEarly: false });
    if (error) {
      return error.details.reduce((acc, el) => {
        acc[el.path[0]] = el.message;
        return acc;
      }, {});
    }
  };
  
  export default validateColor;