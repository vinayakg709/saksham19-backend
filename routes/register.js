const express = require('express');
const registerController = require('../controller/register')
const router = express.Router();

router.post('/register', registerController.register);
router.get('/register', registerController.getRegister)

module.exports = router;