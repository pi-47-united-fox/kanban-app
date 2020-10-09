const route = require('express').Router()
const { TaskController } = require('../controllers')
const { Authentication } = require('../middlewares/authentication')
const { Authorization } = require('../middlewares/authorization')



route.get('/', Authentication, TaskController.getTaskHandler)
route.post('/', Authentication, TaskController.addTaskHandler)

route.patch('/:id', Authentication, Authorization ,TaskController.editTaskHandler)
route.delete('/:id', Authentication, Authorization ,TaskController.deleteTaskHandler)



module.exports = route