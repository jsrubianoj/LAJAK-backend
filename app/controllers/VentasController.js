const Ventas = require('../models/Venta')

const getVentas = async (req, res) => {

    const ventas = await Ventas.findAll({})

    res.send(ventas)

}

const AddVenta = async (req, res) => {

    try {

        const { id_cliente, nombre_cliente, codigo_producto, nombre_producto, valor } = req.body

        const venta = await Ventas.create({
            id_cliente, nombre_cliente, codigo_producto, nombre_producto, valor
        })

        res.send({
            data: venta
        })

    } catch (error) {

        console.log("Ha ocurrido un error", error);

    }

}

const UpdateVenta = async (req, res) => {

    try {

        const idventa = req.params.id
        const { id_cliente, nombre_cliente, codigo_product, nombre_producto, valor } = req.body

        const venta = await Ventas.update({
            id_cliente, nombre_cliente, codigo_product, nombre_producto, valor
        }, {
            where: { id: idventa }
        })

        res.send({
            data: venta
        })

    } catch (error) {

        console.log("Ha ocurrido un error", error);

    }

}

const DeleteVenta = async (req, res) => {


    try {

        const id = req.params.id

        const venta = await Ventas.destroy({
            where: { id }
        })

        res.send({
            message: "Se ha eliminado el registro",
            venta
        })

    } catch (error) {
        res.send({
            message: "No se ha encontrado el registro"
        })
    }

}

module.exports = { getVentas, AddVenta, DeleteVenta, UpdateVenta }