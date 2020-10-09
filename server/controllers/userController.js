const { User } = require('../models/index')
const { comparePass } = require('../helpers/bcrypt')
const jwt = require('jsonwebtoken')
const verifyGoogle = require('../helpers/googleVerify')

class UserController {
    static register(req, res, next) {
        const newUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
        User.create(newUser)
            .then(result => {
                return res.status(201).json({
                    id: result.id,
                    name: result.name,
                    email: result.email
                })
            })
            .catch(err => {
                return next(err)
            })
    }

    static async login(req, res, next) {
        const loginData = {
            email: req.body.email,
            password: req.body.password
        }

        const user = await User.findOne({
            where: {
                email: loginData.email
            }
        })

        try {
            if (!user) {
                return next({
                    name: "BadRequest",
                    message: 'Wrong email/password'
                })
            } else if (!comparePass(loginData.password, user.password)) {
                return next({
                    name: "BadRequest",
                    message: 'Wrong email/password'
                })
            } else {
                const access_token = jwt.sign({ id: user.id, email: user.email }, process.env.SECRET)
                res.status(200).json({
                    access_token
                })
            }
        } catch (err) {
            return next({
                name: 'InternalServerError',
                message: err.message
            })
        }
    }

    static async googleLogin(req, res, next) {
        const google_token = req.headers.google_token

        try {
            const payload = await verifyGoogle(google_token)
            const email = payload.email
            const user = await User.findOne({
                where: {
                    email
                }
            })
            const password = process.env.DEFAULT_GOOGLE_USER_PASSWORD
            if (user) {
                let check = comparePass
                if (check) {
                    const access_token = jwt.sign({ id: user.id, email: user.email, }, process.env.SECRET)
                    res.status(200).json({ access_token })
                }
            } else {
                const newUser = await User.create({
                    name,
                    email,
                    password
                })
                const access_token = jwt.sign({ id: newUser.id, email: newUser.email, }, process.env.SECRET)
                res.status(200).json({ access_token })
            }
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = UserController