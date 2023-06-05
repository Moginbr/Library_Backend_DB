const express = require('express')
const router = express.Router()

const control = require('./control/control')

router.get('/control', control.procurar)

module.exports = router