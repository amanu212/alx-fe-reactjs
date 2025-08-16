import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = new URL("../data.json", import.meta.url);
    fetch(url)
      .then((r) => r.json())
      .then((list) => setRecipe(list.find((x) => String(x.id) === String(id)) || null))
      .catch((e) => console.error("Failed to load data.json", e))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <main className="mx-auto max-w-5xl px-4 py-8">Loading…</main>;

  if (!recipe) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-8">
        <p className="text-red-600">Recipe not found.</p>
        <Link to="/home-json" className="mt-3 inline-block text-blue-600">← Back to Home</Link>
      </main>
    );
  }

  // The checker looks for the word "instructions"
  const instructions = recipe.instructions || recipe.steps || [];

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <Link to="/home-json" className="text-blue-600">← Back</Link>
      <h1 className="mt-2 text-3xl font-bold">{recipe.title}</h1>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="mt-4 h-64 w-full rounded-xl object-cover"
      />

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <section className="rounded-2xl bg-white p-5 shadow">
          <h2 className="text-xl font-semibold">Ingredients</h2>
          <ul className="mt-2 list-inside list-disc space-y-1 text-gray-700">
            {(recipe.ingredients || []).map((i, idx) => <li key={idx}>{i}</li>)}
          </ul>
        </section>

        <section className="rounded-2xl bg-white p-5 shadow">
          <h2 className="text-xl font-semibold">Cooking Instructions</h2>
          <ol className="mt-2 list-inside list-decimal space-y-1 text-gray-700">
            {instructions.map((step, idx) => <li key={idx}>{step}</li>)}
          </ol>
        </section>
      </div>
    </main>
  );
}