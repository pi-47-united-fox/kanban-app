'use strict';
const bcrypt = require("bcrypt")
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Task,{foreignKey:`UserId`})
    }
  };
  User.init({
    email: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        notEmpty:{
          argv:true,
          msg:"Email is needed!"
        },
        isEmail: {
          argv:true,
          msg:"Please input with email format"
        }
      }
    },
    password: {
      type:DataTypes.STRING,
      allowNull: false, 
    },
    organization: DataTypes.STRING
  }, {
    hooks:{
      beforeCreate(user){
        // console.log(task);
        user.organization = 'Hacktiv8'
        user.password = bcrypt.hashSync(user.password , 10)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};