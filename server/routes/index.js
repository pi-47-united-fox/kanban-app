const Controller = require("../controllers/controller")
const { authentication } = require("../middlewares/auth")

const router = require("express").Router()

router.post("/login", Controller.postLogin)
router.post("/register", Controller.postRegister)
router.use(authentication)
router.get("/tasks", Controller.getTasks)
router.post("/tasks", Controller.postTask)

module.exports = router