import { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { FaChartLine, FaBrain, FaUser, FaSignOutAlt } from "react-icons/fa";
import { AiOutlineFundProjectionScreen, AiOutlineRobot } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      alert("You have successfully signed out!");
    } catch (error) {
      alert(error);
    }
  };

  const menuItems = [
    { name: "Dashboard", icon: <RxDashboard />, route: "/" },
    { name: "Technicals", icon: <FaChartLine />, route: "/technicals " },
    {
      name: "Fundamentals",
      icon: <AiOutlineFundProjectionScreen />,
      route: "/fundamentals",
    },
    { name: "Monte Carlo", icon: <FaBrain />, route: "/" },
    { name: "AI Forecast", icon: <AiOutlineRobot />, route: "/" },
  ];

  return (
    <>
      <div>
        <img
          className="my-8 mx-8"
          src="https://kdanalytics.com.au/static/images/KD-analytics-logo.svg"
          alt="Logo"
        />
      </div>
      <div className="flex   flex-col mx-auto justify-between h-[85vh] w-64 text-white ">
        {/* Menu Items */}
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

        {/* Profile and Logout Buttons at the bottom */}
        <div className="mb-4">
          <Link to="/profile">
            <button
              type="button"
              className="flex items-center w-full px-4 py-2 mb-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white"
            >
              <FaUser className="mr-3" />
              Profile
            </button>
          </Link>
          <button
            onClick={handleSignOut}
            className="flex items-center w-full px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white"
          >
            <FaSignOutAlt className="mr-3" />
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
