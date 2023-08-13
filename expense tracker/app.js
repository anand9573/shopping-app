const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const sequelize=require('./util/database')
const adminRoutes=require('./routes/admin')

const adminController=require('./controllers/admin')

const cors=require('cors');

const app = express();
app.use(cors());

app.set('views', 'views');

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname,'/public')));

app.use('/admin', adminRoutes);

adminController.sync()
// sync= async()=>{
//     try{
//         const res=await sequelize.sync()
//         console.log(res)
//     }catch(err){
    //         console.log(err)
    //     }
    //     }
    // sync()
app.listen(3000);


