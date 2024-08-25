const express = require('express');
const { SignIn,SignUp, Doctors } =require('../controllers/Sign.js') ;



const route = express.Router();


route.post("/signup",SignUp);
route.post("/signin",SignIn);
route.get("/doctors",Doctors)
module.exports = route