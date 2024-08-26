const express = require('express');
const {patientAdd,patientInfo} = require('../controllers/PatientController.js');

const patientRoute = express.Router();

patientRoute.post("/registration",patientAdd);
patientRoute.get("/patients",patientInfo);
module.exports=patientRoute;