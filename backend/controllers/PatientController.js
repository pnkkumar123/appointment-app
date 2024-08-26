const Patient = require("../models/Patient.js");
const bcryptjs = require('bcryptjs');
const jwt=require('jsonwebtoken');


// function to add patient
const patientAdd=async(req,res)=>{
    const {name,mobile,email,username}=req.body;

    try{
        const existingUser = await Patient.findOne({$or:[{email},{username}]});
        if(existingUser){
            return res.status(400).json({message:"user already exists"});
        }
        const patient = await new Patient({
            name,
            email,
            username,
            mobile
        }) 
        const result = await patient.save();
        return res.status(201).json({patient:result,message:"user created successfully"});

    }catch(error){
        res.status(404).json({message:error});
    }
}
// get patient info
const patientInfo = (req,res)=>{
       Patient.find()
       .then(patients=>{
        return res.status(200).json({patients});
       })
       .catch(error=>{
        return res.status(500).json({message:error})
       })
}
module.exports={patientAdd,patientInfo};