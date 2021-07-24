const { Model, DataTypes} = require('sequelize');
const sequelize = require ('../config/connection');

class Providers extends Model{};

Providers.init({
    id:
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    type:
    {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Please enter provier's position",
              }
        }
    },
    license_num: 
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true,
            len: [5,10],
            msg: 'Please enter your 5-10 license number'
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    }
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'providers'
}
);

module.exports = Providers;