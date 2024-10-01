import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./layout/Sidebar";

function App() {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-3 bg-[#1f1f28] min-h-screen text-white/80">
          <Sidebar />
        </div>
        <div className="col-span-9">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
