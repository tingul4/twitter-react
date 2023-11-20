const Joi = require('joi')

module.exports = {
  signupValidation: data => {
    const schema = Joi.object({
      account: Joi.string().min(3).max(50).required(),
      name: Joi.string().min(3).max(50).required(),
      email: Joi.string().min(6).max(50).required().email(),
      password: Joi.string().min(8).max(255).required(),
      checkPassword: Joi.string().min(8).max(255).required()
    })

    return schema.validate(data)
  },
  loginValidation: data => {
    const schema = Joi.object({
      account: Joi.string().min(3).max(50).required(),
      password: Joi.string().min(8).max(255).required()
    })

    return schema.validate(data)
  }
}
