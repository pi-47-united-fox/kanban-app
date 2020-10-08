const { Task, User } = require("../models/index")

class TaskController {
    static findAllTasks(req, res, next) {
        let result = {
            backlog: [],
            todo: [],
            doing: [],
            completed: []
        }
        Task.findAll({ where:{category:'Backlog'}, include: User })
            .then(data => {
                result.backlog = data
                return Task.findAll({ where:{category:'Todo'}, include: User })
            })
            .then(data => {
                result.todo = data
                return Task.findAll({ where:{category:'Doing'}, include: User })
            })
            .then(data => {
                result.doing = data
                return Task.findAll({ where:{category:'Completed'}, include: User })
            })
            .then(data => {
                result.completed = data
                res.status(200).json(result)
            })
            .catch(err => {
                console.log(err)
            })
    }
    

    static findTaskByTaskId(req, res, next) {


    }

    static addTask(req, res, next) {
        let newTask = {
            title: req.body.title,
            category: req.body.category,
            UserId: req.userData.id
        }
        Task.create(newTask)
            .then(data => {
                res.status(201).json({
                    message: "A new task has been successfully added."
                })
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    static deleteTask(req, res, next) {
        let targetId = +req.params.id
        Task.findOne({
            where:{
                id: targetId
            }
        })
            .then(data => {
                if(data.UserId !== req.userData.id) {
                    res.status(401).json({
                        message: "You do not have an access."
                    })
                } else {
                    return Task.destroy({
                        where:{
                            id: data.id
                        }
                    })
                }
            })
            .then(data => {
                res.status(200).json({
                    message: "Task has been successfully deleted."
                })
            })
            .catch(err => {
                console.log(err)
            })

    }

    static editTask(req, res, next) {
        let targetId = +req.params.id
        let dataEdit = {
            title: req.body.title,
            category: req.body.category
        }

        Task.findOne({
            where: {
                id: targetId
            }
        })
            .then(data => {
                if(data.UserId !== req.userData.id) {
                    res.status(401).json({
                        message: "You do not have an access."
                    })
                } else {
                    return Task.update(dataEdit, {
                        where: {
                            id: data.id
                        }
                    })
                }
            })
            .then(data => {
                res.status(200).json({
                    message: "Task has been successfully updated."
                })
            })
            .catch(err => {
                console.log(err)
            })

    }

    static upgradeTask(req, res, next) {
        console.log("masuk")
        let targetId = +req.params.id
        let dataEdit = {
            category: ''
        }
        Task.findOne({
            where:{
                id: targetId
            } 
        })
            .then(data => {
                if(data.category === 'Backlog') {
                    dataEdit.category = 'Todo'
                    return Task.update(dataEdit, {
                        where: {
                            id: data.id
                        }
                    })
                } else if(data.category === 'Todo') {
                    dataEdit.category = 'Doing'
                    return Task.update(dataEdit, {
                        where: {
                            id: data.id
                        }
                    })
                } else if(data.category === 'Doing') {
                    dataEdit.category = 'Completed'
                    return Task.update(dataEdit, {
                        where: {
                            id: data.id
                        }
                    })
                } else {
                    res.status(200).json({
                        message: "Congrats! Task has been already completed"
                    })
                }
            })
            .then(data => {
                res.status(200).json({
                    message: "Excellent! Keep doing a great job."
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    static downgradeTask(req, res, next) {
        let targetId = +req.params.id
        let dataEdit = {
            category: ''
        }
        Task.findOne({
            where:{
                id: targetId
            } 
        })
            .then(data => {
                if(data.category === 'Completed') {
                    dataEdit.category = 'Doing'
                    return Task.update(dataEdit, {
                        where: {
                            id: data.id
                        }
                    })
                } else if(data.category === 'Doing') {
                    dataEdit.category = 'Todo'
                    return Task.update(dataEdit, {
                        where: {
                            id: data.id
                        }
                    })
                } else if(data.category === 'Todo') {
                    dataEdit.category = 'Backlog'
                    return Task.update(dataEdit, {
                        where: {
                            id: data.id
                        }
                    })
                } else {
                    res.status(200).json({
                        message: "Task already in Backlog, start doing something. :("
                    })
                }
            })
            .then(data => {
                res.status(200).json({
                    message: "Uhh, keep doing your best no matter the result."
                })
            })
            .catch(err => {
                console.log(err)
            })

    }


}

module.exports = TaskController