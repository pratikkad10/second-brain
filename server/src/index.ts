import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes";
dotenv.config();
const app = express();
const port = process.env.PORT ?? 5000;
connectDB();

//middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/user", userRoutes);

app.listen(port , ()=>{
    console.log("app listening on port ", port);
})