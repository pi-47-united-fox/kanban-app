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
      Task.belongsTo(models.User,{foreignKey:`UserId`})
      Task.belongsTo(models.Category,{foreignKey:`CategoryId`})
    }
  };
  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          argv:true,
          message:"Please Input the Title"
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          argv:true,
          message:"Please Input the Title"
        }
      }
    },
    organization: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER
  }, {
    hooks:{
      beforeCreate(task){
        task.organization = 'Hacktiv8'
      }
    },
    sequelize,
    modelName: 'Task',
  });
  return Task;
};