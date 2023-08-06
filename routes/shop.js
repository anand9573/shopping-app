const path = require('path');

const express = require('express');
const productcontroller=require('../controllers/product')

const router = express.Router();

router.get('/', productcontroller.getProducts);

module.exports = router;
