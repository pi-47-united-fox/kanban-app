const router = require('express').Router()
const TaskController = require('../controller/task-controller')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')




router.use(authentication)
router.get('/', TaskController.findAllTask)
router.get('/', authorization, TaskController.findById)
router.post('/', authorization, TaskController.addTask)
router.delete('/:id', authorization, TaskController.deleteTask)
router.get('/:id', authorization, TaskController.editTask)
router.get('/:id', authorization, TaskController.editCategory)


module.exports = router