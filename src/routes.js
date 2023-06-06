const express = require('express')
const router = express.Router()

const control = require('./control/control')

router.get('/control', control.procurar)
router.get('/controls/:id', control.procurarlivro)

module.exports = router