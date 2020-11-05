const router = require('express').Router()
const UserControllers = require('../controllers/userControllers')

router.get('/', (req, res) => {
    res.send(`user routes`)
})
// router.post('/login', UserControllers.login)
// router.post('/register', UserControllers.register)
// router.post('/google',UserControllers.googleSignIn)
module.exports = router