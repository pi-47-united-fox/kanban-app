const {Task,User} = require('../models/index')

class TaskController {
    static async addTask(req, res, next) {
        const newTask = {
            title: req.body.title,
            category:req.body.category,
            UserId: req.userData.id
        }
        try{
            const data = await Task.create(newTask)
            res.status(201).json(data)
        } catch (err) {
            res.status(500).json(err)
        }

    }
    static async listTasks(req, res, next) {
        try{
            const data = await Task.findAll({include:[User]})
            res.status(200).json(data)
        } catch(err) {
            res.status(500).json(err)
        }

    }
    static async updateTask(req, res, next) {
        const idTask = req.params.id
        const editTask = {
            title: req.body.title,
            category: req.body.category,
        }
        try {
            const data = await Task.update(editTask,{
                where: {
                    id: idTask
                },
                returning: true
            })
            res.status(200).json(data[1][0])
        } catch (err) {
            res.status(500).json(err)
        }

    }
    static async updateCategory(req, res, next) {
        const idTask = req.params.id
        const editCategory = {
            category: req.body.category,
        }
        try {
            const data = await Task.update(editCategory,{
                where: {
                    id: idTask
                },
                returning: true
            })
            res.status(200).json({category: data[1][0].category})
        } catch (err) {
            res.status(500).json(err)
        }

    }
    static async deleteTask(req, res, next) {
        const idTask = req.params.id
        try{
            const data = await Task.destroy({where:
                {id: +idTask}
            })
            res.status(200).json({msg:'Task has been deleted.'})
        } catch (err) {
            res.status(500).json(err)
        }

    }
}
module.exports = TaskController
