import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import connectDB from './configs/mongoDB.js'
import corsOptions from './configs/cors.js'
import cookieParser from 'cookie-parser'
import { userRouter } from './routes/userRouter.js'
import { ideaRouter } from './routes/ideaRouter.js'

const PORT = 3800
const app = express()



app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())

config()

connectDB()

//default route
app.get('/', (req,res) => {
    res.send('<p>Hello</p>')
})

//routes for login and signup
app.use('/api/user',userRouter)
//routes for create,delete,update and get ideas
app.use('/api/idea', ideaRouter)


//server startng point
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})