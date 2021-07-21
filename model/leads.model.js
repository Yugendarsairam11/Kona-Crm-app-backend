var mongoose=require('mongoose')
var schema=mongoose.Schema;
// var noteSchema = new Schema({
//     description: {
//         type: String
//     }
// });

var LeadsSchema=new schema({
    id:{
        type:Number
    },
    image:{
        type:String
    },
    email:{
        type:String
    },
    username:{
        type:String
    },
    number:{
        type:String
    },
    course:{
        type:String
    },
    ads:{
        type:String
    },
    purpose:{
        type:String
    },
    task:{
        type:Array,
        default:[]
    },
    notes:{
        type:Array,
        default:[]
    },
    checklist:{
       type:Array,
       default:[] 
    }
    // tasks: [taskSchema],
    // checkLists: [],
    // notes:{
    //     type:String
    // }

})

module.exports=mongoose.model('lead',LeadsSchema)