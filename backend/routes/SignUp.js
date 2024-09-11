const express = require('express');
const { SignIn,SignUp, Doctors, deleteDoctor } =require('../controllers/Sign.js') ;



const route = express.Router();


route.post("/signup",SignUp);
route.post("/signin",SignIn);
route.get("/doctors",Doctors);
route.delete("/doctors/:id",deleteDoctor);
module.exports = route