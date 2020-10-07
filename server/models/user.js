"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers/encyrpt");

module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		static associate(models) {
			User.belongsTo(models.Organization, {
				targetKey: "id",
				foreignKey: "OrganizationId",
			});

			User.hasMany(models.Task, {
				sourceKey: "id",
				foreignKey: "UserId",
			});
		}
	}
	User.init(
		{
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Email is Required",
					},
					notEmpty: {
						msg: "Email is Required",
					},
					isEmail: {
						msg: "Email is Invalid",
					},
				},
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Password is Required",
					},
					notEmpty: {
						msg: "Password is Required",
					},
					len: {
						args: [6, 255],
						msg: "Password is Invalid, Minimal is 6 character",
					},
				},
			},
			full_name: DataTypes.STRING,
			profile_pic: {
				type: DataTypes.STRING,
				validate: {
					isUrl: {
						msg: "Profile Pic URL is Invalid",
					},
				},
			},
			OrganizationId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Organization is Required",
					},
					min: {
						args: 1,
						msg: "Organization ID start at 1",
					},
				},
			},
		},
		{
			hooks: {
				beforeCreate: (user) => {
					user.password = hashPassword(user.password);
				},
			},
			sequelize,
			modelName: "User",
		},
	);
	return User;
};
