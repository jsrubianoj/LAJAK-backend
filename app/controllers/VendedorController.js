const Vendedor = require('../models/Vendedor')

const getVendedor = async (req, res) => {

    const vededor = await Vendedor.findAll({})

    res.send({
        data: vendedor
    })

}

const AddVendedor = async (req, res) => {

    try {

        const { nombres, apellidos, email, telefono, tipoIdentificacion, identificacion, pais, departamento_estado, ciudad, direccion } = req.body

        const vendedor = await Vendedor.create({
            nombres, apellidos, email, telefono, tipoIdentificacion, identificacion, pais, departamento_estado, ciudad, direccion
        })

        res.send({
            data: vendedor
        })

    } catch (error) {

        console.log("Ha ocurrido un error", error);

    }

}

const UpdateVendedor = async (req, res) => {
    
    try {

        const id = req.params.id
        const { nombres, apellidos, email, telefono, tipoIdentificacion, identificacion, pais, departamento_estado, ciudad, direccion } = req.body

        const vendedor = await Vendedor.update({
            nombres, apellidos, email, telefono, tipoIdentificacion, identificacion, pais, departamento_estado, ciudad, direccion
        }, {
            where: { id }
        })

        res.send({
            data: vendedor
        })

    } catch (error) {

        console.log("Ha ocurrido un error", error);

    }
    
}

const DeleteVendedor = async (req, res) => {

    const id = req.params.id
    
    const vendedor = await Vendedor.destroy({
        where: id
    })

    if(vendedor != null){
        res.send({
            message: "Se ha eliminado el vendedor",
            vendedor
        })
    } else {
        res.send({
            message: "No se ha encontrado el vendedor"
        })
    }
    

}

module.exports = { getVendedor, AddVendedor, DeleteVendedor, UpdateVendedor }