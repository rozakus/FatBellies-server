'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Branch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Branch.hasMany(models.BranchBuffet)
    }
  };
  Branch.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: { msg: 'name already taken' },
      validate: {
        notNull: { msg: 'name is null' },
        notEmpty: { msg: 'name is empty' }
      }
    },
    latitude: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'latitude is null' },
        notEmpty: { msg: 'latitude is empty' }
      }
    },
    longitude: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'longitude is null' },
        notEmpty: { msg: 'longitude is empty' }
      }
    },
    openHours: {
      type: DataTypes.TIME,
      allowNull: false,
      validate: {
        notNull: { msg: 'openHours is null' },
        notEmpty: { msg: 'openHours is empty' }
      }
    },
    closeHours: {
      type: DataTypes.TIME,
      allowNull: false,
      validate: {
        notNull: { msg: 'closeHours is null' },
        notEmpty: { msg: 'closeHours is empty' }
      }
    }
  }, {
    sequelize,
    modelName: 'Branch',
  });
  return Branch;
};