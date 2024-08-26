const mongoose = require('mongoose');

const Patient = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    }
})
module.exports = mongoose.model("patient",Patient);