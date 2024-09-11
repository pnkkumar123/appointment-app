const mongoose =require( "mongoose");

const timeRangeSchema = new mongoose.Schema({
    start: { type: String, required: true },
    end: { type: String, required: true },
});

const DoctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    qualification: {
        type: String,
        required: true,
    },
    speciality: {
        type: String,
        required: true,
    },
    availability: {
        days: {
            type: [String],
            enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            required: true,
        },
        TimeRanges: [timeRangeSchema],
    },
    
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    fee: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        required: true,
        unique: true,
    },
});

module.exports = mongoose.model("DoctorSchema",DoctorSchema);
