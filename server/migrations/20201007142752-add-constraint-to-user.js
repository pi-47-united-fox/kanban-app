"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.addConstraint("Users", {
			fields: ["OrganizationId"],
			type: "foreign key",
			name: "custom_fkey_constraint_organization_id",
			references: {
				table: "Organizations",
				field: "id",
			},
		});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.removeConstraint(
			"Users",
			"custom_fkey_constraint_organization_id",
			{},
		);
	},
};
