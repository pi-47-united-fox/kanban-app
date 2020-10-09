"use strict";

const { Task, Category, User } = require("../models");

class TaskController {
	static getAll(req, res, next) {
		let categories = null;
		Category.findAll()
			.then((results) => {
				categories = results.map((el) => {
					return { id: el.id, name: el.name };
				});

				return Task.findAll({
					where: { OrganizationId: req.userData.OrganizationId },
					include: [
						{
							model: Category,
							attributes: ["name"],
						},
						{
							model: User,
							attributes: ["email"],
						},
					],
				});
			})
			.then((results) => {
				let output = {};
				categories.forEach((el) => {
					output[el.name] = [];
				});

				results.forEach(({ id, title, User, CategoryId, Category, createdAt }) => {
					output[Category.name].push({
						id,
						title,
						email: User.email,
						CategoryId,
						createdAt: createdAt.toLocaleDateString("id"),
					});
				});

				res.status(200).json(output);
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
