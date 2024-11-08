import React, { createContext, useState } from "react";
import { axiosInstanceUser } from "../api/axiosInstance";
import { useLocation,useNavigate } from "react-router-dom";

interface AuthProp {
    children: React.ReactNode
}

interface User {
    fullname:string,
    username:string
}

interface Context {
    user:User[],
    isAuthenticated:boolean
    login:(username:string,password:string) => Promise<void>
    signup:(fullname:string, username:string,password:string) => Promise<void>
    author:string,
    logout:() => void
}

const AuthContext = createContext<Context | undefined>(undefined)

export const AuthProvider = ({children}:AuthProp) => {
    const [user,setUser] = useState<User[]>([{
        fullname:"",
        username:""
    }])
    const [author, setAuthor] = useState<string>('')
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    
    //navigation setting
    const location = useLocation()
    const navigate = useNavigate()

    const from  = location?.state?.from?.pathname || '/'

    const login = async(username:string, password:string):Promise<void> => {
        try {
            const newUser ={
                username,
                password
            }
            const response = await axiosInstanceUser.post('/login',newUser)
            console.log(response.data)
            setIsAuthenticated(!isAuthenticated)
            setUser(prevUser => [...prevUser,response.data.user])
            setAuthor(response.data.user.username)
            navigate(from, {replace:true})
        }catch(error){
            console.log(error)
        }
    }

    const signup = async(fullname:string, username:string,password:string) => {
        try {
            const newUser = {
                fullname,
                username,
                password
            }
            const response = await axiosInstanceUser.post('/signup',newUser)
            console.log(response.data)
            navigate('/login')
        }catch(error){
            console.log(error)
        }
    }

    const logout = () => {
        setIsAuthenticated(!isAuthenticated)
        setUser([])
        setAuthor('')
    }
    
    

    return(
        <AuthContext.Provider value={{
            user,
            isAuthenticated,
            login,
            signup,
            author,
            logout
        }}>
        {children}
        </AuthContext.Provider>
    )
}

export default AuthContext