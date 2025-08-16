import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const linkCls = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm font-medium ${
      isActive ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <header className="border-b bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-xl font-bold tracking-tight">🍳 RecipeShare</Link>
        <div className="space-x-2">
          <NavLink to="/" className={linkCls} end>Home</NavLink>
          <NavLink to="/add" className={linkCls}>Add Recipe</NavLink>
        </div>
      </nav>
    </header>
  );
}