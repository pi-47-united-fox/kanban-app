"use strict";

const { User, Organization } = require("../models");
const defaultPic = require("../helpers/defaultPicture");
const { createToken } = require("../helpers/jwt");
const { comparePassword } = require("../helpers/encyrpt");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.CLIENT_ID);

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
					next({ name: "BadRequestOrganization" });
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

		User.findOne({
			where: { email: userData.email },
			include: { model: Organization, attributes: ["name"] },
		})
			.then((result) => {
				if (result && comparePassword(userData.password, result.password)) {
					const {
						id,
						email,
						full_name,
						profile_pic,
						OrganizationId,
						Organization,
					} = result;
					const access_token = createToken({ id, email, OrganizationId });
					res.status(201).json({
						id,
						access_token,
						full_name,
						profile_pic,
						organization_name: Organization.name,
					});
				} else {
					next({ name: "WrongCredential" });
				}
			})
			.catch((err) => {
				next(err);
			});
	}

	static googleSignIn(req, res, next) {
		const token = req.body.token;
		let user = null;
		client
			.verifyIdToken({
				idToken: token,
				audience: process.env.CLIENT_ID,
			})
			.then((ticket) => {
				const payload = ticket.getPayload();
				user = {
					full_name: `${payload.given_name} ${payload.family_name}`,
					email: payload.email,
					password: process.env.DEFAULT_PASS,
					profile_pic: defaultPic(),
					OrganizationId: 2,
				};
				return User.findOne({ where: { email: user.email } });
			})
			.then((data) => {
				console.log(user);
				return !data ? User.create(user) : data;
			})
			.then((data) => {
				const { id, email, full_name, profile_pic, OrganizationId } = data;
				const access_token = createToken({ id, email, OrganizationId });
				res.status(201).json({
					id,
					access_token,
					full_name,
					profile_pic,
					organization_name: "Hacktiv8",
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}
}

module.exports = UserController;
