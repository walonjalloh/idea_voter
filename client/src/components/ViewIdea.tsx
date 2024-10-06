import { useState, useEffect } from "react";
import axios from "axios";

// Interface for the idea object
interface Idea {
  _id: string; // Assuming ID is a string
  title: string;
  description: string;
  vote: number; // Vote count
}

const ViewIdea = () => {
  const [ideas, setIdeas] = useState<Idea[]>([]); // Use plural for ideas
  const url = 'http://localhost:3500/ideas';

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(url);
        setIdeas(response.data); // Set data directly (assuming correct API response format)
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      }
    };

    getData();
  }, []);

  const handleVote = async (id: string) => { // Handle vote by ID
    try {
      const updatedIdeaResponse = await axios.put(`${url}/${id}`, { vote: 1 }); // Assuming vote update logic on server
      const updatedIdea = updatedIdeaResponse.data;
      setIdeas((prevIdeas) =>
        prevIdeas.map((idea) => (idea._id === id ? updatedIdea : idea))
      ); // Update local state with updated vote count
    } catch (error) {
      console.error(`Error updating vote: ${error}`);
    }
  };

  return (
    <section className="my-24">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-[50px] text-center">Vote for Your Favorite Idea</h1>
        <div className="ideas-grid grid grid-cols-1 md:grid-cols-2 gap-10">
          {ideas.map((idea) => (
            <div key={idea._id} className="idea-card shadow-md rounded-lg p-4 hover:shadow-lg transition-all">
              <h2 className="text-xl font-semibold mb-4">{idea.title}</h2>
              <p className="text-gray-700">{idea.description}</p>
              <button
                className="btn-like flex items-center text-white bg-blue-500 my-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 shadow-sm"
                onClick={() => handleVote(idea._id)}
              >
                Like: {idea.vote}
              </button>
            </div>
          ))}
          {ideas.length === 0 && (
            <p className="text-center text-gray-500 font-medium">No ideas found yet.</p>
          )}
        </div>
      </main>
    </section>
  );
};

export default ViewIdea;