'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let data = [
    {
      name:"backlog",
      updatedAt : new Date(),
      createdAt : new Date(),
    },
    {
      name:"todo",
      updatedAt : new Date(),
      createdAt : new Date(),
    },
    {
      name:"doing",
      updatedAt : new Date(),
      createdAt : new Date(),
    },
    {
      name:"done",
      updatedAt : new Date(),
      createdAt : new Date(),
    },
   ]
    await queryInterface.bulkInsert('Categories',data,{})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Categories',null,{})
  }
};
