const { Admin } = require("../models")
const { generateToken } = require("../tokens")
const { AdminValidation, AdminLoginValidation } = require("../validations")
const bcrypt = require("bcrypt")

exports.createAdmin = async (req, res) => {
    AdminValidation(req, res)
    try {
        const admin = await Admin.create(req.body)
        res.status(200).json({
            success: true,
            message: "admin created",
            admin
        })
    }
    catch (e) {
        res.status(500).send(e.message)
    }
}

exports.adminLogin = async (req, res) => {

    AdminLoginValidation(req, res)
    try {
        const { name, password } = req.body;
        const admin = await Admin.findOne({ name });
        if (!admin) {
            return res.status(401).json({
                success: false,
                message: "Username or password is invalid",
            });
        }
        const passwordMatch = await bcrypt.compare(password, admin.password);
        if (!passwordMatch) {
            return res.status(401).json({
                success: false,
                message: "Username or password is invalid",
            });
        }
        const token = generateToken(admin)
        return res.json({
            success: true,
            message: "Token",
            token: token,
        });
    }
    catch (e) {
        res.status(500).send(e.message)
    }
}

exports.getAdmin = async (req, res) => {
    try {
        const admin = await Admin.findAll()
        res.status(200).json({
            success: true,
            message: "List of admin",
            admin
        })
    }
    catch (e) {
        res.status(500).send(e.message)
    }
}

exports.getAdminById = async (req, res) => {
    try {
        const admin = await Admin.findByPk(req.params.id)
        if (!admin) {
            return res.status(200).json({
                success: false,
                message: "admin not found",
            })
        }
        res.status(200).json({
            success: true,
            message: "details of admin",
            admin
        })
    }
    catch (e) {
        res.status(500).send(e.message)
    }
}

exports.updateAdmin = async (req, res) => {
    AdminValidation(req, res)
    try {
        const admin = await Admin.findByPk(req.params.id)
        if (!admin) {
            return res.status(200).json({
                success: false,
                message: "admin not found",
            })
        }
        await admin.update(req.body)
        res.status(200).json({
            success: true,
            message: "admin updated",
            admin
        })
    }
    catch (e) {
        res.status(500).send(e.message)
    }
}

exports.deleteAdmin = async (req, res) => {
    try {
        const admin = await Admin.findByPk(req.params.id)
        if (!admin) {
            return res.status(200).json({
                success: false,
                message: "admin not found",
            })
        }
        await admin.destroy()
        res.status(200).json({
            success: true,
            message: "admin deleted",
        })
    }
    catch (e) {
        res.status(500).send(e.message)
    }
}