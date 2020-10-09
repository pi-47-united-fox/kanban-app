const { User, Task } = require('../models')

class TaskController {
    static findAllTask(req, res, next) {
        Task.findAll({
            include: User
        })
            .then(data => {
                return res.status(201).json(data)
            })
            .catch(err => {
                return next(err)
            })
    }
    static findById(req, res, next) {
        
        Task.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(data => {
                return res.status(201).json(data)
            })
            .catch(err => {
                return next(err)
            })
    }
    static addTask(req, res, next) {
        let task = {
            title: req.body.title,
            category: req.body.category,
            UserId: req.userData.id
        }
        Task.create(task, {
            include: User
        })
            .then(data => {
                console.log(data);
                return res.status(201).json(data)
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
                console.log(data, '<-----ini dari controller tasks');
                if (data) {
                    return res.status(201).json({
                        message: 'Deleted successfully'
                    })
                } else {
                    return res.status(400).json({
                        message: `Data not found, faild to delete`
                    })
                }
            })
            .catch(err => {
                return next(err)
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