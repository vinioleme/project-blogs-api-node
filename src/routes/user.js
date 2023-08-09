const express = require('express');

 const router = express.Router();

 const { verifyDn, 
    validEmail, 
    validPass, 
    validateToken } = require('../middlewares/validationsFunctions');
 const { userController } = require('../controllers');

 router.post('/', verifyDn, validEmail, validPass, userController.getUser);
 router.get('/', validateToken, userController.getAllTheUsers);
 router.get('/:id', validateToken, userController.getUsersById);

 module.exports = router; 