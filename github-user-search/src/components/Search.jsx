import React, { useState } from "react";
import { advancedUserSearch } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const data = await advancedUserSearch({ username, location, minRepos });
      setUsers(data.items || []); // GitHub search API returns { items: [...] }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center mt-6 px-4">
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="flex flex-col md:flex-row justify-center gap-2">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="border p-2 rounded w-full md:w-auto"
          />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            className="border p-2 rounded w-full md:w-auto"
          />
          <input
            type="number"
            min="0"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="Min Repositories"
            className="border p-2 rounded w-full md:w-auto"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Search
          </button>
        </div>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id} className="bg-white p-4 rounded shadow">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-20 h-20 rounded-full mx-auto"
            />
            <h2 className="text-xl mt-2">{user.login}</h2>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;