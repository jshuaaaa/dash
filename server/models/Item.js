const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Traveller model
class Item extends Model {}

// create fields/columns for Traveller model
Item.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    item_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    costPerUnit: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    insideOf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "machine",
        key: "id"
      }
    },
    ownedBy: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "users",
        key: "username"
      }
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'item'
  }
);

module.exports = Item;
