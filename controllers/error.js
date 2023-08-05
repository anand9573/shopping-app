const path=require('path')
const rootDir=require('../util/path')

exports.error=(req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','error.html'))
}