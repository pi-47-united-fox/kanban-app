'use strict';
const {
  Model
} = require('sequelize');
const BcryptJs = require('../helpers/bcrypt');
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
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    organization: DataTypes.STRING,
    user_name: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (instance) => {
        // FOR ORGANIZATION
        instance.organization = 'Hacktiv8'

        // FOR PASSWORD
        instance.password = BcryptJs.makeHash(instance.password)

        // FOR USERNAME
        instance.user_name = instance.email.split('@')[0]
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};