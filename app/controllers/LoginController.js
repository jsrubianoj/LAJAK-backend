const { comparePassword } = require('../helpers/bcryptHelper')
const { createToken } = require('../helpers/jwtHelper')
const UserModel = require('../models/User')

const LoginController = async (req, res) => {

    const { email, password } = req.body

    const DB_User = await UserModel.findOne({
        where:  { email }
    })

    const check = await comparePassword(password, DB_User.password)    

    if(check){

        const User2 = await UserModel.findOne({
            where:  { email },
            attributes: ['nombre', 'email', 'role']
        })

        const token = await createToken(User2)

        res.send({
            DB_User,
            token
        })
    } else {
        res.send({
            msg: "El usuario o la contraseña son incorrectos"
        })
    }
}

module.exports = { LoginController }