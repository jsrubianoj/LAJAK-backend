const express = require('express')
const router = express.Router()
const { RegisterUser } = require('../controllers/RegisterController')

router.post('/', RegisterUser)

module.exports = router 