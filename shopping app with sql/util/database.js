const Sequelize=require('sequelize');
const sequelize=new Sequelize('node-complete','root','Anand&9991',{
    dialect:'mysql',host:'localhost',
    dialectModule: require('mysql2'),
})

module.exports=sequelize;