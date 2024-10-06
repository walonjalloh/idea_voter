import User from "../models/userSchema.js"

const authMiddleware = async(req,res,next) => {
    try{
        const token = req.header('Authorization')?.replace('Bearer', '')
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const user = await User.findOne({_id:decoded._id})

        if (!user){
            return res.status(401).json({message: 'Token not found'})
        }

        req.token = token
        req.user = user
    }catch(error){
        res.status(401).send({error:'Please authenticate'})
    }
}

export default authMiddleware