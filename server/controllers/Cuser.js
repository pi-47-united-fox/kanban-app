const {User,Task} = require('../models/index')
const Helper = require ('../helper/helper')
const { OAuth2Client } = require('google-auth-library');

class CUser{
    static async registerHandler(req, res, next) {
        const obj = {
            email: req.body.email,
            password: req.body.password
        }
        try {
            const data = await User.create(obj)

            res.status(201).json({
                id: data.id,
                email: data.email,
                organization: data.organization
            })
        }
        catch (err) {
            next(err)
        }
    }

    static async loginHandler(req, res, next) {
        const obj = {
            email: req.body.email,
            password: req.body.password
        }

        try {
            const data = await User.findOne({
                where: {
                    email: obj.email
                }
            })

            if (!data) {
                next({
                    name: "Unauthorized",
                    message: "Wrong email/password"
                })
            }
            else if (!Helper.comparePassword(obj.password, data.password)) {
                next({
                    name: "Unauthorized",
                    message: "Wrong email/password"
                })
            }
            else {
                const obj = {
                    id: data.id,
                    email: data.email
                }
                const access_token = Helper.signToken(obj)
                res.status(200).json({
                    access_token
                })
                req.headers = access_token
            }


        }
        catch (err) {
            next(err)
        }
    }

    static googleLoginHandler(req, res, next) {
        const client = new OAuth2Client(process.env.CLIENT_ID)
        //console.log(client)
        let email = ''
        //console.log(req.body,'xxxxxx')
        client.verifyIdToken({
            idToken: req.body.google_access_token,
            audience: process.env.CLIENT_ID
        })
        .then(ticket => {
            console.log('masuk gk ya',ticket)
    
            let payload = ticket.getPayload()
            email = payload['email']
            return User.findOne({ where: { email: email } })
        })
        .then(user => {
            if (!user) {
                let userObj = {
                    email: email,
                    password: 'randompassword'
                }
                return User.create(userObj)
            }
            else {
                return user
            }
        })
        .then(user => {
            const access_token = Helper.signToken({ id: user.id, email: user.email })
            return res.status(201).json({ access_token })
        })
        .catch(err => {
            next(err)
        })
    }

    

}

module.exports = CUser