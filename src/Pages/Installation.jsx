import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";

const STORAGE_KEY = "installedApps";

const Installation = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    setApps(list);
  }, []);

  const handleUninstall = (id) => {
    const next = apps.filter((a) => a.id !== id);
    setApps(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    alert("Uninstall done");
  };

  if (apps.length === 0)
    return <img
  src="../assets/App-Error.png"
  alt="No apps found"
  className="
    mx-auto w-64 opacity-80
    transition-all duration-700 ease-in-out
    transform hover:scale-110 hover:rotate-6 hover:opacity-100
    animate-fadeIn
  "
/>

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-8">
      <h2 className="text-2xl font-bold mb-6">Installation List</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {apps.map((app) => (
          <div key={app.id} className="relative">
            <Link to={`/product/${app.id}`} className="block">
              <ProductCard product={app} />
            </Link>
            <button
              onClick={() => handleUninstall(app.id)}
              className="btn btn-error btn-sm text-white absolute top-2 right-2"
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
