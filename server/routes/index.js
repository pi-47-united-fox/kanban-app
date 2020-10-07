const TaskController = require('../controllers/taskController')
const UserController = require('../controllers/userController')

const router = require('express').Router()

router.get('/tasks', TaskController.getAllTasks)
router.get('/tasks/:id', TaskController.getFindOneTasks)

router.post('/tasks', TaskController.postCreateTasks)

router.patch('/tasks/:id', TaskController.patchTasks)

router.delete('/tasks/:id',TaskController.deleteTasks)

router.post('/register',UserController.register)
router.post('/login', UserController.login)

router.post('/googleLogin',UserController.googleLogin)

module.exports = router