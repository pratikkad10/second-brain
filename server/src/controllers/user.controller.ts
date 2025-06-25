import { Request, Response } from "express";
import { contentModel, linkModel, userModel } from "../models/user.model";
import { hashString } from "../utils/round";



export const addcontent=async (req: Request,res: Response): Promise<void>=>{
    const {type, link, title,  tags } = req.body;

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

export const shareContent = async (req:Request, res:Response)=>{
    const share = req.body.share;

    try {
        if(share){
        const existingLink= await linkModel.findOne({
            //@ts-ignore
            userId:req.user.id
        })

        if(existingLink){
            res.status(200).json({
                success:true,
                hash:existingLink.hash
            })
            return;
        }

        const link=await linkModel.create({
            hash:hashString(5),
            //@ts-ignore
            userId:req.user.id
        })

        res.status(200).json({
                success:true,
                link
            })

    }else{
        try {
            await linkModel.deleteOne({
                //@ts-ignore
                userId:req.user.id
            })

            res.status(200).json({
                success:true,
                message:"deleted shared entry!"
            })
        } catch (error) {
            res.status(400).json({
            success:false,
            message:"Error in deleting content!",
            error:error
        })
        }
    }



    } catch (error) {
        res.status(200).json({
            success:false,
            message:"error in share content",
            error
        })
    }
}

export const fetchsharedEntry =async (req:Request, res:Response)=>{
    const hash=req.params.share;

    try {
        const link=await linkModel.findOne({
            hash
        });

        if(!link){
            res.status(400).json({
            success:false,
            message:"error in fetch content"
        })}

        const content = await contentModel.findOne({
            userId:link?.userId
        })

        const user=await userModel.findOne({
            _id:link?.userId
        });

        if(!user){
            res.status(400).json({
            success:false,
            message:"error fetch user"
        })}


        res.status(200).json({
            success:true,
            message:"fetched",
            content:content,
            user:user?.username
        })


    } catch (error) {
        res.status(400).json({
            success:false,
            message:"error in fetch content",
            error
        })
    }
}