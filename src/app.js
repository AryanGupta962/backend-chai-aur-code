import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app=express();


app.use(cors({
  origin:process.env.CORS_ORIGIN,
  credentials:true,
}))

app.use(express.json({limit:'16kb'}));
app.use(express.urlencoded({extended:true})); //extended:true  means allowing nested object
app.use(express.static('public'));
app.use(cookieParser());


app.on('error',function(error){
  console.log("Application is not able to talk to the database");
  throw error;
});

export { app };