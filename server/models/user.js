'use strict';
const {
  Model
} = require('sequelize');

const { getHash } = require('../helpers/bcrypt')
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
        isEmail: {
          msg: `must email format`
        },
        notEmpty: {
          msg: `must fill email`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `password can be empty`
        },
        len: {
          args: [6, 10],
          msg: `password min 6 character max 10 character`
        }
      }
    },
    organization: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate(instance, option) {
        instance.password = getHash(instance.password)
        if (instance.organization == '') {
          instance.organization = 'hacktiv8'
        }
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};