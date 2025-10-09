import React from "react";
import logo from "../assets/logo.png";

const Loader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <img
      src={logo}
      alt="Loading"
      className="w-20 h-20 select-none pointer-events-none"
    />
  </div>
);

export default Loader;
