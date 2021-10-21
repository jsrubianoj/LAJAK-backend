require('dotenv').config()
const express = require('express')
const sequelize = require('./app/config/database')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api' , require('./app/routes'))


app.listen(port, () => {
    console.log('Servidor iniciado en el puerto: ', port)
})

sequelize.sync({ force: false }).then(() => {
    console.log('Conectado a la base de datos');
}).catch((error) => {
    console.log('Error al conectarse a la base de datos', error);
});