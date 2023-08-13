const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const expenseTracker=sequelize.define('expenser',{
  id:{
    type:Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    allowNull:false
  },
  expenseAmount:{
    type:Sequelize.STRING,
    allowNull:false
  },
  description:{
    type:Sequelize.STRING,
    allowNull:false
  },
  category:{
    type:Sequelize.STRING,
    allowNull:false
  }
});
module.exports=expenseTracker;