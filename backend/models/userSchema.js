import mongoose from "mongoose";
const Schema = mongoose.Schema

const userSchema = new Schema({
    fullname:{
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
    },
    refreshToken: {
        type:String,
        default:" "
    }
})

const User = mongoose.model('User',userSchema)

export default User