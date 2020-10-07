const {Task, User} = require('../models');

class TaskController {
    // Success
    static getAllTasksC (req, res, next) {
        // console.log ('masuk get all')
        Task.findAll({include: User})
        .then((result) => {
                res.status(200).json(result)
        }).catch((err) => {
            next(err)
        });
    }

    // Success
    static findTaskC (req, res, next) {
        Task.findByPk(req.params.id, {
            include: User
        }).then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            next(err)
        });
    }

    // Success
    static addTaskC (req, res, next) {
        Task.create({
            title: req.body.title,
            category: req.body.category,
            UserId: req.userData.id
        }).then((result) => {
            res.status(201).json(result)
        }).catch((err) => {
            next(err)
        });
    }

    // SUCCESS
    static editTaskC (req, res, next) {
        // console.log ('masuk', req.params.id)
        Task.update({
            title: req.body.title,
            category: req.body.category
        },{
            where: {
                id: req.params.id
            },
            returning: true
        }).then((result) => {
            res.status(200).json(result[1][0])
        }).catch((err) => {
            next(err)
        });
    }

    // SUCCESS
    static editTaskCategoyC (req, res, next) {
        Task.update({
            category: req.body.category
        },{
            where: {
                id: req.params.id
            },
            returning: true
        }).then((result) => {
            res.status(200).json(result[1][0])
        }).catch((err) => {
            next(err)
        });
    }

    // Success
    static deleteTaskC (req, res, next) {
        // console.log ('masuk delete')
        Task.destroy({
            where: {
                id: req.params.id
            }
        }).then((result) => {
            if (result == 1) {
                return res.status(200).json({
                    message: 'Task: success deleted'
                }) 
            } else {
                return next({name: 'not found'})
            }
        }).catch((err) => {
            next(err)
        });
    }
}

module.exports = TaskController