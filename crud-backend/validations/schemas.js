const Joi = require("joi");

const AdminSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required()
})

const AdminLoginSchema = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().required()
})

module.exports = { AdminSchema,AdminLoginSchema }