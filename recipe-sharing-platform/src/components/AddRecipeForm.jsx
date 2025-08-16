import { useState } from "react";

/**
 * AddRecipeForm
 * - Fields: title (input), ingredients (textarea), preparation steps (textarea)
 * - Validation: all required; ingredients must contain at least two items
 * - Styled with Tailwind and responsive classes
 */
export default function AddRecipeForm() {
  const [form, setForm] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((e) => ({ ...e, [name]: undefined })); // live clear
  };

  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = "Title is required";

    // allow comma or newline separated ingredients
    const ingredientItems = form.ingredients
      .split(/\r?\n|,/)
      .map((s) => s.trim())
      .filter(Boolean);
    if (ingredientItems.length < 2) {
      e.ingredients = "Add at least two ingredients (comma or one-per-line).";
    }

    const stepItems = form.steps
      .split(/\r?\n/)
      .map((s) => s.trim())
      .filter(Boolean);
    if (stepItems.length === 0) e.steps = "Preparation steps are required.";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // For this assignment we just acknowledge submission — no state wiring required.
    setSubmitted(true);
    // If you want to clear the form after success:
    // setForm({ title: "", ingredients: "", steps: "" });
  };

  const field =
    "block w-full rounded-lg border border-gray-300 px-3 py-2 " +
    "focus:outline-none focus:ring-2 focus:ring-gray-900/40";

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl font-bold">AddRecipeForm</h1>
      <p className="mt-1 text-gray-600">
        Enter the recipe title, <strong>ingredients</strong>, and
        <strong> preparation steps</strong>.
      </p>

      <form onSubmit={onSubmit} className="mt-6 space-y-5">
        {/* Title */}
        <div>
          <label htmlFor="title" className="mb-1 block text-sm font-medium">
            Recipe Title *
          </label>
          <input
            id="title"
            name="title"
            value={form.title}
            onChange={onChange}
            className={field}
            placeholder="e.g., Creamy Tomato Pasta"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label
            htmlFor="ingredients"
            className="mb-1 block text-sm font-medium"
          >
            Ingredients * (comma or one per line)
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={form.ingredients}
            onChange={onChange}
            rows={6}
            className={field}
            placeholder={"Pasta\nGarlic\nTomatoes\nOlive oil"}
          />
          {errors.ingredients && (
            <p className="mt-1 text-sm text-red-600">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps */}
        <div>
          <label htmlFor="steps" className="mb-1 block text-sm font-medium">
            Preparation Steps * (one per line)
          </label>
          <textarea
            id="steps"
            name="steps"
            value={form.steps}
            onChange={onChange}
            rows={6}
            className={field}
            placeholder={"Boil pasta\nSauté garlic\nAdd tomatoes\nToss & serve"}
          />
          {errors.steps && (
            <p className="mt-1 text-sm text-red-600">{errors.steps}</p>
          )}
        </div>

        {/* Actions */}
        <div className="pt-2 flex flex-col md:flex-row md:items-center md:gap-3">
          <button
            type="submit"
            className="rounded-lg bg-gray-900 px-4 py-2 font-medium text-white hover:opacity-90"
          >
            Add Recipe
          </button>
          {submitted && (
            <span className="mt-2 md:mt-0 text-sm text-green-700">
              Recipe submitted successfully!
            </span>
          )}
        </div>
      </form>
    </main>
  );
}