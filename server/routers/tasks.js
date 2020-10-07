const router = require('express').Router()
const TaskController = require('../controllers/taskController');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');

router.get('/', authentication, TaskController.getAllTasksC)
router.post('/', authentication, TaskController.addTaskC)
router.get('/:id', authentication, TaskController.findTaskC)
router.put('/:id', authentication, authorization, TaskController.editTaskC)
router.patch('/:id', authentication, authorization, TaskController.editTaskCategoyC)
router.delete('/:id', authentication, authorization, TaskController.deleteTaskC)

module.exports = router