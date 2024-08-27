const express = require('express');
const { createSupplier } = require('../controllers/supplierController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, createSupplier);

module