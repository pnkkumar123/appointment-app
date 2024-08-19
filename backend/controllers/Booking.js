const Booking = require("../models/Booking.js");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv=require("dotenv");

// function for booking
 const BookingFunction=async(req,res)=>{
    const {problem,name,mobile,email,appointment}=req.body;

    try{
     const existingBooking = await Booking.findOne({$or:[{mobile},{email}]})
   if(existingBooking){
    return res.status(400).json({message:"booking already done"})
   }

   const book = new Booking({
    name,
    email,
    mobile,
    appointment,
    problem

   }) 
   const result  = await book.save();
   return res.status(201).json({book:result,message:"booking created successfully"})
    }catch(error){
        res.status(400).json({message:error})
    }
}
module.exports=BookingFunction