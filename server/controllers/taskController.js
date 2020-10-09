const { Task } = require('../models')

class TaskController{
    static getAllTasks(req,res,next){
        Task.findAll({
            where: {
                userId: +req.userData.id
            },
            order:[['date','asc']]
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            next(err)
        })
    }
    static postCreateTasks(req,res,next){
        Task.create({
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            userId: +req.userData.id
        })
        .then(data=>{
            res.status(201).json(data) 
        })
        .catch(err=>{
            next(err)
        })
    }
    static patchTasks(req,res,next){
        const patchTasks = {
            title: req.body.title,
            description: req.body.description,
            category: req.body.category
        }
        Task.update(patchTasks, {
            where: {
                id: +req.params.id
            }
        })
        .then(data => {
            res.status(200).json({
                id: data.id,
                title: data.title,
                description: data.description,
                category: data.category
            })
        })
        .catch(err => {
            next(err)
        })
    }
    static deleteTasks(req,res,next){
        Task.destroy({
            where: {
                id: +req.params.id
            }
        })
        .then(data => {
            if(data === 1){
                res.status(200).json({message: 'Task Deleted'})
            } else {
                res.status(404).json({message: 'Invalid Task'})
            }
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = TaskController