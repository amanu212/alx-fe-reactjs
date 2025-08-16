import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
import AddRecipe from "./pages/AddRecipe";
import { recipes as seed } from "./data/recipes";
import HomePage from "./components/HomePage"; // JSON-driven homepage (loads src/data.json)

export default function App() {
  const [recipes, setRecipes] = useState(seed);

  const addRecipe = (recipe) => {
    setRecipes((prev) => [...prev, recipe]);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <Routes>
        {/* Existing implementation */}
        <Route path="/" element={<Home recipes={recipes} />} />
        <Route path="/recipes/:id" element={<RecipeDetail recipes={recipes} />} />
        <Route path="/add" element={<AddRecipe addRecipe={addRecipe} />} />

        {/* New assignment route that reads from src/data.json */}
        <Route path="/home-json" element={<HomePage />} />

        <Route path="*" element={<main className="p-8">Not found</main>} />
      </Routes>
    </div>
  );
}
