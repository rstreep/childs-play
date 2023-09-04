const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth')

router.post('/newUser', authController.newUser)
router.post('/login', authController.login)

module.exports = router

