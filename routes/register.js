const express = require('express');
const registerController = require('../controller/register');
const adminController = require('../controller/admin');
const isAuth = require('../middleware/is-auth');
const verifyCaptcha = require('../middleware/verifyRecaptch')
const router = express.Router();

router.post('/register',verifyCaptcha.verifyCaptcha, registerController.register);
router.get('/register',isAuth, registerController.getRegister);
router.post('/login',adminController.admin);
router.post('/delete', registerController.deleteDelete)

module.exports = router;