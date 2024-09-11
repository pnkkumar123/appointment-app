const Doctor = require("../models/Doctor.js");
const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config();

// Function to add doctor details
const SignUp = async (req, res, next) => {
   const {
       email,
       name,
       password,
       fee,
       qualification,
       speciality,
       availability = { days: [], TimeRanges: [] }, // Default values
       username,
       mobile
   } = req.body;

   try {
       const existingUser = await Doctor.findOne({ $or: [{ email }, { username }] });
       if (existingUser) {
           return res.status(400).json({ error: "User already exists" });
       }

       // Hashed password
       const hashedPassword = bcryptjs.hashSync(password, 10);

       const doctor = new Doctor({
           email,
           name,
           fee,
           password: hashedPassword,
           qualification,
           speciality,
           availability: {
               days: availability.days || [], // Ensure default empty array
               TimeRanges: availability.TimeRanges || [] // Ensure default empty array
           },
           username,
           mobile
       });

       const result = await doctor.save();
       return res.status(201).json({ doctor: result, message: "User created successfully" });

   } catch (err) {
       console.log(err);
       return res.status(401).json({ error: "Error occurred while saving data" });
   }
};



// Function to sign in doctor
const SignIn = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // Find the doctor by email
        const validUser = await Doctor.findOne({ email });
        if (!validUser) {
            return res.status(401).json({ error: "User not found" });
        }

        // Check if the password is correct
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        // Generate a JWT token
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Set the cookie and return response
        const age = new Date(Date.now() + 3600000); // Cookie expiry time
        res.cookie('access_token', token, { httpOnly: true, expires: age })
           .status(200)
           .json({ ...validUser._doc, password: undefined }); // Exclude password from response
    } catch (err) {
        console.error("Error occurred during sign-in:", err);
        return res.status(500).json({ error: "Error occurred during sign-in" });
    }
};

// Function to get doctors list
const Doctors = (req, res) => {
    Doctor.find()
        .then(doctors => {
            return res.status(200).json({ doctors });
        })
        .catch(error => {
            console.error("Error occurred while fetching doctors:", error);
            return res.status(500).json({ message: "Error occurred while fetching doctors" });
        });
};
// function to delete doctor
const deleteDoctor = async(req,res)=>{
    try{
        const doctorId = req.params.id;
  const result =   await Doctor.findByIdAndDelete(doctorId)
   if(!result){
    return res.status(404).json({message:"doctor not found"});
}
res.status(204).send()
}
   catch(error){
       res.status(500).json({message:error.message})
   }
    }
  
module.exports = { SignIn, SignUp, Doctors,deleteDoctor,deleteDoctor };
