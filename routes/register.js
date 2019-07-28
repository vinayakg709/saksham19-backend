const express = require('express');
const registerController = require('../controller/register');
const adminController = require('../controller/admin');
const isAuth = require('../middleware/is-auth')
const router = express.Router();

router.post('/register', registerController.register);
router.get('/register',isAuth, registerController.getRegister);
router.post('/login',adminController.admin);

module.exports = router;