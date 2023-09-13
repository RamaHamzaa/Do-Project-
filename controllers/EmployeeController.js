const { response } = require('express')
const Employee= require('../model/Employee')
const { model } = require('mongoose')
var generateSafeId = require('generate-safe-id');

//show the list employee

const index=(req,res,next) =>{

    Employee.find()
    .then(response =>{
        res.json({
            response
        })
    })

    .catch(error=>{
        res.json({
            message:'An error Ocurred !'
        })
    })
}

//show single employee

const show=(req,res,next) =>{

    let employeeID=req.body.employeeID
    Employee.findById(employeeID)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message:'An error Ocurred !'
        })
    })
}
 //added new employee

 const store =(req,res,next)=>{
    var id = generateSafeId();
    let employee =new Employee({
    _id:id,
     name:req.body.name,
     designation:req.body.designation,
     email:req.body.email,
     phone:req.body.phone,
     age:req.body.age,
    })

    employee.save()
    .then(response =>{
        res.json({
            message:'Employee Added Successfully !'
        })
    })
    .catch(error=>{
        res.json({
            message:'An error Ocurred !'
        })
    })
 }

 //update an employee

 const update=(req,res,next)=>{
    let employeeID =req.body.employeeID

    let updatedData={
     name:req.body.name,
     designation:req.body.designation,
     email:req.body.email,
     phone:req.body.phone,
     age:req.body.age, 
    }
    Employee.findByIdAndUpdate(employeeID,{$set:updatedData})

    .then(() =>{
        res.json({
            message:'Employee updated Successfully !'
        })
    })
    .catch(error=>{
        res.json({
            message:'An error Ocurred !'
        })
    })
 }

 //delete an employee 

 const destroy=(req,res,next)=>{
 let employeeID =req.body.employeeID
 Employee.findByIdAndRemove(employeeID)

 .then(() =>{
    res.json({
        message:'Employee deleted Successfully !'
    })
})
.catch(error=>{
    res.json({
        message:'An error Ocurred !'
    })
})
 }

 module.exports={
    index,show,store,update,destroy
 }