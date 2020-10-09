const { User } = require('../models')
const { OAuth2Client } = require('google-auth-library')
const { comparePassword } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jwt')


class UserController{
    static register(req,res,next){
        const input = {
            email: req.body.email,
            password: req.body.password
        }
        User.create(input)
        .then(data=> {
            res.status(201).json({
                id: data.id,
                email: data.email
            })
        })
        .catch(err=>{
            next(err)
        })
    }
    static async login(req,res,next){
        const input = {
            email: req.body.email,
            password: req.body.password
        }
        try {
            const user = await User.findOne({
                where: {
                    email: input.email
                }
            })
            if(!user) {
                res.status(401).json({
                    name: "Unauthorized",
                    message: "Wrong email/password"
                })
            } else if (!comparePassword(input.password, user.password)){
                res.status(401).json({
                    name: "Unauthorized",
                    message: "Wrong email/password"
                })
            } else {
                const access_token = signToken({
                    id: user.id,
                    email: user.email
                })
                res.status(200).json({
                    access_token: access_token,
                    userId: user.id,
                    message: "User Success Login"
                })
            }
        } catch (err){
            next(err)
        }
    }
    static googleLogin(req,res,next){
        const client = new OAuth2Client(process.env.CLIENT_ID)
        let emailGoogle
        client.verifyIdToken({
            idToken: req.headers.google_access_token,
            audience: process.env.CLIENT_ID
        })
        .then(({payload}) => {
            emailGoogle = payload.email
            return User.findOne({
                where: {email:emailGoogle}
            })
        })
        .then(resultuser => {
            if(!resultuser){
                var userGoogle = {
                    email: emailGoogle,
                    password: 'passwordrandom'
                }
                return User.create(userGoogle)
            } else {
                return resultuser
            }
        })
        .then(user => {
            const access_token = signToken({
                id: user.id,
                email: user.email
            })
            return res.status(200).json({
                access_token,
                UserId: user.id,
                message:'Google User Success Login'
            })
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = UserController