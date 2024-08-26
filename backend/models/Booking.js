const mongoose = require("mongoose");

const Booking = new mongoose.Schema({
    doctorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor',
        require:true,

    },
    patientId:{
          type:mongoose.Schema.Types.ObjectId,
          ref:'Patient',
          required:true,
    },
    timeSlot: {
        type: String, 
        required: true,
      },
   status:{type:String,default:'booked'},
},
{timestamps:true}
)
module.exports= mongoose.model("booking",Booking);