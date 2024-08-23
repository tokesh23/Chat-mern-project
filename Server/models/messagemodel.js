import mongoose from "mongoose"

const messageSchema = new mongoose.Schema({
    SenderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    reciverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:"true"
    },
    message:{
        type:String,
        required:true
    }
//createdt,updateAt



},{timestamps:true});
const message = mongoose.model("message",messageSchema);
export default message;
