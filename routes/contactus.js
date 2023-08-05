
const express=require('express');
const router=express.Router();

const contactController=require('../controllers/contact')
router.get('/contact-us',contactController.contactGet);
router.post('/success',contactController.ContantPost);

module.exports=router;