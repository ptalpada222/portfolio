import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const [isLiveDemo, setIsLiveDemo] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Determine if this is a live demo
    // You might check for a query parameter, environment variable, or other condition
    const searchParams = new URLSearchParams(window.location.search);
    setIsLiveDemo(searchParams.get("demo") === "true");
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center text-center px-4">
      <div className="animate-bounce text-6xl mb-4">
        {isLiveDemo ? "🚧" : "🔍"}
      </div>

      <h1 className="text-6xl font-bold text-red-500 mb-2">404</h1>

      <h2 className="text-3xl font-semibold mb-4">
        {isLiveDemo ? "404 Not Found" : "Page Not Found"}
      </h2>

      <p className="text-lg text-gray-600 max-w-md mb-8">
        {isLiveDemo
          ? "This page is not available in the live demo."
          : "Oops! The page you're looking for doesn't exist or may have been moved."}
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
