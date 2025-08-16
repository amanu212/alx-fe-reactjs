import RecipeCard from "../components/RecipeCard";

export default function Home({ recipes }) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-2xl font-bold">Latest Recipes</h1>
      <p className="mt-1 text-gray-600">Browse quick dishes and community favorites.</p>

      <section className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((r) => (
          <RecipeCard key={r.id} recipe={r} />
        ))}
      </section>
    </main>
  );
}