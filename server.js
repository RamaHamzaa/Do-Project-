const express         =require('express')
const mongoose        =require('mongoose')
const  morgan         =require('morgan')
const  bodyParser     =require('body-parser')
const EmployeeRoute   = require('./routes/employee')  
const infomodelRoute   = require('./routes/inforoutes')
const { error, Console } = require('console')



mongoose.connect('mongodb://localhost:27017/testdb',{useNewUrlParser:true,useUnifiedTopology:true})
const db =mongoose.connection

db.on('error',(err)=>{
    console.log(err)
})
db.once('open',()=>{
    console.log('Database Connection Estblished')
})

const app =express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


const PORT= process.env.PORT||8000

app.listen(PORT,()=>{
console.log(' server runing in port ${PORT}')
})


app.use('/api/employee',EmployeeRoute)
app.use('/api/info',infomodelRoute)