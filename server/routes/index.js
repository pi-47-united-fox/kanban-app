const route = require('express').Router()
const UserRouter = require('./userRouter')
const TaskRouter = require('./taskRouter')




route.use(UserRouter)
route.use('/tasks',TaskRouter)




module.exports = route