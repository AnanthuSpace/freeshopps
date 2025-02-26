import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-[#199FB1]">404</h1>
      <p className="text-xl text-gray-700 mt-2">Oops! The page youre looking for doesnt exist.</p>
      <Link
        to="/"
        className="mt-4 px-6 py-2 bg-[#199FB1] text-white rounded-lg hover:bg-[#177F91] transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
