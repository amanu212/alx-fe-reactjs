import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddRecipe({ addRecipe }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    ingredients: "",
    steps: "",
  });
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = "Title is required";
    const ing = form.ingredients.split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
    if (ing.length === 0) e.ingredients = "Add at least one ingredient (one per line)";
    const stp = form.steps.split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
    if (stp.length === 0) e.steps = "Add at least one step (one per line)";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const id = Date.now().toString();
    const newRecipe = {
      id,
      title: form.title.trim(),
      description: form.description.trim(),
      image: form.image.trim(),
      ingredients: form.ingredients.split(/\r?\n/).map((s) => s.trim()).filter(Boolean),
      steps: form.steps.split(/\r?\n/).map((s) => s.trim()).filter(Boolean),
    };

    addRecipe(newRecipe);
    navigate(`/recipes/${id}`);
  };

  const field = "block w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/40";

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl font-bold">Add a New Recipe</h1>
      <form onSubmit={onSubmit} className="mt-6 space-y-5">
        <div>
          <label className="mb-1 block text-sm font-medium">Title *</label>
          <input
            name="title"
            value={form.title}
            onChange={onChange}
            className={field}
            placeholder="e.g., Creamy Tomato Pasta"
          />
          {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Description</label>
          <input
            name="description"
            value={form.description}
            onChange={onChange}
            className={field}
            placeholder="Short summary of the dish"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Image URL</label>
          <input
            name="image"
            value={form.image}
            onChange={onChange}
            className={field}
            placeholder="https://…"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Ingredients * (one per line)</label>
          <textarea
            name="ingredients"
            value={form.ingredients}
            onChange={onChange}
            rows={6}
            className={field}
            placeholder={"Chicken\nYogurt\nGarlic\n…"}
          />
          {errors.ingredients && <p className="mt-1 text-sm text-red-600">{errors.ingredients}</p>}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Steps * (one per line)</label>
          <textarea
            name="steps"
            value={form.steps}
            onChange={onChange}
            rows={6}
            className={field}
            placeholder={"Marinate chicken for 30 minutes\nSear on high heat\n…"}
          />
          {errors.steps && <p className="mt-1 text-sm text-red-600">{errors.steps}</p>}
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="rounded-lg bg-gray-900 px-4 py-2 font-medium text-white hover:opacity-90"
          >
            Save Recipe
          </button>
        </div>
      </form>
    </main>
  );
}