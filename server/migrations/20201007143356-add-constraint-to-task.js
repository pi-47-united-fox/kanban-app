"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addConstraint("Tasks", {
			fields: ["OrganizationId"],
			type: "foreign key",
			name: "custom_fkey_constraint_organization_id_tasks",
			references: {
				table: "Organizations",
				field: "id",
			},
		});

		await queryInterface.addConstraint("Tasks", {
			fields: ["CategoryId"],
			type: "foreign key",
			name: "custom_fkey_constraint_category_id_tasks",
			references: {
				table: "Categories",
				field: "id",
			},
		});

		await queryInterface.addConstraint("Tasks", {
			fields: ["UserId"],
			type: "foreign key",
			name: "custom_fkey_constraint_user_id_tasks",
			references: {
				table: "Users",
				field: "id",
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeConstraint(
			"Tasks",
			"custom_fkey_constraint_organization_id_tasks",
			{},
		);

		await queryInterface.removeConstraint(
			"Tasks",
			"custom_fkey_constraint_category_id_tasks",
			{},
		);

		await queryInterface.removeConstraint("Tasks", "custom_fkey_constraint_user_id_tasks", {});
	},
};
