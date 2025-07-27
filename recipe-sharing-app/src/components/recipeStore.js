import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  selectedRecipe: null,

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

  // Delete Recipe
  deleteRecipe: (id) =>
    set((state) => {
      const newRecipes = state.recipes.filter((recipe) => recipe.id !== id);
      return {
        recipes: newRecipes,
        filteredRecipes: newRecipes.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  // Select Recipe
  selectRecipe: (recipe) => set({ selectedRecipe: recipe }),

  // Search Term Update
  setSearchTerm: (term) =>
    set((state) => {
      return {
        searchTerm: term,
        filteredRecipes: state.recipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(term.toLowerCase())
        ),
      };
    }),

  // Manual filter trigger
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
}));

export default useRecipeStore;