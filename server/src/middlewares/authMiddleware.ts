import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const authMiddleware = async (req:Request, res:Response, next: NextFunction): Promise<void>=>{
    try {
        const token = req.cookies?.token;
        if(!token){
           res.status(400).json({
                success:false,
                message:"Token not found!"
            });
            return;
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET!);

        if(!decode){
            res.status(400).json({
                success:false,
                message:"Token not verified!"
            });
            return;
        } 
        //@ts-ignore
        req.user=decode;
        next();

    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Token not verified!",
            error:error
        })
    }
}