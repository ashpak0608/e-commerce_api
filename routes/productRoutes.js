const express = require('express');
const router = express.Router();

// ADD THIS IMPORT
const productController = require('../controllers/productController');

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct);

module.exports = router;
