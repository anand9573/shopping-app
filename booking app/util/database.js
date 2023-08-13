const Sequelize=require('sequelize');

const sequelize=new Sequelize('node-complete','root','Anand&9991',{
    dialect:'mysql',
host:'localhost',
dialectOptions: {
    dialectModule:'mysql2'
  }
});

module.exports=sequelize;