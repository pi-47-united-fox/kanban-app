const { User, Task } = require("../models/index")
const { comparePassword } = require("../helpers/bcrypt")
const { signToken } = require("../helpers/jwt")

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




}

module.exports = UserController