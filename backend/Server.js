const express = require( 'express');
const  mongoose =require('mongoose') 
const cors =require('cors') ;
// import { SignUp } from './controllers/Sign.js';
const route =require('./routes/SignUp.js') ;
const booking = require('./routes/Booking.js')
mongoose.connect('mongodb+srv://pankajkanwar420:7CiwpAyaXBMVJ9u1@cluster0.zbakjsh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('connected to mongodb');
}).catch((error)=>{
    console.log(error)
})

const app = express();
app.use(cors());
app.use(express.json());

app.listen("5000",()=>{
    console.log(" 5000 port listed");
})
app.use("/sign",route);
app.use("/book",booking)

