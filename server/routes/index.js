const Controller = require("../controllers/controller")
const { authentication,authorization } = require("../middlewares/auth")

const router = require("express").Router()

router.post("/login", Controller.postLogin)
router.post("/register", Controller.postRegister)
router.post("/google-login", Controller.postGoogleLogin)
router.use(authentication)
router.post("/category", Controller.postCategory)
router.get("/tasks", Controller.getTasks)
router.post("/tasks", Controller.postTask)
router.get("/tasks/:id", Controller.getTask)
router.put("/tasks/:id",authorization, Controller.putTask)
router.delete("/tasks/:id",authorization, Controller.deleteTask)

module.exports = router