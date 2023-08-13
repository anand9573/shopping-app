const User=require('../models/user')
const sequelize=require('../util/database')
exports.postUser=async(req,res,next)=>{
    try{
        if(!req.body.phone){
            throw new Error('phone number is mandatory')
        }
        const name=req.body.name;
        const email=req.body.email;
        const phone=req.body.phone;
        const date=req.body.date;
        const time=req.body.time;
        const data=await User.create({name:name,email:email,phone:phone,date:date,time:time});
        res.status(201).json({newUserDetails:data})
    }catch(err){
        res.status(500).json({error:err})
    }
}

exports.getUser=async(req,res,next)=>{
    try{
        const users= await User.findAll();
        res.status(200).json({allUsers: users});
    }catch(err){
        console.log(err)
        res.sendStatus(500).json({error:err});
    }
}

exports.deleteUser=async(req,res,next)=>{
    try{
        if(req.params.id==='undefined'){
            return res.status(400).json({err:'id not found'})
        }
        const userid=req.params.id
        await User.destroy({where:{id:userid}});
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