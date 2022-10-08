const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Trip model
class Machine extends Model {}

// create fields/columns for Trip model
Machine.init(
  {
    model: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    revenue: {
      type: DataTypes.INTEGER,

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
    modelName: 'machine'
  }
);

module.exports = Machine;
