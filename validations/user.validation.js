import Joi from "joi";

export default {
  id: {
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
  },
  
  register: {
    body: Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().required(),
      }),
  },

  login: {
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  },

}