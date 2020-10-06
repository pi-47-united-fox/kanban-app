const { User }       = require('../models')
const BcriptJs       = require('../helpers/bcrypt')
const Jwt            = require('../helpers/jwt')

class UserControler {
    static registerUserC (req, res, next) {
        User.create({
            email: req.body.email,
            password: req.body.password
        }).then((result) => {
            return res.status(201).json({
                message: 'Success Created'
            })
        }).catch((err) => {
            return next(err)
        })
    }

    static loginUserC (req, res, next) {
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then((result) => {
            if (BcriptJs.check(req.body.password, result.password)) {
                let access_token = Jwt.generate(
                    result.id,
                    result.email
                )
                res.status(200).json({access_token})
            } else {
                return next({
                    name: 'invalid email pw input'
                })
            }
        }).catch((err) => {
            return next({
                name: 'invalid email pw input'
            })
        })
    }
}

module.exports = UserControler