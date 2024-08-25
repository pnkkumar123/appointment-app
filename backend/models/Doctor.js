const mongoose =require( "mongoose");

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
    qualification:{
        type:String,
        required:true,
    },
    speciality:{
       type:String,
       required:true,
    },
    availibilty:{
        type:Date,
        
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
module.exports = mongoose.model("DoctorSchema",DoctorSchema);
