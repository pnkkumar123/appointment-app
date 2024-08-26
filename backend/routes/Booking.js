const express = require("express");

const {BookingFunction, GetBooking} = require("../controllers/Booking");


const booking = express.Router();

booking.post("/booking",BookingFunction);
booking.get("/get/:doctorId",GetBooking);

module.exports=booking;