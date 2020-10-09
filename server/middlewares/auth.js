const jwt = require("jsonwebtoken")
const secret_key = 'rahasiabosq'
const {User, Task} = require("../models")
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
    console.log("authorization");
    Task.findByPk(req.params.id)
        .then(task=>{ 
            if(task){
                if(task.UserId == req.userData.id){
                    next()
                }else{
                    res.status(401).json({"message":"Not Authorized"})
                } 
            }else{ 
                res.status(404).json({"message":"Task not found"})
            }

        })
        .catch(err=>{
            res.status(500).json(err)
        })

}

module.exports = {authentication,authorization}