import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import connectDB from './configs/mongoDB.js'
import corsOptions from './configs/cors.js'
import User from './models/userSchema.js'
import Content from './models/contentSchema.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import authMiddleware from './middleware/authMiddleware.js'

const PORT = 3500
const app = express()



app.use(express.json())

app.use(cors(corsOptions))

config()

connectDB()

app.get('/', (req,res) => {
    res.send('<p>Hello</p>')
})

// getting all the idea stored in the database
app.get('/ideas', async(req,res) => {
   try{
    const idea = await Content.find({})
    res.send(idea)
   }catch(error){
    res.status(500).json(error)
   }
})

//updating the vote api
app.put('/ideas/:id', async(req,res) => {
    const { id } = req.params;
    try{
        const updatedIdea = await Content.findByIdAndUpdate(id, {$inc: {vote: 1}},{new: true})
        if (!updatedIdea){
            return res.status(404).json({message: 'Content not found'})
        }

        res.json(updatedIdea)
    }catch(error){
        console.log(`Error updating vote ${error}`)
        res.status(500).json({message:'Internal server error'})
    }
})

//post an idea
app.post('/ideas', async(req,res) => {
   try {
    const { title,description } = req.body

    if(!title || !description){
        return console.log('All fields are required')
    }

    const content  = new Content({
        title,
        description,
    })

    const response = await content.save()
    res.status(201).json(response.toObject())
   }catch(error){
    console.log(error)
    res.status(500).json({message:'Error in idea creation'})
   }
})

//deleting an idea 
app.delete('/ideas/:id', async(req,res) => {
    const { id } = req.params

    try{
        const idea = await Content.findByIdAndDelete(id)
        if(!idea){
            return res.status(500).json({message: 'Invalid'})
        }
        res.send(idea)
    }catch(error){
        res.status(500).json({message: 'Error in deleting'})
    }
})

//getting a specific idea
app.get('/ideas/:id',async(req,res) => {
    const { id } = req.params
    try{
        const idea = await Content.findById(id)
        res.send(idea)
    }catch(error){
        res.status(500).json({error})
    }
})



//user signup
app.post('/user/signup', async(req,res) => {
    const { fullName, username,password } = req.body
    try {
        //validating all the fields
        if(!fullName || !username || !password){
            return console.log('All fields are required')
        }

        //checking if a user exist
        const userExist = await User.findOne({username})
        if(userExist){
            return res.status(404).json({message: 'User with this email exist'})
        }

        const passwordHashed = await bcrypt.hash(password,10)

        const user = new User({
            fullName,
            username,
            password:passwordHashed
        })
        await user.save()
        const token = jwt.sign({_id:user._id.toString()}, process.env.JWT_SECRET)

        const userResponse = user.toObject()
        delete userResponse.password
        
        res.status(201).json({user: userResponse,token})

    }catch(error){
        console.log(`Sign up error ${error}`)
        res.status(500).json({message: 'Error occured during signup'})
    }
})

//user sigin 
app.post('/user/signin', async(req,res) => {
    const { username, password } = req.body
    try{
        //validating all the fields
        if(!username || !password){
            return console.log('All field are required')
        }

        const user = await User.findOne({ username })
        if(!user){
            return res.status(500).json({message:"Login failed"})
        }

        const passwordMatch = await bcrypt.compare(password, user.password)
        if(!passwordMatch){
            return res.status(500).json({message: 'Login failed'})
        }
        
        const token = jwt.sign({_id:user._id.toString()},process.env.JWT_SECRET)
        const userResponse = user.toObject()
        delete userResponse.password
        res.status(200).json({user: userResponse,token})
    }catch(error){
        console.log(error)
        res.status(400).json(error)
    }
})





app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})