var mongoose=require('mongoose')
var config=require("./config")

exports.connect=()=>{
    mongoose.connect(config.config.url,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("db connected")
        }
    })    
}