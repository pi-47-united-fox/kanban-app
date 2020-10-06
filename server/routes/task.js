const { TaskController } = require('../controllers/taskController');
const route = require('express').Router()
const { authentication, authorization } = require('../midleware/auth')

route.use(authentication)
route.get("/task", TaskController.getTask)
route.post("/task", TaskController.postTask)
route.get("/task/:id", authorization, TaskController.getTaskById)
route.put("/task/:id", authorization, TaskController.putTaskById)
route.patch("/task/:id", authorization, TaskController.patchTaskById)
route.delete("/task/:id", authorization, TaskController.deleteTaskById)

module.exports = route

