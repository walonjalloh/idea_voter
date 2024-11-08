import axios from "axios";

const axiosInstanceUser = axios.create({
    baseURL:'http://localhost:3800/api/user',
    headers: {
        "Content-Type":'application/json'
    }
})

const axiosInstanceIdea = axios.create({
    baseURL:'http://localhost:3800/api/idea',
    headers: {
        "Content-Type":'application/json'
    }
})

export {
    axiosInstanceUser,
    axiosInstanceIdea
} 