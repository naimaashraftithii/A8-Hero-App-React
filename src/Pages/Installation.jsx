// src/Pages/Installation.jsx
import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";

const Installation = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("installedApps")) || [];
    setApps(list);
  }, []);

  const handleUninstall = (id) => {
    const next = apps.filter((a) => a.id !== id);
    setApps(next);
    localStorage.setItem("installedApps", JSON.stringify(next));
    alert("Uninstall done");
  };

  if (apps.length === 0) return <p className="text-center py-10">No installed apps.</p>;

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-8">
      <h2 className="text-2xl font-bold mb-6">My Installation</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {apps.map((app) => (
          <div key={app.id} className="relative">
            <ProductCard product={app} />
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
