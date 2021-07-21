// const { response } = require('express')
var model=require('../model/leads.model')

exports.addLead=function(request,response){
    var body=request.body
    var data=new model(body)
    data.save((error,docs)=>{
        if(error){
            response.send({error})
        }
        if(docs){
            response.send({result:true,message:"lead added"})
        }
    })
}


exports.getLeads=function(request,response){
    model.find({},(error,docs)=>{
        if(error){
            response.send(error)
        }
        if(docs){
            response.send(docs)
        }
    })
}

exports.deleteLead=function(request,response){
    var id = request.params.id
    console.log("username",id)
    model.deleteOne({id:id},(error)=>{
        if(error){
            response.send(error)
            console.log(error)
        }
        else{
            response.send({message:"lead deleted"})
        }
    })
}

exports.updateLead=function(request,response){
    var id=request.body.id
    var body=request.body
    model.updateOne({id:id},body,(error,res)=>{
        if(error){
            response.send(error)
        }
        if(res){
            response.send({message:"Lead Updated",result:true})
        }
    })
}

exports.getCount=function(request,response){ 
    model.find().countDocuments({},(error,result)=>{
        try{
         if(error){
            response.sendStatus(error)
        }
        else{
            response.sendStatus(result)
        }  
    }  
    catch(RangeError){
        console.log(RangeError)
    }
    })
}

 exports.leadsBy=function(request,response){
     var course=request.body.course
     console.log(course)
     model.find({course:course},(error,data)=>{
         if(error){
             response.send(error)
         }
         if(data){
             response.send(data)
         }
     })
 }

 exports.getLeadsByAds=function(request,response){
     var ads=request.body.ads
     model.find({ads:ads},(error,data)=>{
         if(error){
             response.send(error)
         }
         if(data){
             response.send(data)
         }
     })
 }

 exports.updateLeadNote=function(request,response){
     var id=request.body.leadId
     console.log(request.body)
    model.updateOne({id:id},{notes:request.body.notes},(error,docs)=>{
        if(error){
            response.send(error)
        }
        if(docs){
            response.send(docs)
        }
    })
 }

 exports.updateTask=function(request,response){
     var id=request.body.leadId
     console.log(request.body)
     model.updateOne({id:id},{task:request.body.tasks},(error,docs)=>{
         if(error){
             response.send(error)
         }
         if(docs){
             response.send(docs)
         }
     })
 }

 exports.getLeadById=function(request,response){
     var id=request.params.id
     model.find({id:id},(error,docs)=>{
         if(error){
             response.send(error)
         }
         if(docs){
             response.send(docs)
         }
     })
 }

 exports.updateChecklist=function(request,response){
    var id=request.params.id
    console.log(id)
    console.log(request.body[0])
    model.updateOne({id:id},{checklist:request.body},(error,docs)=>{
        if(error){
            response.send(error)
        }
        if(docs){
            response.send(docs)
        }
    })
}



