import User from "../models/userSchema.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

//user signup
export const signup =  async(req,res) => {
    const { fullname, username, password } = req.body
    try {
        //validating all the fields
        if(!fullname || !username || !password){
            return res.status(400).json({message:'All fields are required'})
        }

        //checking if a user exist
        const userExist = await User.findOne({username})
        if(userExist){
            return res.status(404).json({message: 'User with this email exist'})
        }

        const passwordHashed = await bcrypt.hash(password,10)

        const user = new User({
            fullname,
            username,
            password:passwordHashed
        })
        await user.save()
        
        res.status(201).json({message:'User signup successfull'})

    }catch(error){
        console.log(`Sign up error ${error}`)
        res.status(500).json({message: 'Error occured during signup'})
    }
}

//user sigin 
export const login = async(req,res) => {
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
        
        const accessToken = jwt.sign({_id:user._id.toString()},process.env.ACCESS_TOKEN_SECRET,{
            expiresIn:"15m"
        })
        const refreshToken = jwt.sign({_id:user._id}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn:'1d'
        })
        
        user.refreshToken = refreshToken
        await user.save()

        res.cookie('user',refreshToken,{
            httpOnly:true,
            secure:true,
            maxAge:24 * 60 * 60 * 1000,
            sameSite:"None"
        })
        const userResponse = user.toObject()
        delete userResponse.password
        delete userResponse.refreshToken
        res.status(200).json({user: userResponse,accessToken})
    }catch(error){
        console.log(error)
        res.status(400).json(error)
    }
}
