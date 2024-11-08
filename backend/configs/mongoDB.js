import mongoose from "mongoose";

const connectDB = async() => {
    console.log('mongoDB connection with retry')
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
            
        })
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log(`Error connecting to the database ${error}`)
        settimeout(() => {
            connectDB()
        },5000)
    }
}

export default connectDB