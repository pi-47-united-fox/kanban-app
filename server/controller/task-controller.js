const { User, Task } = require('../models')

class TaskController {
    static findAllTask(req, res, next) {
        Task.findAll()
            .then(data => {
                return res.status(201).json(data)
            })
            .catch(err => {
                return next(err)
            })
    }
    static findById(req, res, next) {
        idUser = req.params.id
        Task.findOne({
            where: {
                id: idUser
            }
        })
            .then(data => {
                return res.status(201).json(data, {
                    message: `ini data dari id : ${idUser}`
                })
            })
            .catch(err => {
                return next(err)
            })
    }
    static addTask(req, res, next) {
        let task = {
            title: req.body.title,
            category: req.body.category,
            userId: req.userData.id
        }
        Task.create(task, {
            include: User
        })
            .then(data => {
                return res.status(201).json(data, {
                    message: 'Task has been created'
                })
            })
            .catch(err => {
                return next(err)
            })
    }
    static deleteTask(req, res, next) {
        Task.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(data => {
                if (data) {
                    return status(201).json({
                        message: 'Deleted successfully'
                    })
                } else {
                    return res.status(400).json({
                        message: `Data not found, faild to delete`
                    })
                }
            })
    }
    static editTask(req, res, next) {
        let task = {
            title: req.body.title,
        }
        Task.update(task, {
            where: {
                id: req.params.id
            }
        })
            .then(data => {
                return res.status(201).json({
                    message: `Update title successfully`
                })
            })
            .catch(err => {
                return next(err)
            })
    }
    static editCategory(req, res, next) {
        let task = {
            status: req.body.status,
        }
        Task.update(task, {
            where: {
                id: req.params.id
            }
        })
            .then(data => {
                return res.status(201).json({
                    message: `Update status successfully`
                })
            })
            .catch(err => {
                return next(err)
            })
    }

}


module.exports = TaskController