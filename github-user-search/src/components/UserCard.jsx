import React from "react";

const UserCard = ({ user }) => {
  if (!user) return null;

  return (
    <div className="max-w-md mx-auto mt-8 bg-white shadow-md p-6 rounded-md">
      <img src={user.avatar_url} alt="avatar" className="w-24 h-24 rounded-full mx-auto" />
      <h2 className="text-center text-xl font-bold mt-4">{user.login}</h2>
      <p className="text-center text-gray-600">{user.bio || "No bio available"}</p>
      <a href={user.html_url} target="_blank" className="text-blue-500 block text-center mt-2">
        View Profile
      </a>
    </div>
  );
};

export default UserCard;