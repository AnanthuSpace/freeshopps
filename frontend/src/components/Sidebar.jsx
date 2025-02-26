import { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "User Management", path: "/users" },
    { name: "Rating and Review", path: "/ratings" },
    { name: "Settings", path: "/settings" },
    { name: "History", path: "/history" },
    { name: "All Bookings", path: "/bookings" },
    { name: "Push Notification", path: "/notifications" },
    { name: "Transaction List", path: "/transactions" },
    { name: "Google Analytics", path: "/analytics" },
    { name: "Multi-Currency", path: "/currency" },
    { name: "Category", path: "/category" },
    { name: "Live Chat History", path: "/chat-history" },
    { name: "Package Plan", path: "/package-plan" },
    { name: "Referral History", path: "/referrals" },
    { name: "Google Map", path: "/google-map" },
  ];

  return (
    <div className="w-64 min-h-screen bg-white p-4 rounded-2xl shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl px-4 font-bold text-[#199FB1]">Logo</h2>
      </div>

      <ul>
        {menuItems.map((item) => (
          <li key={item.path} className="mb-2 border-b border-gray-300 last:border-b-0">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `block w-full px-4 py-1 rounded-lg transition ${
                  isActive
                    ? "bg-[#199FB1] text-white"
                    : "text-[#199FB1] hover:bg-[#199FB1]/20"
                }`
              }
              onClick={() => setActive(item.name)}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
