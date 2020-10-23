const {User,Task} = require('../models/index')

class CTask{
    static async listHandler(req,res,next){
        try{
            let obj = {backlog: [],todo:[], doing:[], done:[]}
            
            const backlog = await Task.findAll({where:{
                category: 'backlog'
            }, order: [["createdAt", "ASC"]]}) 

            const todo = await Task.findAll({where:{
                category: 'todo'
            }, order: [["createdAt", "ASC"]]}) 

            const doing = await Task.findAll({where:{
                category: 'doing'
            }, order: [["createdAt", "ASC"]]}) 

            const done = await Task.findAll({where:{
                category: 'done'
            }, order: [["createdAt", "ASC"]]}) 

            obj.backlog = backlog
            obj.todo = todo
            obj.doing = doing
            obj.done = done
            res.status(200).json(obj)
           
        }
        catch(err){
            next(err)
        }

    }

    static addHandler(req,res,next){
        const input = {
            title: req.body.title,
            category: req.body.category,
            UserId: +req.userData.id
        }
        Task.create(input)
        .then(data=>{
            res.status(201).json(data)
        })
        .catch(err=>{
            //console.log(JSON.stringify(err,null,2))
            next(err)
        })
    }

    static async findHandler(req,res,next){
        try{
           const data = await Task.findByPk(+req.params.id)

           if(data){
               res.status(200).json(data)
           }
           else{
            next({name: 'Not Found', message: 'Data not found!'})
           }
        }
        catch(err){
            next(err)
        }
    }

    static async putHandler(req,res,next){
        try{
            const inputBody = {
                title: req.body.title,
                category: req.body.category
            }
            const data = await Task.update(inputBody,{where:{
                id:+req.params.id, UserId: +req.userData.id
            }})

            if(!data[0]){
                next({name: 'Not Found', message: 'Data not found!'})
            }
            else{
                res.status(200).json(await Task.findByPk(+req.params.id))
            }
        }   
        catch(err){
            next(err)
        }
    }

    static async patchHandler(req,res,next){
        try{
            const inputBody = {
                category: req.body.category
            }
            const data = await Task.update(inputBody,{where:{
                id:+req.params.id, UserId: +req.userData.id
            }})

            if(!data[0]){
                next({name: 'Not Found', message: 'Data not found!'})
            }
            else{
                res.status(200).json(await Task.findByPk(+req.params.id))
            }
        }   
        catch(err){
            next(err)
        }
    }

    static async deleteHandler(req,res,next){
        try{
            const data = await Task.destroy({where:{id:+req.params.id, UserId: +req.userData.id}})

            if(data){
                res.status(200).json({message: "Task success to delete"})
            } 
            else{
                next({name: 'Not Found', message: 'Data not found!'})
            }

        }
        catch(err){
            next(err)
        }
    }

}

module.exports = CTask