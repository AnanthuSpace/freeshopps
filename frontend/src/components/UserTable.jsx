import React from "react";
import StarRating from "./StarRating ";

const UserTable = ({ columns, data }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <table className="w-full border-collapse">
        {/* Table Header */}
        <thead>
          <tr className="bg-gray-200 text-gray-700 text-left">
            <th className="p-3">
              <input type="checkbox" />
            </th>
            {columns.map((col) => (
              <th key={col.key} className="p-3">
                {col.label}
              </th>
            ))}
            <th className="p-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="p-3">
                <input type="checkbox" />
              </td>

              {/* Dynamically Render Columns */}
              {columns.map((col) => (
                <td key={col.key} className="p-3">
                  {col.key === "img" ? (
                    <div className="flex items-center">
                      <img
                        src={user.img}
                        alt="Profile"
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      {user.name}
                    </div>
                  ) : col.key === "block" ? (
                    <button
                      className={`px-3 py-1 rounded-md ${
                        user.blocked
                          ? "bg-red-500 text-white"
                          : "bg-green-500 text-white"
                      }`}
                    >
                      {user.blocked ? "Unblock" : "Block"}
                    </button>
                  ) : col.key === "rating" ? (
                    <StarRating rating={user.rating} />
                  ) : (
                    user[col.key]
                  )}
                </td>
              ))}

              {/* Actions Column */}
              <td className="p-3 text-right">
                <button className="text-gray-500 hover:text-gray-700">⋮</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
