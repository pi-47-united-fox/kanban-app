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
      Task.belongsTo(models.User, {
        targetKey: 'id',
        foreignKey: 'userId'
      })
    }
  };
  Task.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: 'Please fill the Title!'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: 'Please fill the Description!'
        }
      }
    },
    date: DataTypes.DATEONLY,
    category: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: 'Please fill the Category!'
        }
      }
    },
    userId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate(task) {
        task.date = new Date()
      }
    },
    sequelize,
    modelName: 'Task',
  });
  return Task;
};