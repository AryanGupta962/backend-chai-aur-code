// require('dotenv').config({path:'./env'});
import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({path:'./env'})
connectDB().
then(()=>{
    app.listen(process.env.PORT||8000,function(){
      console.log(`App is started on PORT ${process.env.PORT||8000}`)
    });
})
  .catch((err)=>{
    console.log("Mongo DB connection failed !",err);
  })







/*
import express from 'express';
const app=express();
(async ()=>{
  try{
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error",(error)=>{
      console.log("Application is not able to talk to the database");
      throw error;
    })

    app.listen(process.env.PORT,()=>{
      console.log(`App is listening on PORT : ${process.env.PORT}`);
    })

  } catch(error){
    console.log("Error: ",error);
  }
})()*/