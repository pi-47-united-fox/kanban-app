const router = require('express').Router()
const { editTask } = require('../controllers/taskControllers')
const TaskControllers = require('../controllers/taskControllers')
const authorization = require('../middleware/authorization')

router.get('/', TaskControllers.showAllTask)
router.post('/', TaskControllers.addTask)
router.get('/:id', authorization, TaskControllers.searchId)
router.put('/:id', authorization, TaskControllers.editTask)
router.patch('/:id', authorization, TaskControllers.editElementTask)
router.delete('/:id', authorization, TaskControllers.deleteTask)

module.exports = router