"use strict";

const { Organization } = require("../models");

class OrganizationController {
	static create(req, res, next) {
		Organization.create({ name: req.body.name })
			.then(({ id, name }) => {
				res.status(201).json({ id, name });
			})
			.catch((err) => {
				next(err);
			});
	}

	static getAll(req, res, next) {
		Organization.findAll()
			.then((results) => {
				results = results.map(({ id, name }) => {
					return { id, name };
				});
				res.status(200).json(results);
			})
			.catch((err) => {
				next(err);
			});
	}
}

module.exports = OrganizationController;
