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
    BranchId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'BranchId is null' },
        notEmpty: { msg: 'BranchId is empty' },
        isInt: { msg: 'BranchId must be integer' }
      }
    },
    BuffetId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'BuffetId is null' },
        notEmpty: { msg: 'BuffetId is empty' },
        isInt: { msg: 'BuffetId must be integer' }
      }
    },
    day: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'day is null' },
        notEmpty: { msg: 'day is empty' },
        isInt: { msg: 'day must be integer' },
        max: { args: 6, msg: 'day maximum is 6' }
      }
    },
    startTime: {
      type: DataTypes.TIME,
      allowNull: false,
      validate: {
        notNull: { msg: 'closeHours is null' },
        notEmpty: { msg: 'closeHours is empty' }
      }
    },
    endTime: {
      type: DataTypes.TIME,
      allowNull: false,
      validate: {
        notNull: { msg: 'closeHours is null' },
        notEmpty: { msg: 'closeHours is empty' }
      }
    }
  }, {
    sequelize,
    modelName: 'BranchBuffet',
  });
  return BranchBuffet;
};