import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    username:{
         type:String,
         require:true,
         unique:true,
    },
    mobile:{
        type:Number,
        require:true,
        unique:true,
    }
})
const Doctor = mongoose.model("DoctorSchema",DoctorSchema);
export default Doctor;