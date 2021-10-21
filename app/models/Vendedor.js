const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/database')

class Vendedor extends Model {}

Vendedor.init({
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    email: DataTypes.STRING,
    telefono: DataTypes.BIGINT,
    tipoIdentificacion: DataTypes.STRING,
    identificacion: DataTypes.STRING,
    pais: DataTypes.STRING,
    departamento_estado: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    direccion: DataTypes.STRING
}, {
    sequelize,
    modelName: 'Vendedor'
})

module.exports = Vendedor