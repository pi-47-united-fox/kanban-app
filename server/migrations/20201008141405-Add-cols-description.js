'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Tasks', 'description', { type: Sequelize.STRING, })
      .then(() => {
        return queryInterface.addColumn('Tasks', 'author', { type: Sequelize.STRING, })
      })
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Tasks', 'food'),
      queryInterface.removeColumn('Tasks', 'author'),
    ])
  }
};
