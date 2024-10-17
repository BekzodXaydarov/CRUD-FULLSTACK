const { Router } = require("express")
const router = Router()

const AdminController = require("../controllers/admin.controller")
const { verifyToken } = require("../tokens")

router.post("/admin", AdminController.createAdmin)
router.post("/adminLogin", AdminController.adminLogin)
router.get("/admin", verifyToken, AdminController.getAdmin)
router.get("/admin/:id", verifyToken, AdminController.getAdminById)
router.put("/admin/:id", verifyToken, AdminController.updateAdmin)
router.delete("/admin/:id", verifyToken, AdminController.deleteAdmin)

module.exports = router