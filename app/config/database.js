const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(
    process.env.DATABASE || 'misiontic',
    process.env.USER || 'root',
    process.env.PASSWORD || '',
    { host: process.env.DATABASE || 'localhost', dialect: 'mysql'}
)

module.exports = sequelize