import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <main className="ml-[30%] w-full p-10 min-h-screen bg-[color:var(--color-bg)] overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
