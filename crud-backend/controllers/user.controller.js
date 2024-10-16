const { User } = require("../models")
const { UserValidation } = require("../validations")

exports.createUser = async (req, res) => {
    UserValidation(req, res)
    try {
        const user = await User.create(req.body)
        res.status(200).json({
            success: true,
            message: "user created",
            user
        })
    }
    catch (e) {
        res.status(500).send(e.message)
    }
}

exports.getUser = async (req, res) => {
    try {
        const user = await User.findAll()
        res.status(200).json({
            success: true,
            message: "list of user",
            user
        })
    }
    catch (e) {
        res.status(500).send(e.message)
    }
}

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)
        if (!user) {
            return res.status(200).json({
                success: false,
                message: "User not found",
            })
        }
        res.status(200).json({
            success: true,
            message: "details of user",
            user
        })
    }
    catch (e) {
        res.status(500).send(e.message)
    }
}

exports.updateUser = async (req, res) => {
    UserValidation(req,res)
    try {
        const user = await User.findByPk(req.params.id)
        if (!user) {
            return res.status(200).json({
                success: false,
                message: "User not found",
            })
        }
        await user.update(req.body)
        res.status(200).json({
            success: true,
            message: "user updated",
            user
        })
    }
    catch (e) {
        res.status(500).send(e.message)
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)
        if (!user) {
            return res.status(200).json({
                success: false,
                message: "User not found",
            })
        }
        await user.destroy()
        res.status(200).json({
            success: true,
            message: "user deleted",
        })
    }
    catch (e) {
        res.status(500).send(e.message)
    }
}