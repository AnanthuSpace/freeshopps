import ReviewTable from "../components/ReviewTable";

const columns = [
  {
    key: "name",
    label: "Name",
    render: (name, item) => (
      <div className="flex items-center space-x-2">
        <img src={item.image} alt="profile" className="w-8 h-8 rounded-full" />
        <span className="font-medium">{name}</span>
      </div>
    ),
  },
  { key: "comment", label: "Comment" },
  {
    key: "rating",
    label: "Ratings",
    render: (rating) => (
      <span className="text-yellow-400">
        {"★".repeat(rating) + "☆".repeat(5 - rating)}
      </span>
    ),
  },
  { key: "date", label: "Date & Time" },
  {
    key: "status",
    label: "Status",
    render: (status) => (
      <span
        className={`px-3 py-1 rounded-md text-white ${
          status === "Approved" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {status}
      </span>
    ),
  },
];

const reviews = [
  {
    name: "Yeray Rosalos",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    comment: "Very Good",
    rating: 3,
    date: "July 3, 2023 12:29 pm",
    status: "Pending",
  },
  {
    name: "Alan Robert",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    comment: "Looks Awesome",
    rating: 5,
    date: "July 3, 2023 12:27 pm",
    status: "Approved",
  },
  {
    name: "Yeray Rosalos",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    comment: "Very Good",
    rating: 3,
    date: "July 3, 2023 12:29 pm",
    status: "Pending",
  },
  {
    name: "Alan Robert",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    comment: "Looks Awesome",
    rating: 5,
    date: "July 3, 2023 12:27 pm",
    status: "Declined",
  },
];

const ReviewPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-gray-900 text-2xl font-bold">All (877)</h1>
          <p className="text-blue-500">
            <span className="cursor-pointer">Approved (500) </span> |{" "}
            <span className="cursor-pointer">Pending (377)</span>
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search Review by Date"
            className="border border-gray-300 rounded-md p-2 outline-none"
          />
          <button className="bg-[#199FB1] text-white px-4 py-2 rounded-md hover:bg-[#199FB1]/70">
            Search
          </button>
        </div>
      </div>

      <ReviewTable columns={columns} data={reviews} />
    </div>
  );
};

export default ReviewPage;
