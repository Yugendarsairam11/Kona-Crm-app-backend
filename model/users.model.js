var Mongoose=require("mongoose")
var Schema=Mongoose.Schema
var userModel=new Schema({
    emailId:{
        type:String
    },
    username:{
        type:String
    },
    password:{
        type:String
    }
})
module.exports=Mongoose.model('users',userModel)
