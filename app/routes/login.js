const express = require('express')
const router = express.Router()
const { LoginController } = require('../controllers/LoginController')

//routa api/login

router.post('/', LoginController)

module.exports = router 