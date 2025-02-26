import { BellDot, UserCircle } from "lucide-react";
import { Search } from "lucide-react"

const Navbar = () => {
  return (
    <nav className="p-4 flex items-center justify-between border-b border-white">
      <div className="flex-1 flex items-center space-x-1">
        <input
          type="text"
          placeholder="Search..."
          className="w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#199FB1]"
        />
        <button className="bg-[#199FB1] text-white p-2 rounded-lg flex items-center justify-center">
          <Search className="w-5 h-5 text-white" />
        </button>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative p-2 rounded-full hover:bg-gray-200">
          <BellDot className="h-6 w-6 text-gray-600" />
          <span className="absolute top-1 right-1 bg-red-500 text-white text-xs px-1 rounded-full">
            3
          </span>
        </button>

        <button className="p-2 rounded-full hover:bg-gray-200">
          <UserCircle className="h-8 w-8 text-gray-600" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
