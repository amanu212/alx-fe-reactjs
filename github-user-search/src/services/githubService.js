import axios from "axios";

// ✅ For Assignment 1 - Fetch individual user data
export async function fetchUserData(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch user data");
  }
}

// ✅ For Assignment 2 - Advanced search (by username, location, minRepos)
export const advancedSearchUsers = async ({ username, location, minRepos }) => {
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