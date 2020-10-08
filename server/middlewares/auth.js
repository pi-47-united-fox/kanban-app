const jwt = require("jsonwebtoken")
const secret_key = 'rahasiabosq'
const {User} = require("../models")
function authentication(req,res,next){
    const {access_token} = req.headers
    console.log(access_token);
    if(access_token){
        let decode = jwt.verify(access_token,secret_key)
        console.log(decode);
        req.userData = decode
        next()
    }else{
        res.status(401).json({"message":"Login is needed to access the page"})
    }
}

function authorization(req,res,next){

}

module.exports = {authentication,authorization}