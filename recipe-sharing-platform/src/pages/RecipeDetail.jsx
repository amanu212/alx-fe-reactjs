import { useParams, Link } from "react-router-dom";

export default function RecipeDetail({ recipes }) {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-8">
        <p className="text-red-600">Recipe not found.</p>
        <Link to="/" className="mt-4 inline-block text-blue-600">← Back to Home</Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <Link to="/" className="text-blue-600">← Back</Link>
      <h1 className="mt-2 text-3xl font-bold">{recipe.title}</h1>
      <div className="mt-4 aspect-video rounded-xl bg-gray-200" />
      <p className="mt-4 text-gray-700">{recipe.description}</p>

      <h2 className="mt-6 text-xl font-semibold">Ingredients</h2>
      <ul className="mt-2 list-inside list-disc text-gray-700">
        {recipe.ingredients.map((i, idx) => <li key={idx}>{i}</li>)}
      </ul>

      <h2 className="mt-6 text-xl font-semibold">Steps</h2>
      <ol className="mt-2 list-inside list-decimal text-gray-700 space-y-1">
        {recipe.steps.map((s, idx) => <li key={idx}>{s}</li>)}
      </ol>
    </main>
  );
}