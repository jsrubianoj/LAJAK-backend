const { getProductos, AddProducto, DeleteProducto, UpdateProducto } = require('../controllers/ProductosController')
const express = require('express')
const router = express.Router()

router.get('/', getProductos)

router.post('/nuevaVenta', AddProducto)

router.delete('/eliminar/:id', DeleteProducto)

router.patch('/editar/:id', UpdateProducto)

module.exports = router 