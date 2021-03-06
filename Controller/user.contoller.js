var userModel=require('../model/users.model')
var jwt=require('jsonwebtoken')
var config=require('../config/config')
const { model } = require('mongoose')
exports.registerUser=(request,response)=>{
    var userData=request.body
    var newData=new userModel(userData)
    newData.save((error,docs)=>{
        if(error){
            console.log({error:error.message})
        }
            if(docs){
                response.send({result:true})
            }
    })
}
exports.login=(request,response)=>{
    var userData=request.body
    userModel.findOne({emailId:userData.emailId},(error,docs)=>{
        if(error){
            console.log(error)
        }
        if(docs){
            if(userData.password==docs.password){
                var payload={emailId:userData.emailId}
                var token=jwt.sign(payload,config.config.JWT_SECRET_KEY)
                response.send({passwordresult:true,emailresult:true,token:token})         
            }
            else{
                response.send({passwordresult:false,emailresult:true})
            }
        }
        else{
            response.send({emailresult:false,passwordresult:'need to do'})
        }
        
    })
}

exports.passwordupdate=function(request,response){
    var body=request.body
    userModel.updateOne({emailId:body.emailId},{password:body.password},(error,docs)=>{
        if(error){
            response.send(error)
        }
        if(docs){
            response.send({status:true,message:'password updated'})
        }
    })
}

exports.updateProfile=function(request,response){
    var emailId=request.body.emailId
    var body=request.body
    console.log(body)
    userModel.updateOne({emailId:emailId},body,(error,res)=>{
        if(error){
            response.send(error)
        }
        if(res){
            response.send({message:"profile Updated",result:true})
        }
    })
}

exports.getUserById=function(request,response){
    var email=request.body.email
    var body=request.body
    userModel.findOne({emailId:email},(error,data)=>{
        if(error){
            response.send(error)
        }
        if(data){
            response.send(data)
        }
    })
}

exports.getUserByChoice=function(request,response){
    var body=request.body
    var name=request.body.name
    userModel.findOne({username:name},(error,data)=>{
        if(error){
            response.send(error)
        }
        if(data){
            response.send(data)
        }
    })
}
