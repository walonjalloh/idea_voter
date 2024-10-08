import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Signin {
  username: string;
  password: string;
}

const Signin = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const url = "https://idea-voter-backend.vercel.app/user/signin";

  const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data: Signin = {
        username,
        password,
      };
      await axios.post(url, data);
      console.log(`Signin successful`);
      setPassword("");
      setUsername("");
    } catch (error) {
      console.log(error);
      setPassword("");
      setUsername("");
    }
  };

  return (
    <section className="flex items-center justify-center mt-28">
      <main className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <div className="mb-4 text-center">
          <p className="text-3xl font-semibold text-gray-800">Sign in</p>
        </div>
        <div>
          <form onSubmit={handleSumbit} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 mt-1 border rounded-md shadow-sm border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                required
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 mt-1 border rounded-md shadow-sm border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign in
            </button>
          </form>
        </div>
        <div className="mt-6 text-center">
          <Link to="/signup">
            <p className="text-sm text-indigo-600 hover:underline">
              or create an account
            </p>
          </Link>
        </div>
      </main>
    </section>
  );
};

export default Signin;
