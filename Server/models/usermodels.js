import mongoose from "mongoose";

const  userSchema =new mongoose.Schema({
    fullName:{
        type:String ,
        required:true
        
    },
    userName:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minilegth:6
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"]
    },
    profilepic:{
        type:String,
        default:"",
    },
//createAt,updateAt

},{timestamps:true})

const User = mongoose.model("User",userSchema)

export default User;