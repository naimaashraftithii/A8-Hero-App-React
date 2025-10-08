import React from "react";
import logo from "../assets/logo.png";

const Loader = () => (
  <div className="flex justify-center items-center h-80">
    <img
      src={logo}
      alt="Loading...Await..!!"
      className="w-20 h-20 animate-spin-slow"
    />
  </div>
);

export default Loader;
