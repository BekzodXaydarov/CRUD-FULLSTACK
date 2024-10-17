const { AdminSchema, AdminLoginSchema } = require("./schemas")

const Validate = (schema, req, res) => {
    const { error } = schema.validate(req.body)
    if (error) {
        res.status(400).send(error.details[0].message)
    }
}

const AdminValidation = (req, res) => Validate(AdminSchema, req, res)
const AdminLoginValidation = (req, res) => Validate(AdminLoginSchema, req, res)

module.exports = { AdminValidation, AdminLoginValidation }