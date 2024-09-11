const Booking = require("../models/Booking.js");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv=require("dotenv");
const Doctor = require("../models/Doctor.js");
const Patient = require("../models/Patient.js");
const generateSlots = require("../utils/GenerateSlots.js");
const moment=require('moment')
//BOOK APPOINTMENT
const bookeAppointmnetController = async (req, res) => {
    try {
      req.body.date = moment(req.body.date, "DD-MM-YYYY").toISOString();
      req.body.time = moment(req.body.time, "HH:mm").toISOString();
      req.body.status = "pending";
      const newAppointment = new Booking(req.body);
      await newAppointment.save();
      const user = await Patient.findOne({ _id: req.body.patientId });
   
      await user.save();
      res.status(200).send({
        success: true,
        message: "Appointment Book succesfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error While Booking Appointment",
      });
    }
  };
  
  // booking bookingAvailabilityController
  const bookingAvailabilityController = async (req, res) => {
    try {
      const date = moment(req.body.date, "DD-MM-YY").toISOString();
      const fromTime = moment(req.body.time, "HH:mm")
        .subtract(1, "hours")
        .toISOString();
      const toTime = moment(req.body.time, "HH:mm").add(1, "hours").toISOString();
      const doctorId = req.body.doctorId;
      const appointments = await Booking.find({
        doctorId,
        date,
        time: {
          $gte: fromTime,
          $lte: toTime,
        },
      });
      if (appointments.length > 0) {
        return res.status(200).send({
          message: "Appointments not Availibale at this time",
          success: true,
        });
      } else {
        return res.status(200).send({
          success: true,
          message: "Appointments available",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error In Booking",
      });
    }
  };
  
  const userAppointmentsController = async (req, res) => {
    try {
      const appointments = await Booking.find({
        userId: req.body.patientId,
      });
      res.status(200).send({
        success: true,
        message: "Users Appointments Fetch SUccessfully",
        data: appointments,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error In User Appointments",
      });
    }
  };


  
  
  const getAllBookings = async (req, res) => {
    try {
      // Fetch all bookings from the Booking model
      const bookings = await Booking.find();
  
      // If there are no bookings found
      if (!bookings || bookings.length === 0) {
        return res.status(404).send({
          success: false,
          message: "No bookings found",
        });
      }
  
      // Convert date to readable format for each booking
      const formattedBookings = bookings.map((booking) => ({
        ...booking.toObject(),
        date: moment(booking.date).format("DD-MM-YYYY"),  // Format date
        time: booking.time,  // Time is already a string, no need to convert
      }));
  
      res.status(200).send({
        success: true,
        bookings: formattedBookings,  // Send all formatted bookings
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error while fetching bookings",
      });
    }
  };
  

module.exports={bookeAppointmnetController,bookingAvailabilityController,userAppointmentsController,getAllBookings};