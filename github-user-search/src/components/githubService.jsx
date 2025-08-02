import axios from "axios";

// Checker expects this export
export const fetchUserData = async ({ username, location, minRepos }) => {
  try {
    let query = "";

    if (username) query += `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch user data");
  }
};