import Joi from 'joi';

const modelSchema = Joi.object({
    name: Joi.string().trim().required().messages({
        'string.empty': 'Model name is required.',
    }),
    brand: Joi.string().trim().required().messages({
        'string.empty': 'Brand name is required.'
    }),
    meterial: Joi.string().trim().required().messages({
        'string.empty': 'Meterial is required.'
    }),
    description: Joi.string().trim().required().messages({
        'string.empty': 'Description is required.'
    }),
    bagTypeId: Joi.number().integer().required().messages({
        'number.base': 'Bagtype is required.'
    }),
});
  
  const validateModel = input => {
    const { error } = modelSchema.validate(input, { abortEarly: false });
    if (error) {
      return error.details.reduce((acc, el) => {
        acc[el.path[0]] = el.message;
        return acc;
      }, {});
    }
  };
  
  export default validateModel;
