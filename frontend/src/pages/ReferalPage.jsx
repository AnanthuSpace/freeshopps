import ReferalTable from "../components/ReferalTable";

const columns = [
    { key: "referralId", label: "Referral ID" },
    { key: "referrerName", label: "Referrer Name" },
    { key: "refereeName", label: "Referee Name" },
    { key: "date", label: "Referral Date" },
    {
      key: "status",
      label: "Status",
      render: (status) => (
        <span
          className={`px-3 py-1 rounded-md text-white ${
            status === "Approved"
              ? "bg-green-500"
              : status === "Pending"
              ? "bg-yellow-500"
              : "bg-red-500"
          }`}
        >
          {status}
        </span>
      ),
    },
  ];
  
  const users = [
    {
      referralId: "0987654321",
      referrerName: "Referrer Name",
      refereeName: "Referee Name",
      date: "July 3, 2023 12:29 pm",
      status: "Pending",
    },
    {
      referralId: "0987654321",
      referrerName: "Referrer Name",
      refereeName: "Referee Name",
      date: "July 3, 2023 12:27 pm",
      status: "Approved",
    },
    {
      referralId: "0987654321",
      referrerName: "Referrer Name",
      refereeName: "Referee Name",
      date: "July 3, 2023 12:29 pm",
      status: "Rejected",
    },
  ];

const ReferalPage = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-gray-900 text-2xl font-bold">Referral History</h1>
              <p className="text-gray-600">Manage users and their activities.</p>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Search by user or deal"
                className="border border-gray-300 rounded-md p-2 outline-none"
              />
              <button className="bg-[#199FB1] text-white px-4 py-2 rounded-md hover:bg-[#199FB1]/70">
                Search
              </button>
            </div>
          </div>
    

          <ReferalTable columns={columns} data={users} />
        </div>
      );
}

export default ReferalPage