const { User, Task } = require('../models/index');
const { signToken } = require('../helper/jwt')
const { comparePassword } = require('../helper/bcrypt')

class UserController {
    static async register(req, res, next) {
        const { name, email, password } = req.body
        console.log(req.body)
        try {
            let user = await User.findOne({ where: { email: email } })
            if (user) {
                throw ({
                    message: 'email has been register !',
                    statusCode: 400
                })
            } else {

                let value = {
                    name: name,
                    email: email,
                    password: password,
                    organization: 'hacktiv8'
                }

                let createUser = await User.create(value)
                res.status(200).json({
                    id: createUser.id,
                    name: createUser.name,
                    email: createUser.email,
                    organization: createUser.organization
                })
            }
        }
        catch (err) {
            next(err)
        }
    }
    static async login(req, res, next) {
        const { email, password } = req.body

        try {
            let user = await User.findOne({ where: { email: email } })
            if (!user) {
                throw ({
                    name: "unauthorized",
                    message: 'wrong email/password !',
                    statusCode: 400
                })
            } else {
                let pass = comparePassword(password, user.password)
                if (!pass) {
                    throw ({
                        name: "unauthorized",
                        message: 'wrong email/password !',
                        statusCode: 400
                    })
                } else {
                    let access_token = signToken({
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        organization: user.organization
                    })
                    res.status(200).json({ access_token })
                }
            }
        } catch (err) {
            next(err)
        }


    }
    static googleLogin(req, res, next) {

    }
}

module.exports = {
    UserController
};
