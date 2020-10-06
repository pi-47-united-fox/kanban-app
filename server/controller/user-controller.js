const { User } = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const SECRET = process.argv.env
class UserController {
    static register(req, res, next) {
        let user = {
            email: req.body.email,
            password: req.body.password
        }
        User.create(user)
            .then(data => {
                return res.status(201).json(data)
            })
            .catch(err => {
                return next(err)
            })
    }

    static login(req, res, next) {
        let user = {
            email: req.body.email,
            password: req.body.password
        }
        User.findOne({
            where: {
                email: user.email
            }
        })
            .then(data => {
                if (data && bcrypt.compareSync(user.password, data.password)) {
                    let access_token = jwt.sign({ id: data.id, email: data.email }, SECRET)
                    return res.status(200).json({ access_token })
                } else {
                    return res.status(400).json({message:`Invalaid email or password`})
                }
            })
            .catch(err => {
                return next(err)
            })
    }
}


module.exports = UserController