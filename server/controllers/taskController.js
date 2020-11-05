const { Task } = require('../models/index.js')

class TaskController{
    static getAllTask(req, res, next){
        Task.findAll({
            attributes: { exclude: ['updatedAt', 'createdAt'] }
          })
            .then(result => {
                if(result){
                    // perlu diedit agar bisa sesuai object yang akan ditampilkan di client
                    let obj = {backlog: [], todo: [], doing: [], done: [] }
                                       
                    result.forEach(el => {
                        if(el.category === 'backlog'){
                            
                                obj.backlog.push(el)
                            
                        }
                        if(el.category === 'todo'){
                            obj.todo.push(el)
                            
                        }
                        if(el.category === 'doing'){
                            
                                obj.doing.push(el)
                            
                        }
                        if(el.category === 'done'){
                            
                                obj.done.push(el)
                            
                        }

                    })
                    res.status(200).json(obj)
                }
                else{
                    next({name: 'Not Found', message: 'Data not found!'})
                }
            })
            .catch(err => {
                // res.status(400).json(err)
                // res.send(err)
                next(err)
            })

    }

    static addTask(req, res, next){
        let obj = {
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            assigned_to: req.body.assigned_to,
            UserId: req.userData.id
        }

        Task.create(obj)
            .then(result => {
                res.status(201).json(result)
            })
            .catch(err => {
                next(err)
            })
    }

    static getTaskById(req, res, next){
        Task.findOne({where: {id: +req.params.id}})
            .then(result => {
                if(result){
                    res.status(200).json(result)
                }
                else{
                    next({name: 'Not Found', message: 'Data not found!'})
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static updateTask(req, res, next){
        let obj = {
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            assigned_to: req.body.assigned_to
        }

        Task.update(obj, {
            where:{
                id: +req.params.id
            }
        })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                // res.status(404).json(err)
                next(err)
            })
    }

    static modifyTaskCategory(req, res, next){
        let obj = {
            category: req.body.category
        }

        Task.update(obj, {
            where:{
                id: +req.params.id
            }
        })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                next(err)
            })
    }

    static deleteTask(req, res, next){
        Task.destroy({
            where: {
                id: +req.params.id
            }
        })
            .then(() => {
                res.status(200).json({
                    message: "A task has been deleted successfully."
                })
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = TaskController