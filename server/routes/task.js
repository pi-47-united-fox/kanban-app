const routes = require('express').Router()
const TaskController = require('../controllers/taskController')
const Authentication = require('../middlewares/auth')
const { Authorization } = require('../middlewares/author')

routes.get('/', TaskController.getTasks)
routes.use(Authentication)
routes.post('/', TaskController.addTask)
routes.put('/:id', Authorization, TaskController.updateTask)
routes.delete('/:id', Authorization, TaskController.deleteTask)

module.exports = routes