const path = require('path');

const express = require('express');

const productscontroller=require('../controllers/product')
const router = express.Router();

router.get('/add-product',productscontroller.getAddProduct);

router.post('/add-product',productscontroller.postAddProduct);

module.exports=router;
