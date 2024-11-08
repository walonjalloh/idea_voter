import Content from "../models/contentSchema.js"

// getting all the idea stored in the database
export const getTodo = async (req, res) => {
    try {
        const idea = await Content.find({})
        res.send(idea)
    } catch (error) {
        res.status(500).json(error)
    }
}

//updating the vote api
export const updateTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedIdea = await Content.findByIdAndUpdate(id, { $inc: { vote: 1 } }, { new: true })
        if (!updatedIdea) {
            return res.status(404).json({ message: 'Content not found' })
        }

        res.json(updatedIdea)
    } catch (error) {
        console.log(`Error updating vote ${error}`)
        res.status(500).json({ message: 'Internal server error' })
    }
}

//post an idea
export const createTodo = async (req, res) => {
    try {
        const { title, description,author } = req.body

        if (!title || !description || !author) {
            return console.log('All fields are required')
        }

        const content = new Content({
            title,
            description,
            author
        })

        const response = await content.save()
        res.status(201).json(response.toObject())
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error in idea creation' })
    }
}

//deleting an idea 
export const deleteTodo = async (req, res) => {
    const { id } = req.params

    try {
        const idea = await Content.findByIdAndDelete(id)
        if (!idea) {
            return res.status(500).json({ message: 'Invalid' })
        }
        res.send(idea)
    } catch (error) {
        res.status(500).json({ message: 'Error in deleting' })
    }
}



