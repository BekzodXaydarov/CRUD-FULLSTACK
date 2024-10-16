const {Router} = require("express")
const router = Router()

const UserController = require("../controllers/user.controller")

router.post("/user",UserController.createUser)
router.get("/user",UserController.getUser)
router.get("/user/:id",UserController.getUserById)
router.put("/user/:id",UserController.updateUser)
router.delete("/user/:id",UserController.deleteUser)

module.exports = router