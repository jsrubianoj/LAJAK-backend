const { getVentas, DeleteVenta, AddVenta, UpdateVenta } = require('../controllers/VentasController')
const express = require('express')
const router = express.Router()

router.get('/', getVentas)

router.post('/nuevaVenta', AddVenta)

router.delete('/eliminar/:id', DeleteVenta)

router.patch('/editar/:id', UpdateVenta)

module.exports = router 