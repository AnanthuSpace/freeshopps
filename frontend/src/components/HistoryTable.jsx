const HistoryTable  = ({ columns, data }) => {
  console.log(columns);
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <table className="w-full border-collapse">
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
          {data.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="p-3">
                <input type="checkbox" />
              </td>
              {columns.map((col) => (
                <td key={col.key} className="p-3">
                  {col.key === "img" ? (
                    <img
                      src={item[col.key]}
                      alt="Profile"
                      className="w-8 h-8 rounded-full"
                    />
                  ) : (
                    item[col.key]
                  )}
                </td>
              ))}
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

export default HistoryTable;
