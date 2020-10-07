"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class Organization extends Model {
		static associate(models) {
			Organization.hasMany(models.User, {
				sourceKey: "id",
				foreignKey: "OrganizationId",
			});

			Organization.hasMany(models.Task, {
				sourceKey: "id",
				foreignKey: "OrganizationId",
			});
		}
	}
	Organization.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Organization name is Required",
					},
					notEmpty: {
						msg: "Organization name is Required",
					},
				},
			},
		},
		{
			sequelize,
			modelName: "Organization",
		},
	);
	return Organization;
};
