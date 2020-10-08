'use strict';
const { hashPassword } = require('../helpers/bcrypt.js')
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
      User.hasMany(models.Task)
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Please fill in this column."
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: "Please input the correct email."
        },
        notEmpty: {
          msg: "Please fill in this column."
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Please fill in this column."
        }
      }
    },
    organization: {
      type: DataTypes.STRING,
      validate:{
        equals: 'Hacktiv8'
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((user, options) => {
    user.password = hashPassword(user.password)
    user.organization = 'Hacktiv8'
  })
  return User;
};