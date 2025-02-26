import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const AdminLayout = () => {
  console.log("✅ AdminLayout Rendered!"); 

  return (
    <div className="flex min-h-screen px-16 pt-6">
        <Sidebar/>
      <div className="flex-1 flex flex-col">
        <Navbar/>

        <main className="flex-1 px-6 pt-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
