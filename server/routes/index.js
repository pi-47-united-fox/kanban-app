const router = require("express").Router()
const UserController = require("../controllers/userController")
const TaskController = require("../controllers/taskController")
const authentication = require("../middlewares/authentication")
const authorization = require("../middlewares/authorization")


router.get('/', UserController.homeController)

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/google', UserController.newGoogleLogin)


router.get('/tasks', TaskController.findAllTasks)

router.use(authentication)

router.post('/tasks', TaskController.addTask)

router.get('/tasks/:id', authorization, TaskController.findTaskByTaskId)
router.put('/tasks/:id', authorization, TaskController.editTask)
router.patch('/tasks/up/:id', TaskController.upgradeTask)
router.patch('/tasks/down/:id', TaskController.downgradeTask)

// router.patch('/tasks/:id?move=up', authorization, TaskController.upgradeTask)
// router.patch('/tasks/:id?move=down', authorization, TaskController.downgradeTask)




router.delete('/tasks/:id', authorization, TaskController.deleteTask)



module.exports = router