const jwt = require('jsonwebtoken')

const createToken = async (user) => {

    const token = jwt.sign({ data: user }, process.env.PRIVATE_KEY)

    return token

}

module.exports = {
    createToken
}