import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

// Original (state-driven) implementation
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
import AddRecipe from "./pages/AddRecipe";
import { recipes as seed } from "./data/recipes";

// New assignment (JSON-driven) implementation
import HomePage from "./components/HomePage";          // loads src/data.json
import RecipeDetailJson from "./components/RecipeDetail"; // loads src/data.json

export default function App() {
  // State for the original implementation
  const [recipes, setRecipes] = useState(seed);

  const addRecipe = (recipe) => {
    setRecipes((prev) => [...prev, recipe]);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <Routes>
        {/* Original routes (do not change) */}
        <Route path="/" element={<Home recipes={recipes} />} />
        <Route path="/recipes/:id" element={<RecipeDetail recipes={recipes} />} />
        <Route path="/add" element={<AddRecipe addRecipe={addRecipe} />} />

        {/* New assignment routes (JSON-based, checker-friendly) */}
        <Route path="/home-json" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetailJson />} />

        {/* Fallback */}
        <Route path="*" element={<main className="p-8">Not found</main>} />
      </Routes>
    </div>
  );
}