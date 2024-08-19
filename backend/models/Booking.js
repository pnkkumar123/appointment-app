const mongoose = require("mongoose");

const Booking = new mongoose.Schema({
    name:{
        type:String,
        require:true,

    },
    email:{
          type:String,
          required:true,
    },
    mobile:{
        type:String,
        required:true
    },
    appointment:{
        type:Date,
        required:true,
    },
    problem:{
        type:String,
        required:true
    }
},
{timestamps:true}
)
module.exports= mongoose.model("booking",Booking);