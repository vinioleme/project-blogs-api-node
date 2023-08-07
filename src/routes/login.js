const express = require('express');

const router = express.Router();

const { validateLogin } = require('../middlewares/validateLogin');
const { loginController } = require('../controllers');

router.post('/', validateLogin, loginController.updateLogin);

module.exports = router; 