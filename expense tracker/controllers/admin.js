const expenseTracker=require('../models/admin')
const sequelize=require('../util/database')
exports.postUser=async(req,res,next)=>{
    try{
        if(!req.body.expenseAmount){
            throw new Error('Expense amount is mandatory')
        }
        const expenseAmount=req.body.expenseAmount;
        const description=req.body.description;
        const category=req.body.category;
        const data=await expenseTracker.create({expenseAmount:expenseAmount,description:description,category:category});
        res.status(201).json({newExpenseDetails:data})
    }catch(err){
        res.status(500).json({error:err})
    }
}

exports.getUser=async(req,res,next)=>{
    try{
        const expenses= await expenseTracker.findAll();
        res.status(200).json({allExpenses: expenses});
    }catch(err){
        console.log(err)
        res.sendStatus(500).json({error:err});
    }
}

exports.deleteExpenser=async(req,res,next)=>{
    try{
        if(req.params.id==='undefined'){
            return res.status(400).json({err:'id not found'})
        }
        const userid=req.params.id
        await expenseTracker.destroy({where:{id:userid}});
        res.sendStatus(200);
    }catch(err){
        res.status(500).json({error:err});
    }
}

exports.editExpenser=async(req,res,next)=>{
    try{
        if(req.params.id==='undefined'){
            return res.status(400).json({err:'id not found'})
        }
        const userid=req.params.id
        const expense=await expenseTracker.findByPk(userid);
        await expenseTracker.destroy({where:{id:userid}});
        res.status(200).json({editExpense:expense})
    }catch(err){
        res.status(500).json({error:err});
    }
}

exports.sync= async()=>{
try{
    const res=await sequelize.sync()
}catch(err){
    console.log(err)
}
}