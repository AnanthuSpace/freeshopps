import { Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import AdminLayout from "../layouts/AdminLayout";
import UserListPage from "../pages/UserListPage";
import ActiveHistory from "../pages/ActiveHistoryPage";
import ReferalPage from "../pages/ReferalPage";
import ReviewPage from "../pages/ReviewPage";
import BookingsPage from "../pages/BookingsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="/users" element={<UserListPage />} />
        <Route path="/history" element={<ActiveHistory />} />
        <Route path="/referrals" element={<ReferalPage />} />
        <Route path="/ratings" element={<ReviewPage />} />
        <Route path="/bookings" element={<BookingsPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
