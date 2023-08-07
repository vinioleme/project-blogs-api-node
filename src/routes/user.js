const express = require('express');

 const router = express.Router();

 const { verifyDn, validEmail, validPass } = require('../middlewares/validateUser');
 const validateToken = require('../middlewares/validateToken');
 const { userController } = require('../controllers');

 router.post('/', verifyDn, validEmail, validPass, userController.getUser);
 router.get('/', validateToken, userController.getAllTheUsers);
 router.get('/:id', validateToken, userController.getUsersById);

 module.exports = router; 