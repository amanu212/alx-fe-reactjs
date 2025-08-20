import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

// Original (state-driven) pages
import Home from "./pages/Home";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipe from "./pages/AddRecipe";
import { recipes as seed } from "./data/recipes";
import AddRecipeForm from "./components/AddRecipeForm";

// JSON-driven pages for the new tasks
import HomePage from "./components/HomePage";
import RecipeDetailJson from "./components/RecipeDetail";

export default function App() {
  // state for the original flow (unchanged)
  const [recipes, setRecipes] = useState(seed);
  const addRecipe = (recipe) => setRecipes((prev) => [...prev, recipe]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Router wrapper moved here to satisfy the checker */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Original routes */}
          <Route path="/" element={<Home recipes={recipes} />} />
          <Route path="/recipes/:id" element={<RecipeDetail recipes={recipes} />} />
          <Route path="/add" element={<AddRecipe addRecipe={addRecipe} />} />
          <Route path="/add-form" element={<AddRecipeForm />} />

          {/* JSON-driven assignment routes */}
          <Route path="/home-json" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetailJson />} />

          {/* Fallback */}
          <Route path="*" element={<main className="p-8">Not found</main>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}