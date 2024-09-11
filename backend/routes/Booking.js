const express = require("express");

const {bookeAppointmnetController,bookingAvailabilityController,userAppointmentsController, getAllBookings } = require("../controllers/Booking");


const booking = express.Router();

booking.post("/booking",bookeAppointmnetController,);
booking.post( "/booking-availbility",bookingAvailabilityController);
booking.get("/bookings",getAllBookings);

module.exports=booking;