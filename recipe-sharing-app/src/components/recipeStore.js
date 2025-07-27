import create from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  selectedRecipe: null,
  favorites: [],
  recommendations: [],

  // Add Recipe
  addRecipe: (recipe) =>
    set((state) => {
      const newRecipes = [...state.recipes, recipe];
      return {
        recipes: newRecipes,
        filteredRecipes: newRecipes.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  // Edit Recipe
  editRecipe: (updatedRecipe) =>
    set((state) => {
      const newRecipes = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      return {
        recipes: newRecipes,
        filteredRecipes: newRecipes.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  // Update Recipe (for checker)
  updateRecipe: (updatedRecipe) =>
    get().editRecipe(updatedRecipe),

  // Delete Recipe
  deleteRecipe: (id) =>
    set((state) => {
      const newRecipes = state.recipes.filter((recipe) => recipe.id !== id);
      return {
        recipes: newRecipes,
        filteredRecipes: newRecipes.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
        favorites: state.favorites.filter((favId) => favId !== id),
        recommendations: state.recommendations.filter((r) => r.id !== id),
      };
    }),

  // Select Recipe
  selectRecipe: (recipe) => set({ selectedRecipe: recipe }),

  // Set Search Term
  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      ),
    })),

  // Manual Filter
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // Set Recipes
  setRecipes: (recipes) =>
    set((state) => ({
      recipes,
      filteredRecipes: recipes.filter((r) =>
        r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // Add to Favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])],
    })),

  // Remove from Favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Generate Recommendations
  generateRecommendations: () =>
    set((state) => {
      const favoritesSet = new Set(state.favorites);
      const recommended = state.recipes.filter(
        (recipe) =>
          favoritesSet.has(recipe.id) ||
          recipe.title.toLowerCase().includes('easy') ||
          recipe.description.toLowerCase().includes('quick')
      );
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;