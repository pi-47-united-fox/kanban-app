const { User } = require('../models')
const { verifyToken,signToken } = require('../helpers/jwt')
const { comparePassword } = require('../helpers/bcryptjs')
const { OAuth2Client } = require('google-auth-library')

class UserController{
    static loginHandler(req,res,next){
        const { email,password } = req.body
        console.log('nasuk')
        User.findOne({where:{email}})
            .then(result=>{
                if(!result){
                    next({name:'LoginFail',message:'Wrong Email/Password',status:401})
                }else if(!comparePassword(password,result.password)){
                    next({name:'LoginFail',message:'Wrong Email/Password',status:401})
                }else{
                    const access_token = signToken({id:result.id,email:result.email})
                    res.status(200).json({access_token})
                }
            })
            .catch(err=>{
                console.log(err)
                next(err)
            })
    }

    static registerHandler(req,res,next){
        const { email,password } = req.body
        let newUser = {email,password}
        User.findOne({where:{email}})
            .then(result=>{
                console.log(result)
                if(result){
                    return next({name:'Email Unavailable', message:'email already registered', status:409})
                }else{
                    return User.create(newUser)
                }
            })
            .then(result2=>{
                if(result2){
                    return res.status(201).json({message:'success register',id:result2.id,email:result2.email})
                }else{
                    return next({name:'Email Unavailable', message:'email already registered', status:409})
                }
            })
            .catch(err=>{
                res.status(500).json({message:err.errors})
            })
    }


    static googleLogin(req,res,next){
        console.log("masuk googlelogin")
        let emailGoogle
        const client = new OAuth2Client(process.env.CLIENT_ID);

        client.verifyIdToken({
            idToken: req.headers.google_access_token,
            audience: process.env.CLIENT_ID
        })
        .then(({payload})=>{
            emailGoogle = payload.email
            return User.findOne({where:{email:emailGoogle}})
        })
        .then(resultuser=>{
            if(!resultuser){
                var userGoogle={
                    email:emailGoogle,
                    password:'123'
                }
                return User.create(userGoogle)
            }else{
                return resultuser
            }
        })
        .then(user=>{
            const access_token = signToken({id:user.id,email:user.email})
            return res.status(201).json({access_token,userId:user.id,message:'berhasil login'})
        })
        .catch(err=>{
            next(err)
        })
    }
}




module.exports = {
    UserController
}