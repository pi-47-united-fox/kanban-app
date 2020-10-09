const router = require('express').Router()

const userRoutes = require('./userRoutes')
const taskRoutes = require('./taskRoutes')
const authentication = require('../middlewares/authentication')

router.use('/users', userRoutes)

router.use(authentication)
router.use('/tasks', taskRoutes)

module.exports = router