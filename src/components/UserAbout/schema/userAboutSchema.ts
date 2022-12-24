import Joi from 'joi';

const about = Joi.string().required().empty().min(11)
  .max(280)
  .messages({
    'any.required': 'O campo de sobre você deve ser preenchido',
    'string.empty': 'O campo de sobre você deve ser preenchido',
    'string.min': 'O campo de sobre você deve ter mais de 10 caracteres',
    'string.max': 'O campo de sobre você deve ter menos de 280 caracteres',
  });

export default {
  about,
};
