import express from 'express';
import dotenv from "dotenv";
import {connectDB} from './config/db.js';
import productRouts from "./routs/product.route.js";
import path from "path";
dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();

const __dirname = path.resolve();

app.use(express.json()); //allows us to accept JSON data in the body 

app.use("/api/products",productRouts);

// configuration for production ------------------------
if(process.env.NODE_ENV == "production"){
    app.use(express.static(path.join(__dirname,"/frontend/dist")));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"frontend", "dist","index.html"))
    })
}

app.listen(PORT,async()=>{
    try {
        await connectDB();
        console.log("✅ MongoDB connected successfully");
        console.log(`🚀 Server started at http://localhost:${PORT}`);
    } catch (error) {
        console.error("❌ Failed to start server:", error);
        process.exit(1);
    }
});


