const express = require('express')
const router = express.Router()
const { authenticated } = require('../../middleware/auth')
const authController = require('../../controllers/auth-controller')

router.post('/signup', authController.signup)
router.post('/login', authController.login)
router.get('/testToken', authenticated, authController.testToken)

module.exports = router
