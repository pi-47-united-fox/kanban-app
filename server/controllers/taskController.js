const { Task } = require('../models')

class TaskController{
    static getAllTasks(req,res,next){
        Task.findAll({
            where: {
                userId: +req.userData.id
            }
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
            date: req.body.date,
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
            category: req.body.category
        }
        Task.update(patchTasks, {
            where: {
                id: +req.params.id
            }
        })
        .then(data => {
            res.status(200).json({message: 'Task Category Success to Update'})
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