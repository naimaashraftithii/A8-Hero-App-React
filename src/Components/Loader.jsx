
import React from "react";
import logo from "../assets/logo.png";

const SIZES = {
  sm: "w-12 h-12",
  md: "w-16 h-16",
  lg: "w-24 h-24",
};

export default function Loader({ fullscreen = false, size = "md", label = "Loading..." }) {
  const sizeClass = SIZES[size] || SIZES.md;

  const content = (
    <div className="flex flex-col items-center justify-center gap-3">
      <img
        src={logo}
        alt="Loading"
        className={`select-none pointer-events-none ${sizeClass} logo-spin`}
      />
      <p className="text-sm text-gray-500 tracking-wide">{label}</p>
    </div>
  );

  if (!fullscreen) return content;

  return (
    <div className="min-h-[60vh] flex items-center justify-center">{content}</div>
  );
}
