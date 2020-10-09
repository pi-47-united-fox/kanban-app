const { User, Task } = require("../models/index")
const { comparePassword } = require("../helpers/bcrypt")
const { signToken } = require("../helpers/jwt")
const { OAuth2Client } = require('google-auth-library');


class UserController {
    static homeController(req, res, next) {
        res.status(200).json({
            message: "welcome to Kanban App"
        })
    }

    static register(req, res, next) {
        let newUser = {
            email: req.body.email,
            password: req.body.password
        }

        User.create(newUser)
            .then(data => {
                res.status(201).json({
                    id: data.id,
                    email: data.email,
                    organization: data.organization
                })
            })
            .catch(err => {
                console.log(err)
            }) 
    }

    static login(req, res, next) {
        let email = req.body.email
        let password = req.body.password
        User.findOne({
            where: {
                email: email
            }
        })
            .then(data => {
                if(!data) {
                    res.status(404).json({
                        message: "Wrong email/password"
                    })
                } else {
                    if(!comparePassword(password, data.password)) {
                        res.status(404).json({
                            message: "Wrong email/password"
                        })
                    } else {
                        res.status(200).json({
                            access_token: signToken({
                                id: data.id,
                                email: data.email,
                                organization: data.organization
                            })
                        })
                    }
                }
            })
            .catch(err => {
                console.log(err)
            })

    }

    static newGoogleLogin(req, res, next) {
        const client = new OAuth2Client("639126342145-3cuj7836kqi0gn02md1baqivbkb1hkqd.apps.googleusercontent.com")
        let email = ''
        console.log(req.headers.google_access_token)

        client.verifyIdToken({
            idToken: req.headers.google_access_token,
            audience: "639126342145-3cuj7836kqi0gn02md1baqivbkb1hkqd.apps.googleusercontent.com"
        })
        .then(ticket => {
            let payload = ticket.getPayload()
            email = payload['email']
            return User.findOne({
                where: {
                    email: email
                }
            })

        })
        .then(user => {
            if (!user) {
                let userObj = {
                    email: email,
                    password: "supernatural"
                }
                return User.create(userObj)
            } else {
                return user
            }
        })
        .then(user => {
            let access_token  = signToken({id: user.id, email: user.email, organization: user.organization})
            return res.status(201).json({
                access_token
            })
        })
        .catch(err => {
            console.log(err)
        })
    }




}

module.exports = UserController