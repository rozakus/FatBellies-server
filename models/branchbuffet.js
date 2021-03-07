'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BranchBuffet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BranchBuffet.belongsTo(models.Branch, { sourceKey: 'id', foreignKey: 'BranchId' })
      BranchBuffet.belongsTo(models.Buffet, { sourceKey: 'id', foreignKey: 'BuffetId' })
    }
  };
  BranchBuffet.init({
    BranchId: DataTypes.INTEGER,
    BuffetId: DataTypes.INTEGER,
    day: DataTypes.INTEGER,
    startTime: DataTypes.INTEGER,
    endTime: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BranchBuffet',
  });
  return BranchBuffet;
};