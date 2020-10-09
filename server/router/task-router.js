const router = require('express').Router()
const TaskController = require('../controller/task-controller')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

router.use(authentication)
router.get('/', TaskController.findAllTask)
router.get('/:id', authorization, TaskController.findById)
router.post('/', TaskController.addTask)
router.delete('/:id', authorization, TaskController.deleteTask)
router.put('/:id', authorization, TaskController.editTask)
router.patch('/:id', authorization, TaskController.editCategory)


module.exports = router