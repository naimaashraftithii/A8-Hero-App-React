import React, { useState } from "react";
import ProductCard from "../Components/ProductCard";
import { getInstalledApps } from "../utils/localStorage";

const InstalledApps = () => {
  const [apps, setApps] = useState(getInstalledApps());

  const handleUninstall = (id) => {
    const filtered = apps.filter(a => a.id !== id);
    localStorage.setItem("installedApps", JSON.stringify(filtered));
    setApps(filtered);
    alert("App uninstalled successfully!"); // Can replace with Toast
  };

  if (!apps.length) return <p className="text-center py-10">No installed apps</p>;

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-8">
      <h2 className="text-3xl font-bold mb-6">My Installed Apps</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {apps.map(app => (
          <div key={app.id} className="relative">
            <ProductCard product={app} />
            <button
              onClick={() => handleUninstall(app.id)}
              className="absolute top-2 right-2 btn btn-sm btn-error"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstalledApps;
