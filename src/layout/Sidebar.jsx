import { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { FaChartLine, FaBrain, FaUser, FaSignOutAlt } from "react-icons/fa";
import { AiOutlineFundProjectionScreen, AiOutlineRobot } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <RxDashboard />, route: "/dashboard" },
    { name: "Technicals", icon: <FaChartLine />, route: "/technicals" },
    {
      name: "Fundamentals",
      icon: <AiOutlineFundProjectionScreen />,
      route: "/fundamentals",
    },
    { name: "Monte Carlo", icon: <FaBrain />, route: "/monte-carlo" },
    { name: "AI Forecast", icon: <AiOutlineRobot />, route: "/ai-forecast" },
    { name: "Profile", icon: <FaUser />, route: "/profile" },
    { name: "Log Out", icon: <FaSignOutAlt />, route: "/logout" },
  ];

  return (
    <>
      <div>
        <img
          className="m-4"
          src="https://kdanalytics.com.au/static/images/KD-analytics-logo.svg"
          alt="Logo"
        />
      </div>
      <div className="mx-auto flex flex-col h-screen w-64 text-white">
        <div className="flex-grow">
          {menuItems.map((item) => (
            <div key={item.name}>
              <Link to={item.route}>
                <button
                  type="button"
                  onClick={() => setActiveItem(item.name)}
                  className={`flex items-center w-full px-4 rounded-lg py-3 mb-1 text-left transition-colors duration-200
                    ${
                      activeItem === item.name
                        ? "bg-[#ea4335] text-white"
                        : "text-gray-300 hover:bg-gray-700"
                    }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
