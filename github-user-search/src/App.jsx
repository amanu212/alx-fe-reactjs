import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import { fetchUserData } from './services/githubService';
// Removed: import Search from './components/Search'; (not used)

function App() {
  const [user, setUser] = useState(null);

  const fetchUser = async (username) => {
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) throw new Error("User not found");
      const data = await res.json();
      setUser(data);
    } catch (err) {
      setUser(null);
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold text-center pt-8">GitHub User Search</h1>
      <SearchBar onSearch={fetchUser} />
      <UserCard user={user} />
    </div>
  );
}

export default App;