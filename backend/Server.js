import express from 'express';
import 'dotenv/config';
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    return res.send("response is comming")
})

app.listen(port,()=>{
    console.log("Server is running")
})
