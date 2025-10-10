import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import { getInstalledApps, removeInstalledApp } from "../utils/localStorage";
import { toast } from "react-toastify";


const parseDownloads = (value) => {
  if (!value && value !== 0) return 0;
  if (typeof value === "number") return value;
  const v = String(value).replace(/\+/g, "").trim();
  const m = v.match(/^([\d.]+)\s*([MK])?$/i);
  if (!m) return Number(v) || 0;
  const num = parseFloat(m[1]);
  const unit = (m[2] || "").toUpperCase();
  if (unit === "M") return num * 1_000_000;
  if (unit === "K") return num * 1_000;
  return num;
};

const Installation = () => {
  const [apps, setApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    setApps(getInstalledApps());
  }, []);

  const handleUninstall = (id) => {
    removeInstalledApp(id);
    setApps((prev) => prev.filter((a) => a.id !== id));
    toast.info("App uninstalled successfully!");
  };

  const sorted = useMemo(() => {
    if (sortOrder === "high-low") {
      return [...apps].sort(
        (a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads)
      );
    }
    if (sortOrder === "low-high") {
      return [...apps].sort(
        (a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads)
      );
    }
    return apps;
  }, [apps, sortOrder]);

  
  if (apps.length === 0) {
    return (
      <div className="max-w-screen-md mx-auto px-4 md:px-8 py-14 text-center">
        <h1 className="text-3xl font-bold mb-2">Your Installed Apps</h1>
        <p className="text-gray-500 mb-10">
          Explore All Trending Apps on the Market developed by us
        </p>
        <img
          src="/src/assets/App-Error.png"
          alt="No apps found"
          className="mx-auto w-56 opacity-90 transition-all duration-500 ease-in-out hover:scale-105 hover:rotate-3"
        />
        <h2 className="text-2xl font-bold mt-6">No Installed Apps Yet</h2>
        <p className="text-gray-500 mt-1">
          Go explore and install your favorites.
        </p>
        <Link to="/apps" className="btn btn-primary mt-5">
          Browse Apps
        </Link>
      </div>
    );
  }

  // Installed list
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-8">
      
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Your Installed Apps</h1>
        <p className="text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex items-center justify-between gap-3 mb-6">
        <span className="text-sm text-gray-500">
          {apps.length} App{apps.length > 1 ? "s" : ""} Installed
        </span>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="select select-bordered select-sm"
        >
          <option value="none">Sort by downloads</option>
          <option value="high-low">High-Low</option>
          <option value="low-high">Low-High</option>
        </select>
      </div>
      {/* product Grid */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {sorted.map((app) => (
          <div key={app.id} className="relative group">
            <Link to={`/product/${app.id}`} className="block">
              <ProductCard product={app} />
            </Link>
            <button
              onClick={() => handleUninstall(app.id)}
              className="btn btn-error btn-sm text-white absolute top-2 right-2 opacity-95 group-hover:opacity-100"
              title="Uninstall"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
