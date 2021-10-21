const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/database')

class Venta extends Model {}

Venta.init({
    id_cliente: DataTypes.BIGINT,
    nombre_cliente: DataTypes.STRING,
    codigo_producto: DataTypes.BIGINT,
    nombre_producto: DataTypes.STRING,
    valor: DataTypes.BIGINT
}, {
    sequelize,
    modelName: 'Venta'
})

module.exports = Venta