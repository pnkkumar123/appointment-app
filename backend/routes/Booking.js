const express = require("express");

const BookingFunction = require("../controllers/Booking");


const booking = express.Router();

booking.post("/booking",BookingFunction);

module.exports=booking;