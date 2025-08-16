import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <article className="rounded-2xl bg-white p-4 shadow transition hover:shadow-lg">
      <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-gray-200 to-gray-100" />
      <h3 className="mt-3 text-lg font-semibold">{recipe.title}</h3>
      <p className="mt-1 text-sm text-gray-600">{recipe.description}</p>
      <div className="mt-3">
        <Link
          to={`/recipes/${recipe.id}`}
          className="inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:opacity-90"
        >
          View details
        </Link>
      </div>
    </article>
  );
}