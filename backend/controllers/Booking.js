const Booking = require("../models/Booking.js");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv=require("dotenv");
const Doctor = require("../models/Doctor.js");
const Patient = require("../models/Patient.js");
const generateSlots = require("../utils/GenerateSlots.js");

// function for booking
const BookingFunction = async (req, res) => {
    const { doctorId, patientId, timeSlot } = req.body;

    try {
        // Check if the doctor and patient exist
        const doctor = await Doctor.findById(doctorId);
        const patient = await Patient.findById(patientId);
        if (!doctor) return res.status(404).json({ message: "Doctor not found" });
        if (!patient) return res.status(404).json({ message: "Patient not found" });

        // Ensure timeSlot is parsed correctly
        const parsedTimeSlot = new Date(timeSlot);
        if (isNaN(parsedTimeSlot.getTime())) {
            return res.status(400).json({ message: "Invalid time slot value" });
        }

        // Check if the selected time slot is already booked
        const existingBooking = await Booking.findOne({ doctorId, timeSlot: parsedTimeSlot.toISOString() });
        if (existingBooking) {
            return res.status(400).json({ message: "This time is already booked" });
        }

        // Create a new booking
        const book = new Booking({
            doctorId,
            patientId,
            timeSlot: parsedTimeSlot.toISOString(), // Convert to ISO string for consistent storage
        });

        const result = await book.save();
        return res.status(201).json({ booking: result, message: "Booking created successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

  
  
  
const GetBooking = async (req, res) => {
    const doctorId = req.params.doctorId;

    try {
        // Find the doctor by ID
        const doctor = await Doctor.findById(doctorId);
        if (!doctor) return res.status(404).json({ message: "Doctor not found" });

        // Generate all possible slots based on doctor's availability
        const allSlots = generateSlots(doctor.availibilty);

        // Get booked slots for the doctor
        const bookedAppointments = await Booking.find({ doctorId }).select('timeSlot');

        // Convert booked time slots to a more usable format
        const bookedSlots = bookedAppointments.map((appointment) => {
            const timeSlotStr = appointment.timeSlot;
            try {
                // Convert timeSlot from string to Date object
                const date = new Date(timeSlotStr);
        
                // Check if date is valid
                if (isNaN(date.getTime())) {
                    console.error("Invalid time slot:", timeSlotStr);
                    return null; // Or handle invalid time slots accordingly
                }
        
                // Format the date and time
                const day = date.toDateString().split(" ").slice(1, 3).join(" "); // e.g., "Aug 26"
                const time = date.toTimeString().split(" ")[0].substring(0, 5); // e.g., "15:30"
        
                return {
                    day,
                    time,
                };
            } catch (error) {
                console.error("Error processing time slot:", timeSlotStr, error);
                return null; // Or handle invalid time slots accordingly
            }
        }).filter(slot => slot !== null); // Remove invalid slots
        

        // Remove duplicate time slots from bookedSlots
        const uniqueBookedSlots = bookedSlots.reduce((acc, current) => {
            const x = acc.find(item => item.day === current.day && item.time === current.time);
            if (!x) {
                return acc.concat([current]);
            } else {
                return acc;
            }
        }, []);

        // Filter out booked slots from available slots
        const availableSlots = allSlots.filter(
            (slot) => !uniqueBookedSlots.some((booked) => booked.day === slot.day && booked.time === slot.time)
        );

        res.json({ availableSlots, bookedSlots: uniqueBookedSlots });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


  
  
  
// function generateSlotr(availibilty){
//     const {days,timeRanges}=availibilty;
//     const slots = [];

//     days.forEach((day)=>{
//         timeRanges.forEach((range)=>{
//             const startTime=new Date(`1970-01-01T${range.start}:00`);
//             const endTime=new Date(`1970-01-01T${range.end}:00`);

//             while(startTime<endTime){
//                 slots.push({
//                     day,
//                     time:startTime.toTimeString().substring(0,5),
//                 });
//                 startTime.setMinutes(startTime.getMinutes()+30);
//             }
//         })
//     })
//     return slots;}
module.exports={BookingFunction,GetBooking};