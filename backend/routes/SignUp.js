const express = require('express');
const { SignIn,SignUp } =require('../controllers/Sign.js') ;



const route = express.Router();


route.post("/signup",SignUp);
route.post("/signin",SignIn)
module.exports = route