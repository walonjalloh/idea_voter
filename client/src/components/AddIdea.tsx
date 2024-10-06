import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Interface for the idea object
interface Idea {
  title: string;
  description: string;
}

const AddIdea = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const navigate = useNavigate();
  const url = 'https://idea-voter-backend.vercel.app/ideas';

  const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const idea: Idea = {
        title,
        description,
      };
      await axios.post(url, idea);
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

  return (
    <main className="flex flex-col items-center justify-center my-20 md:my-36 ">
      <h1 className="text-3xl font-bold mb-8">Add Your Idea</h1>
      <form onSubmit={handleSumbit} className="w-full max-w-md p-4 rounded-lg shadow-md bg-white">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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