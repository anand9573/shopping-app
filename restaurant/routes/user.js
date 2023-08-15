const express = require('express');
const router=express.Router();

const userController=require('../controllers/user');
router.post('/add-item',userController.postItem);

router.get('/get-items',userController.getItems)

router.delete('/delete-item/:id',userController.deleteItem)

module.exports=router;