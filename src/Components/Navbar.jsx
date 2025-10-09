import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const activeClass = "text-blue-600 underline font-semibold";

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-8">
      {/*Mobile Menu */}
      <div className="navbar-start">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h12M4 18h16"
              />
            </svg>
          </button>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? activeClass : "")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/apps" className={({ isActive }) => (isActive ? activeClass : "")}>
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink to="/installation" className={({ isActive }) => (isActive ? activeClass : "")}>
                Installation
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Logo*/}
        <Link to="/" className="flex items-center gap-2 ml-2">
          <img
            src="/logo.png"
            alt="HERO.IO Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-[#7f00ff] to-[#e100ff] bg-clip-text text-transparent">
            HERO.IO
          </span>
        </Link>
      </div>

      {/* Center Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? activeClass : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/apps" className={({ isActive }) => (isActive ? activeClass : "")}>
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink to="/installation" className={({ isActive }) => (isActive ? activeClass : "")}>
              Installation
            </NavLink>
          </li>
        </ul>
      </div>

      {/*GitHub Button */}
      <div className="navbar-end">
        <a
          href="https://github.com/naimaashraftithii"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-gradient-to-r from-[#7f00ff] to-[#e100ff] text-white border-none flex items-center gap-2 hover:scale-105 transition-transform duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-4 h-4 fill-current">
            <path d="M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.8C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72z"/>
          </svg>
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Navbar;
