import axios from "axios";

const axiosInstanceUser = axios.create({
    baseURL:'https://idea-voter-backend.vercel.app/api/user',
    headers: {
        "Content-Type":'application/json'
    }
})

const axiosInstanceIdea = axios.create({
    baseURL:'https://idea-voter-backend.vercel.app/api/idea',
    headers: {
        "Content-Type":'application/json'
    }
})

export {
    axiosInstanceUser,
    axiosInstanceIdea
} 