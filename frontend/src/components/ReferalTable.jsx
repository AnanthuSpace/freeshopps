import React from 'react'

const ReferalTable = ({ columns, data }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <table className="w-full border-collapse">
      {/* Table Header */}
      <thead>
        <tr className="bg-gray-100 text-gray-700 text-left">
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

      {/* Table Body */}
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="border-t">
            <td className="p-3">
              <input type="checkbox" />
            </td>
            {columns.map((col) => (
              <td key={col.key} className="p-3">
                {col.render ? col.render(item[col.key]) : item[col.key]}
              </td>
            ))}
            <td className="p-3 text-right">
              <button className="text-gray-500 hover:text-gray-700">⋮</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* Pagination */}
    <div className="p-4 flex justify-between items-center border-t">
      <button className="text-red-500 hover:underline">Delete</button>
      <div className="flex items-center space-x-1">
        <button className="px-2 py-1 border border-gray-300 rounded-l-md">
          First
        </button>
        <button className="px-2 py-1 border border-gray-300">1</button>
        <button className="px-2 py-1 border border-gray-300">2</button>
        <button className="px-2 py-1 border border-gray-300">3</button>
        <button className="px-2 py-1 border border-gray-300 rounded-r-md">
          Last
        </button>
      </div>
    </div>
  </div>
  )
}

export default ReferalTable