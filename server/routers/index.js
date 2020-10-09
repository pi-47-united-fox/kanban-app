const router = require('express').Router()
const UserController = require('../controllers/userController');
const task = require('./tasks')

router.post('/register', UserController.registerUserC)
router.post('/login', UserController.loginUserC)
router.post('/google', UserController.googleLoginC)



router.use('/tasks', task)

module.exports = router