const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const User=sequelize.define('user',{
  id:{
    type:Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    allowNull:false
  },
  name:{
    type:Sequelize.STRING,
    allowNull:false
  },
  email:{
    type:Sequelize.STRING,
    unique:true
  },
  phone:{
    type:Sequelize.STRING,
    unique:true
  },
  date:{
    type:Sequelize.DATEONLY,
    allowNull:false
  },
  time:{
    type:Sequelize.TIME,
    allowNull:false
  }
});
module.exports=User;