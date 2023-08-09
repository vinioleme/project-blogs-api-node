const express = require('express');

 const router = express.Router();

 const { validateCategories, validateToken } = require('../middlewares/validationsFunctions');
 const { categoriesController } = require('../controllers');

 router.post('/', validateCategories, validateToken, categoriesController.postCategories);
 router.get('/', validateToken, categoriesController.getAllCategories);

 module.exports = router;