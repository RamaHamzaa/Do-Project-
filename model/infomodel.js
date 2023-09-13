const mongoose =  require('mongoose')
const { emit } = require('nodemon')
const Schema   =  mongoose.Schema



const infoSchema =new Schema({

    emil:{
    type:String    
    },
    homework:{
    type:String   
    },
  _id:{
        type:String
    }

},
{timestamps:true}
)

const infomdel=mongoose.model('infomdel',infoSchema)
module.exports  =infomdel
