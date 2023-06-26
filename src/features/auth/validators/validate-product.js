import Joi from 'joi';

const productSchema = Joi.object({
    modelId: Joi.number().integer().required().messages({
        'number.base': 'Model name is required.',
    }),
    colorId: Joi.number().integer().required().messages({
        'number.base': 'Color is required.'
    }),
    price: Joi.number().integer().positive().required().messages({
        'number.empty': 'Price is required.',
        'number.base': 'Price must be a number',
    }),
    stock: Joi.number().integer().required().messages({
        'number.empty': 'Stock is required.',
        'number.base': 'Stock must be a number',
    }),
    
    image: Joi.string().trim().messages({
        // 'string.empty': 'Image is required.'
    }),
});
  
  const validateProduct = input => {
    const { error } = productSchema.validate(input, { abortEarly: false });
    if (error) {
      return error.details.reduce((acc, el) => {
        acc[el.path[0]] = el.message;
        return acc;
      }, {});
    }
  };
  
  export default validateProduct;