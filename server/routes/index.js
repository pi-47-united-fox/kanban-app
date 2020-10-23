const router = require('express').Router()
const CUser = require('../controllers/Cuser')
const CTask = require('../controllers/Ctask')
const { authentication,authorization } = require('../middlewares/middleware')

router.get('/',(req,res)=>{
    res.send(`Welcome to Kanban App v1.1`)
})

router.post('/register',CUser.registerHandler)
router.post('/login',CUser.loginHandler)
router.post('/googleLogin',CUser.googleLoginHandler)
router.use(authentication)
router.get('/tasks',CTask.listHandler)
router.post('/tasks',CTask.addHandler)
router.get('/tasks/:id',CTask.findHandler)
router.put('/tasks/:id',authorization,CTask.putHandler)
router.patch('/tasks/:id',authorization,CTask.patchHandler)
router.delete('/tasks/:id',authorization,CTask.deleteHandler)


module.exports = router