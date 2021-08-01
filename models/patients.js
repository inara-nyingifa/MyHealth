const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Patients extends Model {};

Patients.init(
    {
    id: 
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: 
    {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: true,
        }
    },
    last_name: 
    {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: true,
        }
    },
    DOB: 
    {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            notNull: {
              msg: "Please enter patient's date of birth",
              isNumeric: true
            }
        }
    },
    address:
    {
        type: DataTypes.STRING,
        allowNull: false,
        notNull: {
            msg: "Please enter patient's address",
          }
    },
    diagnosis: {
        type: DataTypes.STRING,
        allowNull: false
    },
    weight: 
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        notNull: {
            msg: "Please enter patient's weight",
        }
    },
    height: 
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        notNull: {
            msg: "Please enter patient's height",
        }
    },
    provider_id: 
    {
        type: DataTypes.INTEGER,
        references: {
            model: 'providers',
            key: 'id'
        }
    }
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'patients'
}
)
module.exports = Patients;