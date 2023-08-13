const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const sequelize=require('./util/database')
const userRoutes=require('./routes/user')

const userController=require('./controllers/user')

const cors=require('cors');

const app = express();
app.use(cors());

app.set('views', 'views');

app.use(bodyParser.json({ extended: false }));
app.use(express.static(__dirname+ '/public'));

app.use('/user', userRoutes);

userController.sync
app.listen(3000);


