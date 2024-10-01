import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./layout/Sidebar";
import HeaderSection from "./components/HeaderSection";

function App() {
  return (
    <>
      <div className="grid grid-cols-12 min-h-screen">
        {/* Sidebar */}
        <div className="col-span-12 md:col-span-3 bg-[#1f1f28] text-white/80 min-h-screen">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-span-12 md:col-span-9">
          <HeaderSection />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
