const route = require('express').Router()
const { UserController } = require('../controllers')



route.post('/login', UserController.loginHandler)
route.post('/register',UserController.registerHandler)
route.post('/googlelogin', UserController.googleLogin)



module.exports = route