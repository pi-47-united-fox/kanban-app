const { User } = require('../models/index')
const { comparePass } = require('../helpers/bcrypt')
const jwt = require('jsonwebtoken')
const { OAuth2Client } = require('google-auth-library')
const { use } = require('../routes/user')

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

    static googleLogin(req, res) {
        const client = new OAuth2Client(process.env.CLIENT_ID_GOOGLE)
        client.verifyIdToken({
                idToken: req.headers.google_access_token,
                audience: process.env.CLIENT_ID_GOOGLE,
            })
            .then(ticket => {
                let payload = ticket.getPayload()
                email = payload['email']
                return User.findOne({ where: { email } })
            })
            .then(user => {
                if (!user) {
                    let userObj = {
                        email: email,
                        password: process.env.DEFAULT_GOOGLE_USER_PASSWORD
                    }
                    return User.create(userObj)
                } else {
                    return user
                }
            })
            .then(user => {
                const access_token = generateToken({ id: user.id, email: user.email })
                return res.status(201).json(access_token)
            })
            .catch(err => {

            })
    }
}

module.exports = UserController