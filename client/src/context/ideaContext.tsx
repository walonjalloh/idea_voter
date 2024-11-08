import { createContext,useState,useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstanceIdea } from "../api/axiosInstance";
import AuthContext from "./authContext";


interface Idea {
  title:string,
  description:string
  _id:string
  vote:string,
  author:string
}

interface IdeaProp {
  children:React.ReactNode
}

interface IdeaContextType {
  createIdea:(title:string, description:string)=>Promise<void>,
  handleVote: (id:string | undefined)=>Promise<void>,
  ideas:Idea[]
}

const IdeaContext  = createContext<IdeaContextType | undefined>(undefined)

export const  IdeaProvider = ({children}:IdeaProp) => {
    const [ideas, setIdeas] = useState<Idea[]>([]); 
    const navigate = useNavigate();
    const { author }  = useContext(AuthContext) || {}

    


  
    const createIdea = async (title:string,description:string):Promise<void> => {
      try {
        const idea = {
          title,
          description,
          author
        };
        const response = await axiosInstanceIdea.post('/', idea);
        setIdeas((prevIdea)=> [...prevIdea,response.data])
        navigate('/viewidea')
        console.log(`Idea submitted successfully!`);
      } catch (error) {
        console.error(error);
      }
    };

    
  
    useEffect(() => {
      const getData = async () => {
        try {
          const response = await axiosInstanceIdea.get('/');
          setIdeas(response.data); 
        } catch (error) {
          console.error(`Error fetching data: ${error}`);
        }
      };
  
      getData();
    }, []);
  
    const handleVote = async (id: string | undefined):Promise<void> => { 
      try {
        const updatedIdeaResponse = await axiosInstanceIdea.patch(`/${id}`, { vote: 1 }); 
        const updatedIdea = updatedIdeaResponse.data
        setIdeas((prevIdeas) =>
          prevIdeas.map((idea) => (idea._id === id ? updatedIdea : idea))
        );
      } catch (error) {
        console.error(`Error updating vote: ${error}`);
      }
    };

    return(
        <IdeaContext.Provider value= {{
            createIdea,
            handleVote,
            ideas,
        }}>
        {children}
        </IdeaContext.Provider>
    )
}

export default IdeaContext