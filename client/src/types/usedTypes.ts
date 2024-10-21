import { ReactNode } from "react"

interface Idea {
    title:string,
    description:string
    _id?:string
    vote?:string
}

interface IdeaProp {
    children:ReactNode
}

interface IdeaContextType {
    handleSubmit:(e:React.FormEvent<HTMLFormElement>)=>Promise<void>,
    handleVote: (id:string | undefined)=>Promise<void>,
    description:string,
    title:string,
    setTitle:React.Dispatch<React.SetStateAction<string>>
    setDescription:React.Dispatch<React.SetStateAction<string>>
    ideas:Idea[]
}


export type {
    Idea,
    IdeaContextType,
    IdeaProp
}