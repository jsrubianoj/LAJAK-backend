const { encryptPassword } = require('../helpers/bcryptHelper')
const UserModel = require('../models/User')

const RegisterUser = async (req, res) => {

    const { nombre, email, password } = req.body

    const check = await UserModel.findOne({
        where: { email }
    })

    if (check == null) {
        const hashPass = await encryptPassword(password)

        const user = await UserModel.create({
            nombre,
            email,
            password: hashPass
        })

        res.send({
            data: user
        })

    } else {
        res.send({
            msg: "Error al crear usuario"
        })

    }

}

module.exports = { RegisterUser }