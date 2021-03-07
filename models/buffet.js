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
    meal: DataTypes.STRING,
    maxCapacity: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Buffet',
  });
  return Buffet;
};