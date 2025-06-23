import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { userModel } from "../models/user.model";
import { userProfileSchema } from "../utils/userValidation";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

export const register = async (req: Request, res: Response): Promise<void>  =>{
    const { username, password } = req.body;
    
    try {
        if (!username && !password) {
            res.status(400).json({
                success: false,
                message: "Username and password are required fields!"
            });
            return;
        }
        const { success } = userProfileSchema.safeParse({ username, password });
        if (!success) {
            res.status(400).json({
                success: false,
                message: "Username and password are required fields!"
            });
            return;
        }

        const existingUser = await userModel.findOne({ username });
        if (existingUser) {
            res.status(409).json({
                success: false,
                message: "Username already exists"
            });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userModel.create({
            username,
            password:hashedPassword
        })
        res.status(200).json({
            success: true,
            user: newUser
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "user registration failed!",
            error: error,
        })
    }
}

export const login = async (req: Request, res: Response): Promise<void>  => {
    const { username, password } = req.body;
    try {
        const {success}=userProfileSchema.safeParse({username, password});
        if (!success) {
            res.status(400).json({
                success: false,
                message: "Username and password are required fields!"
            });
            return;
        }
        const user = await userModel.findOne({ username });
        if (!user) {
            res.status(400).json({
                success: false,
                message: "Invalid username or password!"
            });
            return;
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(400).json({
                success: false,
                message: "Invalid username or password!"
            });
            return;
        }
        const token = jwt.sign({id:user._id, username:user.username}, process.env.JWT_SECRET!, {expiresIn: "24h"});
        const cookieOptions = {
            httpOnly: true,
            secure: true,
            maxAge: 24 * 60 * 60 * 1000
        };
        res.cookie("token", token, cookieOptions);

        res.status(200).json({
            success:true,
            message:"User login successful!",
            token:token
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "user login failed!",
            error: error,
        })
    }
}