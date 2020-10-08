const { Task } = require('../models')

const Authorization=(req,res,next)=>{
    const id = +req.params.id
    Task.findByPk(id)
        .then(result=>{
            if(!result){
                next({name:'task not found', message:'Task not found',status:404})
            }else if(req.userData.id !== result.userId){
                next({name:'not authorized',message:'Not Authorized',status:401})
            }else{
                next() 
            }
        })
        .catch(err=>{
            console.log(err)
            next(err)
        })
}


module.exports = {
    Authorization
}