import UserProfile from './components/UserProfile'; // ✅ Import the new component

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 text-white p-6">
      <h1 className="text-4xl font-bold mb-4">ALX Week 13 Milestone 🎯</h1>
      <p className="text-lg mb-4">Tailwind CSS is successfully integrated with React!</p>

      <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300 ease-in-out mb-6">
        Hover Me
      </button>

      <div className="bg-red-500 text-white p-6 text-2xl rounded-md shadow-lg mb-10">
        Tailwind is definitely working!
      </div>

      {/* ✅ ALX UserProfile component added below */}
      <UserProfile />
    </div>
  );
}

export default App;