'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Buffet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Buffet.hasMany(models.BranchBuffet)
    }
  };
  Buffet.init({
    meal: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: { msg: 'meal already taken.' },
      validate: {
        notNull: { msg: 'meal is null' },
        notEmpty: { msg: 'meal is empty' }
      }
    },
    maxCapacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'maxCapacity is null' },
        notEmpty: { msg: 'maxCapacity is empty' },
        isInt: { msg: 'maxCapacity must be integer' },
        min: { args: 1, msg: 'maxCapacity minimum is 1' }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'price is null' },
        notEmpty: { msg: 'price is empty' },
        isInt: { msg: 'price must be integer' },
        min: { args: 1, msg: 'price minimum is 1' }
      }
    }
  }, {
    sequelize,
    modelName: 'Buffet',
  });
  return Buffet;
};