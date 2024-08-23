import mongoose from "mongoose";
import message from "./messagemodel";

const conversationSchema= new mongoose.Schema({
    participants:[
       { 
        type:mongoose.Schema.Types.ObjectId,

       }

    ],
    message:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "message",
             default:[]
        }
    ]
},{timestamps:true}
);

const Conversation = mongoose.model("Conversation",conversationSchema)



export default Conversation;