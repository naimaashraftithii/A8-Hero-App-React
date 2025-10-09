import React from "react";
import "../styles/loader.css"; 

const Loader = ({ fullscreen = false, size = "md" }) => {
  // size 
  const sizes = {
    sm: { wrap: 44, logo: 30, gap: "0.5rem", font: "1.4rem" },
    md: { wrap: 56, logo: 38, gap: "0.6rem", font: "1.9rem" },
    lg: { wrap: 68, logo: 46, gap: "0.7rem", font: "2.2rem" },
  };
  const s = sizes[size] ?? sizes.md;

  return (
    <div className={fullscreen ? "loader-screen" : ""}>
      <div
        className="loader loader-appear"
        style={{ gap: s.gap }}
        aria-label="Loading"
        role="status"
      >
        <span
          className="loader__word"
          style={{ fontSize: s.font }}
          aria-hidden="true"
        >
          L
        </span>

        <span
          className="loader__logoWrap"
          style={{ width: s.wrap, height: s.wrap }}
        >
          <img
            src="/public/logo.png"   
            alt="Loading"
            className="loader__logo"
            style={{ width: s.logo, height: s.logo }}
          />
        </span>

        <span
          className="loader__word"
          style={{ fontSize: s.font }}
          aria-hidden="true"
        >
          OADING
        </span>
      </div>
    </div>
  );
};

export default Loader;
