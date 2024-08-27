const express = require('express');
const { getAllProducts, createProduct } = require('../controllers/productControllers');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/product', auth, getAllProducts);
router.post('/product', auth, createProduct);

module.exports = router;