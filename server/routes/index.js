const router = require('express').Router()
const RouterUser = require('./userRouter')
const RouterTask = require('./taskRouter')
const UserControllers = require('../controllers/userControllers')
const authentication = require('../middleware/authentification')


router.post('/login', UserControllers.login)
router.post('/register', UserControllers.register)
router.post('/googleSign', UserControllers.googleSignIn)

router.use(authentication)
router.use('/users', RouterUser)
router.use('/tasks', RouterTask)

module.exports = router