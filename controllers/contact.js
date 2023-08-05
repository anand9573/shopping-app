const path=require('path')
const rootDir=require('../util/path')

exports.contactGet=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'));
}

exports.ContantPost=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','success.html'));
}
