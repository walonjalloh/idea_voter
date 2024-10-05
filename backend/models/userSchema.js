import mongoose from "mongoose";
// import bcrypt from 'bcrpyt'


const Schema = mongoose.Schema

const userSchema = new Schema({
    fullName:{
        type:String,
        required:true
    },
    username :{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const User = mongoose.model('User',userSchema)

export default User