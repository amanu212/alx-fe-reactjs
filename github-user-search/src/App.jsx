import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import Search from "./components/Search"; // Assignment 2 component

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
      
      {/* Assignment 1 Components */}
      <div className="mt-4">
        <SearchBar onSearch={fetchUser} />
        <UserCard user={user} />
      </div>

      <hr className="my-10 border-t-2 border-gray-300" />

      {/* Assignment 2 Component */}
      <div className="mt-10">
        <Search />
      </div>
    </div>
  );
}

export default App;