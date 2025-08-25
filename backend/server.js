import express from 'express';
import dotenv from "dotenv";
import {connectDB} from './config/db.js';
import productRouts from "./routs/product.route.js";
// import Product from './models/product.model.js';  
// import mongoose from 'mongoose'
dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json()); //allows us to accept JSON data in the body 

app.use("/api/products",productRouts);

app.listen(PORT,()=>{
    connectDB();
    console.log("server started at http://localhost:"+PORT);
});


// FibZcgA7JmouGaL6