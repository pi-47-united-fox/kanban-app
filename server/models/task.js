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
    tittle: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `title cant be empty`
        }
      }
    },
    category: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `category cant be empty`
        }
      }
    },
    UserId: DataTypes.INTEGER,
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `description cant be empty`
        }
      }
    },
    author: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};