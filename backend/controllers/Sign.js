const Doctor = require("../models/Doctor.js") ;
const bcryptjs = require('bcryptjs') ;
const jwt =require("jsonwebtoken") 
const dotenv =require('dotenv')
dotenv.config()
// function to add doctor details
 const SignUp = async(req,res,next)=>{
    const {email,name,password,qualification,speciality,availibility,username,mobile}=req.body;
     try{
      const existingUser = await Doctor.findOne({$or:[{email},{username}]});
      if(existingUser){
         return res.status(400).json({error:"User already exists"});
      }
      // hashed password
      const hashedPassword = bcryptjs.hashSync(password,10);
         const doctor = new Doctor({
            email,
            name,
            password:hashedPassword,
            qualification,
            speciality,
            availibility,
            username,
            mobile
         })
         const result = await doctor.save();
         return res.status(201).json({doctor:result,message:"user created successfully"})
     }catch(err){
        console.log(err)
        return res.status(401).json({error:"error occured while saving data"})
     }


}
// function to sign in doctor
 const SignIn = async (req,res,next)=>{
const {email,password} = req.body;
try{
 const validUser = await Doctor.findOne({email});
 if(!validUser){
   return next(console.log("error"))
 }
 const validPassword = bcryptjs.compareSync(password,validUser.password);
 if(!validPassword){
   return next(console.log("wrong credentials"))
 }
 const {password:hashedPassword,...rest}= validUser._doc;
 const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET)
 const age = new Date(Date.now()+3600000);
 res.cookie('access_token',token,{httpOnly:true,expires:age},


 ).status(200)
 .json(rest)
}catch(err){
   console.log(err)
}
}
// getting doctors list
const Doctors = (req,res)=>{
    Doctor.find()
   .then(doctors=>{
      return res.status(200).json({doctors})
   })
   .catch(error=>{
      return res.status(500).json({message:error})
   })

}
module.exports={SignIn,SignUp,Doctors}