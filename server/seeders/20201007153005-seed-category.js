"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Categories",
			[
				{
					name: "backlog",
					createdAt: "2020-06-12T16:22:40.469Z",
					updatedAt: "2020-06-12T16:22:40.469Z",
				},
				{
					name: "todo",
					createdAt: "2020-06-12T16:22:40.469Z",
					updatedAt: "2020-06-12T16:22:40.469Z",
				},
				{
					name: "doing",
					createdAt: "2020-06-12T16:22:40.469Z",
					updatedAt: "2020-06-12T16:22:40.469Z",
				},
				{
					name: "done",
					createdAt: "2020-06-12T16:22:40.469Z",
					updatedAt: "2020-06-12T16:22:40.469Z",
				},
			],
			{},
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Categories", null, {});
	},
};
