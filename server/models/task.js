'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task.belongsTo(models.User)
    }
  };
  Task.init({
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate(task) {
        if(task.category === '') {
          task.category = 'Backlog'
        }
      }
    },
    sequelize,
    modelName: 'Task',
  });
  return Task;
};