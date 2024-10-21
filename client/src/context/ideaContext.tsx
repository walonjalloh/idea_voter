import { createContext,useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Idea,IdeaProp,IdeaContextType } from "../types/usedTypes.ts";
import { getIdeaAndPost } from "../urls/usedUrls.ts";

const IdeaContext  = createContext<IdeaContextType | undefined>(undefined)

export const  IdeaProvider = ({children}:IdeaProp) => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [ideas, setIdeas] = useState<Idea[]>([]); 
    const navigate = useNavigate();


  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>):Promise<void> => {
      e.preventDefault();
      try {
        const idea: Idea = {
          title,
          description,
        };
        await axios.post(getIdeaAndPost, idea);
        setIdeas((prevIdea)=> [...prevIdea,idea])
        console.log(`Idea submitted successfully!`);
        setDescription('');
        setTitle('');
        navigate('/viewidea');
      } catch (error) {
        console.error(error);
        setDescription('');
        setTitle('');
      }
    };

    
  
    useEffect(() => {
      const getData = async () => {
        try {
          const response = await axios.get(getIdeaAndPost);
          setIdeas(response.data); 
        } catch (error) {
          console.error(`Error fetching data: ${error}`);
        }
      };
  
      getData();
    }, []);
  
    const handleVote = async (id: string | undefined):Promise<void> => { 
      try {
        const updatedIdeaResponse = await axios.put(`${getIdeaAndPost}/${id}`, { vote: 1 }); 
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
            handleSubmit,
            handleVote,
            ideas,
            setDescription,
            description,
            title,
            setTitle
        }}>
        {children}
        </IdeaContext.Provider>
    )
}

export default IdeaContext