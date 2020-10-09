const route = require("express").Router()
const routeTask = require('./task')
const routeUser = require('./user')

route.use("/", routeUser)
route.use("/", routeTask)

module.exports = route

