import mongoose from "mongoose";

const connectDB = () => {
    console.log('mongoDB connection with retry')
    try {
        mongoose.connect(process.env.DATABASE_URI, {
            
        })
        console.log('connected to the database')
    } catch (error) {
        console.log(`Error connecting to the database ${error}`)
        settimeout(() => {
            connectDB()
        },5000)
    }
}

export default connectDB