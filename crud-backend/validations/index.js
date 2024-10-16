const { UserSchema } = require("./schemas")

const Validate = (schema, req, res) => {
    const { error } = schema.validate(req.body)
    if (error) {
        res.status(400).send(error.details[0].message)
    }
}

const UserValidation = (req, res) => Validate(UserSchema, req, res)

module.exports = { UserValidation }