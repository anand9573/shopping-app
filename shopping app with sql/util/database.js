const mysql=require('mysql2');

const pool=mysql.createPool({
host:'localhost',
user:'root',
database:'node-complete',
password:'Anand&9991'
});

module.exports=pool.promise();
