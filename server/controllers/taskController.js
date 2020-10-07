"use strict";

const { Task } = require("../models");

class TaskController {
	static getAll(req, res, next) {
		Task.findAll({ where: { OrganizationId: req.userData.OrganizationId } })
			.then((results) => {
				res.status(200).json(results);
			})
			.catch((err) => {
				next(err);
			});
	}

	static addTask(req, res, next) {
		const taskData = {
			title: req.body.title,
			UserId: req.userData.id,
			CategoryId: req.body.CategoryId || 1,
			OrganizationId: req.userData.OrganizationId,
		};

		Task.create(taskData)
			.then((result) => {
				res.status(201).json(result);
			})
			.catch((err) => {
				next(err);
			});
	}

	static changeCategory(req, res, next) {
		Task.update({ CategoryId: req.body.CategoryId }, { where: { id: req.params.id } })
			.then((result) => {
				if (result) {
					res.status(200).json({ status: "Success" });
				} else {
					next({ name: "BadRequestPatch" });
				}
			})
			.catch((err) => {
				next(err);
			});
	}

	static deleleTask(req, res, next) {
		Task.destroy({ where: { id: req.params.id } })
			.then((result) => {
				if (result) {
					res.status(200).json({ status: "Success" });
				} else {
					next({ name: "BadRequestDelete" });
				}
			})
			.catch((err) => {
				next(err);
			});
	}
}

module.exports = TaskController;
