const express = require('express');

 const router = express.Router();

 const { postController } = require('../controllers');
 const { validateToken } = require('../middlewares/validationsFunctions');

 router.get('/', validateToken, postController.getAllThePosts);

 module.exports = router; 
