import React from "react";

const BookingsTable = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Table Header */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-700 text-left">
            <th className="p-3">
              <input type="checkbox" />
            </th>
            <th className="p-3">User</th>
            <th className="p-3">Booking ID</th>
            <th className="p-3">Date & Time</th>
            <th className="p-3">Service</th>
            <th className="p-3">Status</th>
            <th className="p-3 text-center">Action</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="p-3">
                <input type="checkbox" />
              </td>
              <td className="p-3 flex items-center space-x-2">
                <img src={item.image} alt="profile" className="w-8 h-8 rounded-full" />
                <span className="font-medium">{item.user}</span>
              </td>
              <td className="p-3">{item.bookingId}</td>
              <td className="p-3">{item.date}</td>
              <td className="p-3">{item.service}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 text-sm font-semibold rounded-md ${
                    item.status === "Confirm" ? "text-green-500" :
                    item.status === "Pending" ? "text-yellow-500" :
                    "text-red-500"
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td className="p-3 text-center">
                <button className="text-xl">⋮</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="p-4 flex justify-between items-center border-t">
        <button className="text-red-500 hover:underline">Delete</button>
        <div className="flex items-center space-x-1">
          <button className="px-2 py-1 border border-gray-300 rounded-l-md">First</button>
          <button className="px-2 py-1 border border-gray-300">1</button>
          <button className="px-2 py-1 border border-gray-300">2</button>
          <button className="px-2 py-1 border border-gray-300">3</button>
          <button className="px-2 py-1 border border-gray-300 rounded-r-md">Last</button>
        </div>
      </div>
    </div>
  );
};

export default BookingsTable;
