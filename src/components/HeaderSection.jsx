import { FaSearch } from "react-icons/fa";

const HeaderSection = () => {
  return (
    <div className="flex justify-between items-center bg-gray-900 p-4 text-white">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-800 p-2 rounded-lg w-1/3">
        <FaSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search Products"
          className="bg-gray-800 text-gray-400 outline-none w-full"
        />
      </div>

      {/* User Info */}
      <div className="text-right">
        <p className="font-semibold">Md. Soriful Ismam</p>
        <p className="text-gray-400">Free Account</p>
      </div>
    </div>
  );
};

export default HeaderSection;
