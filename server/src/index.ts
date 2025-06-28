import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes";
import cors from 'cors';
dotenv.config();
const app = express();
const port = process.env.PORT ?? 5000;
connectDB();

//middlewares
app.use(cors({
      origin: [process.env.BASE_URL, 'http://localhost:5173', 'http://localhost:5174', 'http://localhost:3000'].filter((origin): origin is string => Boolean(origin)),
      credentials: true,
      methods: ["GET", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
    }))
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/user", userRoutes);


app.listen(port , ()=>{
    console.log("app listening on port ", port);
})