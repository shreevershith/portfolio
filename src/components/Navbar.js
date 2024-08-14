import { useState } from "react";
import Link from "next/link";
import {
  FaUser,
  FaFolderOpen,
  FaCertificate,
  FaHistory,
  FaFileDownload,
} from "react-icons/fa";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <nav className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50 flex items-center">
      <div
        className="flex flex-col items-center bg-gray-800 dark:bg-gray-700 p-2 space-y-8 rounded-lg"
        onMouseLeave={() => setHoveredItem(null)}
      >
        {[
          { href: "/#about", label: "About", icon: <FaUser className="text-2xl" /> },
          { href: "/#projects", label: "Projects", icon: <FaFolderOpen className="text-2xl" /> },
          { href: "/#certification", label: "Certifications", icon: <FaCertificate className="text-2xl" /> },
          { href: "/#recent-activity", label: "Recent Activity", icon: <FaHistory className="text-2xl" /> },
        ].map((item, index) => (
          <div
            key={index}
            className="relative flex items-center"
            onMouseEnter={() => setHoveredItem(index)}
          >
            <Link href={item.href}>
              <div className="text-white p-2 cursor-pointer">
                {item.icon}
              </div>
            </Link>
            {hoveredItem === index && (
              <div className="absolute right-full mr-2 bg-gray-800 dark:bg-gray-700 text-white px-4 py-2 rounded shadow-md">
                {item.label}
              </div>
            )}
          </div>
        ))}

        {/* CV Download Button */}
        <a
          href="https://drive.google.com/link-to-your-cv" // Replace with your actual CV link
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center text-white p-2 cursor-pointer"
          onMouseEnter={() => setHoveredItem(4)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <FaFileDownload className="text-2xl" />
          {hoveredItem === 4 && (
            <div className="absolute right-full mr-2 bg-gray-800 dark:bg-gray-700 text-white px-4 py-2 rounded shadow-md">
              CV
            </div>
          )}
        </a>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="mt-auto text-white flex items-center justify-center w-10 h-6 bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors duration-300 focus:outline-none"
        >
          <div
            className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
              isDarkMode ? "translate-x-4" : ""
            }`}
          ></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
