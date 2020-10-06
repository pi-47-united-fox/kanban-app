const router = require('express').Router()
const UserController = require('../controllers/user.js')
const TaskController = require('../controllers/task')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.use(authentication)
router.post('/task',TaskController.addTask)
router.get('/task',TaskController.listTasks)
router.put('/task/:id',authorization, TaskController.updateTask)
router.patch('/task/:id',authorization, TaskController.updateCategory)
router.delete('/task/:id',authorization, TaskController.deleteTask)

module.exports = router