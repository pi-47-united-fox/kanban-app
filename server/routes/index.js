const router = require('express').Router()
const UserController = require('../controllers/userController.js')
const TaskController = require('../controllers/taskController.js')
const {
    authentication,
    authorization
} = require('../middlewares/userAuth.js')

router.post('/login', UserController.loginUser)
router.post('/register', UserController.registerUser)
router.post('/googleLogin', UserController.googleLogin)

router.use(authentication)
router.get('/tasks', TaskController.getAllTask)
router.post('/tasks', TaskController.addTask)

router.get('/tasks/:id', authorization, TaskController.getTaskById)
router.put('/tasks/:id', authorization, TaskController.updateTask)
router.patch('/tasks/:id', authorization, TaskController.modifyTaskCategory)
router.delete('/tasks/:id', authorization, TaskController.deleteTask)

module.exports = router