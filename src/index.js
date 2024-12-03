
import express from 'express'
import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config(); // Load .env file

console.log("MONGODB_URI:", process.env.MONGODB_URI);

connectDB();


/*const app=express();
(async()=>{
    try{
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
app.on((error)=>{
    console.log("Express Error", error);
    throw error;
    app.listen(process.env.PORT,()=>{
        console.log("Server is running on port", process.env.PORT);
    })
})
    }
    catch(error){
        console.log("Mongoose Error", error);
    }
})
()*/