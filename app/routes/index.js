const express = require('express')
const router = express.Router()
const fs = require('fs')

const pathRouter = `${__dirname}`

const removeExtension = (filename) => {
    return filename.split('.').shift()
}

fs.readdirSync(pathRouter).filter((file)=> {
    const fileWithOutExtension = removeExtension(file)
    const skip = ['index'].includes(fileWithOutExtension)

    if(!skip){
        router.use(`/${fileWithOutExtension}`, require(`./${file}`))
        console.log('CARGAR RUTAS ---->', fileWithOutExtension);
    }

})

router.get('*', (req, res) => {
    res.status(404)
    res.send({ error: 'Not Found' })
})

module.exports = router