const path=require('path')
const rootDir=require('../util/path')

exports.adminGetProduct=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','addproduct.html'));
}

exports.adminPost=(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
}

