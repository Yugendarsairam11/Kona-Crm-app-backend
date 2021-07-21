var express=require('express')
var app=express()
var server=require('./config/config')
var DB=require("./config/db.config")
var userRouter=require("./routes/user.routes")
var leadRouter=require("./routes/leads.route")
var cors=require('cors')
// const { request } = require('express')
DB.connect()
app.use(express.json())
app.use(cors())
app.use('/user',userRouter)
app.use('/lead',leadRouter)
app.listen(server.config.PORT,(error)=>{
    if(error){
        console.log(err)
    }
    else{
        console.log("server started")
    }
})