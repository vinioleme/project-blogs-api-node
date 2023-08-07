const express = require('express');

 const router = express.Router();

 const { categoriesVerification } = require('../middlewares/categoriesValidade');
 const validateToken = require('../middlewares/validateToken');
 const { categoriesController } = require('../controllers');

 router.post('/', categoriesVerification, validateToken, categoriesController.postCategories);

 module.exports = router;