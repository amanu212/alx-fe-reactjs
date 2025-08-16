import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // fetch from src/data.json (path resolved relative to this file via Vite)
    const url = new URL("../data.json", import.meta.url);
    fetch(url)
      .then((r) => r.json())
      .then(setRecipes)
      .catch((e) => console.error("Failed to load data.json", e));
  }, []);

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-2xl font-bold">Latest Recipes</h1>
      <p className="mt-1 text-gray-600">Browse quick dishes and community favorites.</p>

      <section className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((r) => (
          <article
            key={r.id}
            className="overflow-hidden rounded-2xl bg-white shadow transition hover:shadow-lg"
          >
            <img
              src={r.image}
              alt={r.title}
              className="h-48 w-full object-cover transition duration-200 hover:scale-[1.02]"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{r.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{r.summary}</p>
              <Link
                to={`/recipes/${r.id}`}
                className="mt-3 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:opacity-90"
              >
                View details
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}