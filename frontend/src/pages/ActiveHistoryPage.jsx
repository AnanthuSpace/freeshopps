import HistoryTable from "../components/HistoryTable";

const ActiveHistory = () => {
    const columns = [
        { key: "img", label: "User" },
        { key: "name", label: "Name" },
        { key: "action", label: "Action" },
        { key: "date", label: "Date & Time" },
      ];
    
      const users = [
        {
          id: 1,
          name: "Yeray Rosalos",
          action: "Log in",
          date: "July 3, 2023 12:29 pm",
          img: "https://i.pravatar.cc/40",
        },
        {
          id: 2,
          name: "Alan Robert",
          action: "Booked Product",
          date: "July 3, 2023 12:27 pm",
          img: "https://i.pravatar.cc/41",
        },
        {
          id: 3,
          name: "Yeray Rosalos",
          action: "Selling Product",
          date: "July 3, 2023 12:29 pm",
          img: "https://i.pravatar.cc/40",
        },
        {
          id: 4,
          name: "Alan Robert",
          action: "Commented",
          date: "July 3, 2023 12:27 pm",
          img: "https://i.pravatar.cc/41",
        },
        {
          id: 5,
          name: "Yeray Rosalos",
          action: "Bought Product",
          date: "July 3, 2023 12:29 pm",
          img: "https://i.pravatar.cc/40",
        },
        {
          id: 6,
          name: "Alan Robert",
          action: "Log out",
          date: "July 3, 2023 12:27 pm",
          img: "https://i.pravatar.cc/41",
        },
      ];
    
      return (
        <div className="p-6 bg-gray-100 min-h-screen">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-gray-900 text-2xl font-bold">Activity History</h1>
              <p className="text-gray-600">View historical data of actions taken within the app.</p>
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Search by user, date, or activity type"
                className="border border-gray-300 rounded-md p-2 w-64 outline-none"
              />
              <button className="bg-[#199FB1] text-white px-4 py-2 rounded-md hover:bg-[#199FB1]/70">
                Search
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-800">
                <span className="text-2xl">☰</span> {/* Menu Icon */}
              </button>
            </div>
          </div>
    
          {/* Table Component */}
          <HistoryTable columns={columns} data={users} />
    
          {/* Footer Section */}
          <div className="bg-white rounded-lg p-4 shadow-md flex justify-between items-center mt-4">
            <button className="text-red-500 hover:underline">Delete</button>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Displaying page</span>
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
  
  export default ActiveHistory;
  