import mongoose from "mongoose";

const Schema = mongoose.Schema;

const contentSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    vote : {
        type:Number,
        default:0,
        required:true
    },
    author: {
        type:String,
        required:true
    }
})

const Content = mongoose.model('Content',contentSchema)

export default Content