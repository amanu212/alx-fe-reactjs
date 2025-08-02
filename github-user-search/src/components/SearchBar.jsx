import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== "") {
      onSearch(username);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-10">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        className="border p-2 rounded-l-md w-64"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 rounded-r-md">
        Search
      </button>
    </form>
  );
};

export default SearchBar;