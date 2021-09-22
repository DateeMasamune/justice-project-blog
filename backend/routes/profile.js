const express = require('express')
const controller = require('../controllers/profile')
const router = express.Router()

//localhost:5000/api/auth/login
router.patch('/update/:id',controller.update)

module.exports = router