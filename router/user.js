const express = require(`express`)
const router = express()
const { register } = require('../controller/user')


router.post('/register', register)


module.exports = router