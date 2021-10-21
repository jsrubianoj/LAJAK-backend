const bcrypt = require('bcrypt')

const encryptPassword = async (password) => {

    const hashPassword = await bcrypt.hash(password, 10)
    return hashPassword

}

const comparePassword = async (password, hashedPassword) => {
    
    return await bcrypt.compare(password, hashedPassword)

}

module.exports = {
    encryptPassword,
    comparePassword
}