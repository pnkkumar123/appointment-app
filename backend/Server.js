import express from 'express';
import mongoose from 'mongoose'
import cors from 'cors';
// import { SignUp } from './controllers/Sign.js';
import route from './routes/SignUp.js';
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
    console.log("port listed");
})
app.use("/sign",route);

