const path=require('path')
const express=require('express')
const bodyparser=require('body-parser')

const app=express();
const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop')
const contactRoutes=require('./routes/contactus')
const errorController=require('./controllers/error')

app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use(errorController.error)
app.listen(5000);
