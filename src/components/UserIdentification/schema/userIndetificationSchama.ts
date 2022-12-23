/* eslint-disable max-len */
import Joi from 'joi';

const name = Joi.string().required().empty().min(3)
  .max(100)
  .messages({
    'any.required': 'O nome deve ser preenchido',
    'string.empty': 'O nome deve ser preenchido',
    'string.min': 'O nome deve ter mais de 3 caracteres',
    'string.max': 'O nome deve ter menos de 100 caracteres',
  });

const password = Joi.string().required().empty().min(8)
  .max(50)
  .regex(/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
  .messages({
    'any.required': 'A senha deve ser preenchida',
    'string.empty': 'A senha deve ser preenchida',
    'string.pattern.base': 'A senha deve conter 8 caracteres ou mais e ao menos um número e uma letra',
    'string.min': 'A senha deve ter mais de 7 caracteres',
    'string.max': 'A senha deve ter menos de 100 caracteres',
  });

const birthday = Joi.string().required().empty().regex(/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/)
  .messages({
    'any.required': 'A data de nascimento deve ser preenchida',
    'string.pattern.base': 'A data de nascimento deve está no seguinte formato dd/mm/aaaa',
    'string.empty': 'A data de nascimento deve ser preenchida',
  });

const checkPassword = Joi.string().required().empty().min(8)
  .max(50)
  .regex(/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
  .messages({
    'any.required': 'A senha deve ser preenchida',
    'string.empty': 'A senha deve ser preenchida',
    'string.pattern.base': 'A senha deve conter 8 caracteres ou mais e ao menos um número e uma letra',
    'string.min': 'A senha deve ter mais de 7 caracteres',
    'string.max': 'A senha deve ter menos de 100 caracteres',
  });

const email = Joi.string().empty().email({ tlds: { allow: false } }).required()
  .messages({
    'any.required': 'O email é deve ser preenchido',
    'string.empty': 'O email deve ser preenchida',
    'string.email': 'O email deve está no seguinte formato user@user.com',
  });

const userIdentificationSchema = {
  name,
  email,
  password,
  checkPassword,
  birthday,
};

export default userIdentificationSchema;
