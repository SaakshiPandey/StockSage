import { Link } from "react-router-dom";
import heroImage from "../assets/stock-illustration.svg"; // Make sure you add a creative SVG in assets

function Landing() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-6">
      <img src={heroImage} alt="Stock Illustration" className="w-2/3 max-w-md mb-8" />

      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to StockSage</h1>
      <p className="text-lg text-gray-600 mb-8">
        Smarter Stock Decisions, All-in-One. Track, Analyze, and Grow your portfolio with AI.
      </p>

      <div className="flex gap-4">
        <Link
          to="/login"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Landing;
