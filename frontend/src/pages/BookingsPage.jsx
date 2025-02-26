import React from "react";
import BookingsTable from "../components/BookingsTable";

const bookingsData = [
  {
    user: "Yeray Rosalos",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    bookingId: "32345678",
    date: "July 3, 2023 12:29 pm",
    service: "Booked service",
    status: "Confirm",
  },
  {
    user: "Alan Robert",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    bookingId: "876545678",
    date: "July 3, 2023 12:27 pm",
    service: "Booked Product",
    status: "Cancelled",
  },
  {
    user: "Yeray Rosalos",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    bookingId: "87659888",
    date: "July 3, 2023 12:29 pm",
    service: "Booked Product",
    status: "Pending",
  },
  {
    user: "Alan Robert",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    bookingId: "298765432",
    date: "July 3, 2023 12:27 pm",
    service: "Job Application Applied",
    status: "Confirm",
  },
];

const BookingsPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-gray-900 text-2xl font-bold">All Bookings</h1>
          <p className="text-gray-600">View and manage all bookings.</p>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search by user, booking ID, or date"
            className="border border-gray-300 rounded-md p-2 outline-none"
          />
          <button className="bg-[#199FB1] text-white px-4 py-2 rounded-md hover:bg-[#199FB1]/70">
            Search
          </button>
          <button className="text-xl">⚙</button>
        </div>
      </div>

      {/* Table */}
      <BookingsTable data={bookingsData} />
    </div>
  );
};

export default BookingsPage;
