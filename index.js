import express, { response } from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from 'mongoose';

const app = express();

app.get('/',(req,res)=>{
    console.log(req)
    return res.status(234).send('Welcome to MERN stack')
})



mongoose
    .connect(mongoDBURL)
    .then(() =>{
      console.log(`App connected to database`);
      app.listen(PORT, () =>{
        console.log(`APP IS LISTENING TO PORT : ${PORT}`)
      });
    })
    .catch((error) => {
        console.log(error);
    })