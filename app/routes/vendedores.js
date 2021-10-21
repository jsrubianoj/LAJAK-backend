const { getVendedor, DeleteVendedor, AddVendedor, UpdateVendedor } = require('../controllers/VendedorController')
const express = require('express')
const router = express.Router()

router.get('/', getVendedor)

router.post('/nuevaVenta', AddVendedor)

router.delete('/eliminar/:id', DeleteVendedor)

router.patch('/editar/:id', UpdateVendedor)

module.exports = router 