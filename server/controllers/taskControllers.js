const { User, Task } = require('../models')

class TaskControllers {

    static showAllTask(req, res, next) {
        Task.findAll()
            .then(task => {
                return res.status(200).json(task)
            })
            .catch(err => {
                next(err)
            })
    }

    static addTask(req, res, next) {
        const username = req.userData.email.split('@').slice(0, 1)
        let inputTask = {
            tittle: req.body.tittle,
            category: req.body.category,
            description: req.body.description,
            author: username[0],
            UserId: req.userData.id
        }

        Task.create(inputTask)
            .then(task => {
                return res.status(201).json(task)
            })
            .catch(err => {
                next(err)
            })
    }

    static searchId(req, res, next) {
        Task.findByPk(+req.params.id)
            .then(data => {
                return res.status(200).json(data)
            })
            .catch(err => {
                next(err)
            })
    }

    static editTask(req, res, next) {
        const editTaskData = {
            tittle: req.body.tittle,
            category: req.body.category,
            description: req.body.description,
            UserId: req.userData.id
        }
        Task.update(editTaskData, {
            where: {
                id: +req.params.id
            }
        })
            .then(data => {
                return res.status(201).json(data)
            })
            .catch(err => {
                next(err)
            })
    }

    static editElementTask(req, res, next) {
        const elementEdit = {
            category: req.body.category
        }
        Task.update(elementEdit, {
            where: {
                id: +req.params.id
            }
        })
            .then(data => {
                return res.status(201).json(data)
            })
            .catch(err => {
                next(err)
            })
    }

    static deleteTask(req, res, next) {
        Task.destroy({
            where: {
                id: +req.params.id
            }
        })
            .then(data => {
                return res.status(200).json(data)
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = TaskControllers