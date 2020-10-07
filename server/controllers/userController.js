"use strict";

const { User, Organization } = require("../models");
const defaultPic = require("../helpers/defaultPicture");
const { createToken } = require("../helpers/jwt");
const { comparePassword } = require("../helpers/encyrpt");

class UserController {
	static register(req, res, next) {
		const userData = {
			email: req.body.email,
			password: req.body.password,
			full_name: req.body.full_name || "",
			profile_pic: defaultPic(),
			OrganizationId: req.body.OrganizationId,
		};

		Organization.findByPk(userData.OrganizationId)
			.then((result) => {
				if (!result) {
					next({ name: "BadRequestOrganization"});
				} else {
					return User.create(userData);
				}
			})
			.then(({ email, full_name, profile_pic, OrganizationId }) => {
				res.status(201).json({ email, full_name, profile_pic, OrganizationId });
			})
			.catch((err) => {
				next(err);
			});
	}

	static login(req, res, next) {
		const userData = {
			email: req.body.email,
			password: req.body.password,
        };

		User.findOne({ where: { email: userData.email } })
			.then((result) => {
				if (result && comparePassword(userData.password, result.password)) {
					const { id, email, full_name, profile_pic, OrganizationId } = result;
					const access_token = createToken({ id, email, OrganizationId });
					res.status(201).json({
						access_token,
						full_name,
						profile_pic,
					});
				} else {
					next({ name: "WrongCredential" });
				}
			})
			.catch((err) => {
				next(err);
			});
	}
}

module.exports = UserController;
