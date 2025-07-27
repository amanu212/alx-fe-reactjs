import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="app-container">
            <h1>🍲 Recipe Sharing App</h1>
            <AddRecipeForm />
            <RecipeList />
          </div>
        }
      />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
    </Routes>
  );
}

export default App;