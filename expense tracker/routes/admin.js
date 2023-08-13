const express = require('express');
const router=express.Router();

const adminController=require('../controllers/admin');
router.post('/add-expense',adminController.postUser);

router.get('/get-expenses',adminController.getUser)

router.delete('/delete-expense/:id',adminController.deleteExpenser)

router.put('/edit-expense/:id',adminController.editExpenser)

module.exports=router;