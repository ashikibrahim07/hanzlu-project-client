import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg fixed w-full z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-extrabold">Hanzlu</h1>
          <nav className="flex space-x-4">
            <Link
              to="/"
              className="text-white text-sm sm:text-base hover:text-gray-300 transform hover:scale-110 transition duration-200"
            >
              Item List
            </Link>
            <Link
              to="/add-item"
              className="text-white text-sm sm:text-base hover:text-gray-300 transform hover:scale-110 transition duration-200"
            >
              Add Item
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
