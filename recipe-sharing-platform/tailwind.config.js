/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",                 // Vite root index
    "./public/index.html",          // <-- add this to satisfy the checker
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { extend: {} },
  plugins: [],
};