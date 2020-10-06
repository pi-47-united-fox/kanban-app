'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs')
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
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        notEmpty: true
      },
      unique: {
        args: true,
        msg: 'Email required'
      }

    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },

    organization: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((user) => {
    user.organization = 'hactiv8'
    const salt = bcrypt.genSaltSync(10)
    user.password = bcrypt.hashSync(user.password, salt)
  })
  return User;
};