const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/database')

class User extends Model {}

User.init({
    nombre: DataTypes.STRING,
    email: {
        unique: true,
        type: DataTypes.STRING
    },
    password: DataTypes.STRING,
    role: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'User'
})

module.exports = User