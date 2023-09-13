const mongoose =  require('mongoose')
const { emit } = require('nodemon')
const Schema   =  mongoose.Schema

const employeeSchema =new Schema({

    name:{
      type:String
    },
    designation:{
     type:String 
    },
    emil:{
    type:String    
    },
    phone:{
    type:String   
    },
    age:{
    type:Number
    },
  _id:{
        type:String
    }

},
{timestamps:true}
)

const Employee=mongoose.model('Employee',employeeSchema)
module.exports  =Employee
