const express = require('express');

const router = express.Router();

const { validateLogin } = require('../middlewares/validationsFunctions');
const { loginController } = require('../controllers');

router.post('/', validateLogin, loginController.updateLogin);

module.exports = router; 