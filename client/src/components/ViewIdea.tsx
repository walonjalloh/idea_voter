import { useContext } from "react";
import IdeaContext from "../context/ideaContext";


const ViewIdea = () => {
  const { ideas,handleVote }= useContext(IdeaContext) || {}

  
  



  return (
    <section className="my-24">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-[50px] text-center">Vote for Your Favorite Idea</h1>
        <div className="ideas-grid grid grid-cols-1 md:grid-cols-2 gap-10">
          {ideas?.map((idea) => (
            <div key={idea._id} className="idea-card shadow-md rounded-lg p-4 hover:shadow-lg transition-all">
              <h2 className="text-xl font-semibold mb-4">{idea.title}</h2>
              <p className="text-gray-700">{idea.description}</p>
              <button
                className="btn-like flex items-center text-white bg-blue-500 my-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 shadow-sm"
                onClick={() => handleVote!(idea._id)}
              >
                Like: {idea.vote}
              </button>
              <h4>author: <span className="font-bold">@{idea.author}</span></h4>
            </div>
          ))}
          {ideas?.length === 0 && (
            <p className=" text-gray-500 font-medium text-center my-28">No ideas found yet.</p>
          )}
        </div>
      </main>
    </section>
  );
};

export default ViewIdea;