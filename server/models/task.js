"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class Task extends Model {
		static associate(models) {
			Task.belongsTo(models.User, {
				targetKey: "id",
				foreignKey: "UserId",
			});

			Task.belongsTo(models.Organization, {
				targetKey: "id",
				foreignKey: "OrganizationId",
			});

			Task.belongsTo(models.Category, {
				targetKey: "id",
				foreignKey: "CategoryId",
			});
		}
	}
	Task.init(
		{
			title: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Task Title is Required",
					},
					notEmpty: {
						msg: "Task Title is Required",
					},
				},
			},
			UserId: DataTypes.INTEGER,
			CategoryId: DataTypes.INTEGER,
			OrganizationId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Task",
		},
	);
	return Task;
};
