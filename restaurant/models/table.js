const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const User=sequelize.define('table',{
  id:{
    type:Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    allowNull:false
  },
  price:{
    type:Sequelize.STRING,
    allowNull:false
  },
  name:{
    type:Sequelize.STRING,
    allowNull:false
  },
  table:{
    type:Sequelize.STRING,
    allowNull:false
  }
});
module.exports=User;