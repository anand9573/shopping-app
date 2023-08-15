const Table=require('../models/table')
const sequelize=require('../util/database')
exports.postItem=async(req,res,next)=>{
    try{
        if(!req.body.name){
            throw new Error('name is mandatory')
        }
        const name=req.body.name;
        const price=req.body.price;
        const table=req.body.table;
        const data=await Table.create({name:name,price:price,table:table});
        res.status(201).json({newUserDetails:data})
    }catch(err){
        res.status(500).json({error:err})
    }
}

exports.getItems=async(req,res,next)=>{
    try{
        const items= await Table.findAll();
        res.status(200).json({allItems: items});
    }catch(err){
        console.log(err)
        res.sendStatus(500).json({error:err});
    }
}

exports.deleteItem=async(req,res,next)=>{
    try{
        if(req.params.id==='undefined'){
            return res.status(400).json({err:'id not found'})
        }
        const userid=req.params.id
        await Table.destroy({where:{id:userid}});
        res.sendStatus(200);
    }catch(err){
        res.status(500).json({error:err});
    }
}

exports.sync= async()=>{
try{
    await sequelize.sync()
}catch(err){
    console.log(err)
}
}
