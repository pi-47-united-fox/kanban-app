const router = require('express').Router()
const userRouter = require('../router/user-router')
const taskRouter = require('../router/task-router')


router.get('/', (req, res) => {
    res.send('this is routing ')
})

router.use('/', userRouter)
router.use('/tasks', taskRouter)




module.exports = router