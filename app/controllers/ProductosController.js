const ProductoModel = require('../models/Producto')

const getProductos = async (req, res) => {

    const Productos = await ProductoModel.findAll({})

    res.send(
        Productos
    )

}

const AddProducto = async (req, res) => {

    try {

        const { nombre, precio, codigo, cantidad } = req.body

        const venta = await Productos.create({
            nombre, precio, codigo, cantidad
        })

        res.send({
            data: venta
        })

    } catch (error) {

        console.log("Ha ocurrido un error", error);

    }

}

const UpdateProducto = async (req, res) => {
    
    try {

        const idproducto = req.params.id
        const { nombre, precio, codigo, cantidad } = req.body

        const producto = await Productos.update({
              nombre, precio, codigo, cantidad
        }, {
            where: { id: idproducto}
        })

        res.send({
            data: producto
        })

    } catch (error) {

        console.log("Ha ocurrido un error", error);

    }
    
}

const DeleteProducto = async (req, res) => {

    const id = req.params.id
    
    const producto = await ProductoModel.destroy({
        where: id
    })

    if(producto != null){
        res.send({
            message: "Se ha eliminado el registro",
            producto
        })
    } else {
        res.send({
            message: "No se ha encontrado el registro"
        })
    }
    

}

module.exports = { getProductos, AddProducto, DeleteProducto, UpdateProducto }