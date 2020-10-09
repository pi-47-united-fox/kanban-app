'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Task, {
        sourceKey: 'id',
        foreignKey: 'userId'
      })
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: 'Must be email'
        },
        notEmpty: true,
        notNull: true
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          len: [6],
          msg: "Password must have at least 6 characters"
        }
      }
    },
    organization: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate(user) {
        user.password = hashPassword(user.password),
        user.organization = 'Hacktiv8'
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};