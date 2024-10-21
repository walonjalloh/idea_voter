import { useContext } from "react";
import IdeaContext from "../context/ideaContext";

const AddIdea = () => {
  const ideaContext = useContext(IdeaContext)

  return (
    <main className="flex flex-col items-center justify-center my-20 md:my-36 ">
      <h1 className="text-3xl font-bold mb-8">Add Your Idea</h1>
      <form onSubmit={ideaContext?.handleSubmit} className="w-full max-w-md p-4 rounded-lg shadow-md bg-white">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            required
            value={ideaContext?.title}
            onChange={(e) => ideaContext?.setTitle(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={ideaContext?.description}
            onChange={(e) => ideaContext?.setDescription(e.target.value)}
            className="w-full h-32 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-3 py-2 rounded-lg bg-blue-500 text-white font-bold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit Idea
        </button>
      </form>
    </main>
  );
};

export default AddIdea;