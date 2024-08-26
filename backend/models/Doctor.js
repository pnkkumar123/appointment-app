const mongoose =require( "mongoose");

const timeRangeSchema=new mongoose.Schema({
    start:{type:String,require:true},
    end:{type:String,require:true},
});

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
        days:{
            type:[String],
            enum:["Monday","Tuesday","Wednesday","Thrusday","Friday"],
            require:true,
        
        },
        TimeRanges:[timeRangeSchema],
        
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
    fee:{
        type:String,
        required:true,
    },
    mobile:{
        type:Number,
        require:true,
        unique:true,
    }
})
module.exports = mongoose.model("DoctorSchema",DoctorSchema);
