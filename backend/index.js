import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import connectDB from './configs/mongoDB.js'
import corsOptions from './configs/cors.js'
import User from './models/userSchema.js'
import Content from './models/contentSchema.js'

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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})