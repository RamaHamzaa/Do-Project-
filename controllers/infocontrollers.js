const { response } = require('express')
const infomdel= require('../model/infomodel')
const { model } = require('mongoose')
var generateSafeId = require('generate-safe-id');

//show the list info

const index=(req,res,next) =>{
    email = req.params.email
    infomdel.find( {email : email})
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

//show single info

const show=(req,res,next) =>{

    let infomdelID=req.body.infomdelID
    infomdel.findById(infomdelID)
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
 //added new info

 const store =(req,res,next)=>{
    var id = generateSafeId();
    let info =new infomdel({
    _id:id,
    email:req.body.email,
    homework:req.body.homework,
     
    })

    info.save()
    .then(response =>{
        res.json({
            message:'Info Added Successfully !'
        })
    })
    .catch(error=>{
        res.json({
            message:'Info error Ocurred !'
        })
    })
 }

 //update an info

 const update=(req,res,next)=>{
    let infomdelID =req.body.infomdelID

    let updatedData={
        email:req.body.email,
        homework:req.body.homework, 
    }
    infomdel.findByIdAndUpdate(infomdelID,{$set:updatedData})

    .then(() =>{
        res.json({
            message:'Info updated Successfully !'
        })
    })
    .catch(error=>{
        res.json({
            message:'An error Ocurred !'
        })
    })
 }

 //delete an info

 const destroy=(req,res,next)=>{
 let infomdelID =req.body.infomdelID
 infomdel.findByIdAndRemove(infomdelID)

 .then(() =>{
    res.json({
        message:'Info deleted Successfully !'
    })
})
.catch(error=>{
    res.json({
        message:'An error Ocurred !'
    })
})
 }

 //delete all info

 const deletAll = (req,res,next)=>{
    var email = req.body.email
    infomdel.deleteMany({email : email}).then(response => {
        res.json({
            response
        })
    }).catch(error => {
        res.json({
            message : "An Error Catched !"
        })
    })
}

 module.exports={
    index,show,store,update,destroy,deletAll
 }