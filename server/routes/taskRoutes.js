const TaskController = require('../controllers/taskController')
const authorization = require('../middlewares/authorization')

const router = require('express').Router()

router.get('/', TaskController.getAllTasks)

router.post('/', TaskController.postCreateTasks)

router.patch('/:id', authorization, TaskController.patchTasks)

router.delete('/:id', authorization,TaskController.deleteTasks)

module.exports = router