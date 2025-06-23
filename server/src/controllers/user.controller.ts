import { Request, Response } from "express";
import { contentModel } from "../models/user.model";




export const addcontent=async (req: Request,res: Response): Promise<void>=>{
    const {type, link, title, image, tags } = req.body;

    try {
        const content=await contentModel.create({
            title,
            link,
            type,
            tags,
            //@ts-ignore
            userId:req.user.id
        })

        res.status(200).json({
            success:true,
            message:"content added",
            content
        })

    } catch (error) {
        res.status(400).json({
            error:error,
            success:false,
            message:"Content not added!"
        })
    }
}

export const getcontent = async (req: Request,res: Response): Promise<void>=>{
    //@ts-ignore
    const userId=req.user.id;
    try {
        const content=await contentModel.find({userId:userId}).populate("userId", "username");

        res.status(200).json({
            success:true,
            message:"Content Fetched!",
            content
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Error in fetching content!",
            error:error
        })
    }
}

export const deletecontent = async (req: Request,res: Response): Promise<void>=>{
    const contentId = req.body.contentId;
    //@ts-ignore
    const userId=req.user.id;
    try {
        const content=await contentModel.deleteOne({
            _id: contentId,
            userId:userId
        });

        res.status(200).json({
            success:true,
            message:"Content deleted!",
            content
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Error in fetching content!",
            error:error
        })
    }
}