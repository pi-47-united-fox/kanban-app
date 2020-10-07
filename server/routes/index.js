"use strict";

const router = require("express").Router();
const UserController = require("../controllers/userController");
const OrganizationController = require("../controllers/organizationController");
const TaskController = require("../controllers/taskController");
const { authentication, authorization } = require("../middlewares/security");

router.post("/users/login", UserController.login);
router.post("/users/register", UserController.register);

router.post("/organizations", OrganizationController.create);
router.get("/organizations", OrganizationController.getAll);

router.use(authentication);

router.get("/tasks", TaskController.getAll);
router.post("/tasks", TaskController.addTask);
router.patch("/tasks/:id", authorization, TaskController.changeCategory);
router.delete("/tasks/:id", authorization, TaskController.deleleTask);

module.exports = router;
