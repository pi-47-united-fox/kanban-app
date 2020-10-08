const { Task } = require('../models')



class TaskController{
    static getTaskHandler(req,res,next){
        Task.findAll({order:[['id','asc']]})
            .then(result=>{
                res.status(200).json({result})
            }).catch(err=>{
                console.log(err)
                next(err)
            })
    }

    static addTaskHandler(req,res,next){
        const { title } = req.body
        const userId = req.userData.id

        let newTask = {title,userId}

        Task.create(newTask)
            .then(result=>{
                res.status(201).json({id:result.id,title:result.title,category:result.category,userId:result.userId})
            })
            .catch(err=>{
                console.log(err)
                next(err)
            })
    }

    static editTaskHandler(req,res,next){
        const id = +req.params.id
        const category = req.query.category

        Task.update({category},{where:{id}})
            .then(()=>{
                res.status(200).json({message:'success update category'})
            })
            .catch(err=>{
                next(err)
            })
    }

    static deleteTaskHandler(req,res,next){
        let id = +req.params.id
        Task.destroy({where:{id}})
            .then(()=>{
                res.status(200).json({message:`delete task id = ${id} successfully`})
            })
            .catch(err=>{
                next(err)
            })
    }
}




module.exports = {
    TaskController
}