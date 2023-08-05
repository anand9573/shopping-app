
const express=require('express');
const router=express.Router();
const productController=require('../controllers/product')
router.get('/add-product',productController.adminGetProduct);
router.post('/add-product',productController.adminPost);

module.exports=router;