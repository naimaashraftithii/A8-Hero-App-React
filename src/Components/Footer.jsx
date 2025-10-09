import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png"; 

const Footer = () => {
  return (
    <footer className="bg-[#021529] text-gray-300 py-6">
      {/* Top section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 border-b border-gray-700 pb-4">
        {/* Left - Logo */}
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <img src={logo} alt="HERO.IO Logo" className="w-8 h-8" />
          <h2 className="text-lg font-semibold text-white tracking-wide">HERO.IO</h2>
        </div>

        {/* Right - Social Links */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <span className="text-l font-bold uppercase tracking-wide text-gray-400 ">
            Social Links
          </span>
          <div className="flex gap-3 mt-1">
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-indigo-600 transition-all"
            >
              <FaTwitter className="text-white text-sm" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-indigo-600 transition-all"
            >
              <FaInstagram className="text-white text-sm" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-indigo-600 transition-all"
            >
              <FaFacebookF className="text-white text-sm" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="text-center mt-4 text-sm text-gray-500">
        Copyright © {new Date().getFullYear()} - All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
