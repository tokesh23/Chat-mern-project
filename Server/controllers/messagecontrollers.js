import message from "../models/messagemodel.js";

export const sendMessage = async (req,res)=>{
    try {
        const {message}= req.body;
        const{id:reciverId}= req.params;
        const senderId = req.userId
        
    } catch (error) {
        console.log("Error in sending controller",error,message);
        
        res.status(500).json({error:error.message})
        
    }
}