/* eslint-disable max-len */
import Joi from 'joi';

const cep = Joi.string().required().empty().regex(/^[0-9]{8}$|^[0-9]{5}-[0-9]{3}$/)
  .messages({
    'any.required': 'O cep deve ser preenchido',
    'string.empty': 'O cep deve ser preenchido',
    'string.pattern.base': 'O cep deve ter o seguinte padrão xxxxx-xxx ou xxxxxxxx',
  });

const street = Joi.string().required().empty().min(3)
  .max(60)
  .messages({
    'any.required': 'O nome da rua deve ser preenchida',
    'string.empty': 'O nome da rua deve ser preenchida',
    'string.min': 'O nome da rua deve de 2 caracteres',
    'string.max': 'O nome da rua deve ter menos de 60 caracteres',
  });

const houseNumber = Joi.string().required().empty().max(10)
  .regex(/\d/)
  .messages({
    'any.required': 'O número da casa deve ser preenchido',
    'string.empty': 'O número da casa deve ser preenchido',
    'string.max': 'O número da casa deve ter menos de 10 caracteres',
    'string.pattern.base': 'O número da casa deve ser só números',
  });

const district = Joi.string().required().empty().max(50)
  .messages({
    'any.required': 'O bairro deve ser preenchido',
    'string.empty': 'O bairro deve ser preenchido',
    'string.max': 'O bairro deve ter menos de 50 caracteres',
  });

const city = Joi.string().required().empty()
  .max(50)
  .messages({
    'any.required': 'A cidade deve ser preenchida',
    'string.empty': 'A cidade deve ser preenchida',
    'string.max': 'A cidade deve ter menos de 50 caracteres',
  });

const reference = Joi.string().required().empty().max(80)
  .messages({
    'any.required': 'O ponto de referência deve ser preenchido',
    'string.empty': 'O ponto de referência deve ser preenchido',
    'string.max': 'O ponto de referência deve ter menos de 80 caracteres',
  });

export default {
  cep,
  street,
  houseNumber,
  district,
  city,
  reference,
};
