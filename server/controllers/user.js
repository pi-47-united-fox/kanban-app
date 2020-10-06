'use strict'
const { compare } = require('../helpers/bcrypt')
const {User} = require('../models/index')
const {signToken} = require('../helpers/jwt')


class UserController {
    static async register(req, res, next) {
        const newAccount = {
            email: req.body.email,
            password: req.body.password,
        }
        try{
            const data = await User.create(newAccount)
            //console.log(data)
            res.status(201).json(data)
        }catch (err) {
            res.status(err)
        }
    }
    static async login(req,res,next) {
        const account = {
            email: req.body.email,
            password: req.body.password,
        }

        try {
            const data = await User.findOne({
                where: {
                    email: account.email
                }
            })
            if(!data) {
                res.status(401).json({msg: "email/password is wrong."})
            }
            else if(!compare(account.password, data.password)) {
                res.status(401).json({msg: "email/password is wrong."})
            }
            else {
                const access_token = signToken({
                    id: data.id,
                    email:data.email
                })
                res.status(200).json({
                    id: data.id,
                    email:data.email,
                    access_token: access_token
                })
            }
        } catch (err) {
            res.status(500).json(err)
        }
    } 
}
module.exports = UserController
