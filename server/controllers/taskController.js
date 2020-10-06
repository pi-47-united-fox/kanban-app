const { Task, User } = require('../models/index');

class TaskController {

    static async getTask(req, res, next) {

        console.log(req.userData)
        try {
            res.send(req.userData.name)
            let task = await Task.findAll({ include: [User] })
            res.status(200).json(task)
        } catch (err) {
            res.status(500).json(err)
        }

    }
    static async postTask(req, res, next) {
        const { title, category } = req.body

        try {
            let value = {
                title: title,
                category: category,
                UserId: req.userData.id
            }
            let data = await Task.create(value)
            res.status(200).json(data)

        } catch (err) {
            res.status(500).json(err)
        }
    }
    static async getTaskById(req, res, next) {
        try {
            let data = await Task.findByPk(req.params.id)
            res.status(200).json(data)

        }
        catch (err) {
            res.status(500).json(err)
        }

    }
    static async putTaskById(req, res, next) {
        const { title, category } = req.body

        try {
            let value = {
                titile: title,
                category: category
            }
            let data = await Task.update(value, {
                where: { id: req.params.id },
                returning: true
            })
            res.status(200).json(data[1][0])

        } catch (err) {
            res.status(500).json(err)
        }

    }
    static async patchTaskById(req, res, next) {
        try {
            let data = await Task.update({ category: req.body.category }, {
                where: { id: req.params.id },
                returning: true
            })

            res.status(200).json(data[1][0])

        } catch (err) {
            res.status(500).json(err)
        }

    }
    static async deleteTaskById(req, res, next) {
        try {
            let data = await Task.destroy({
                where:
                    { id: req.params.id }
            })

            if (data === 0) {
                res.status(400).json({
                    message: 'data not found'
                })
            } else {
                res.status(200).json({
                    message: 'delete compelete'
                })
            }
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = {
    TaskController
};
