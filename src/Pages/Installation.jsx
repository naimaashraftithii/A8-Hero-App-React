import { getInstalledApps, removeInstalledApp } from "../utils/localStorage";
import React, { useState } from "react";
import ProductCard from "../Components/ProductCard";

const Installation = () => {
  const [apps, setApps] = useState(getInstalledApps());

  const handleUninstall = (id) => {
    removeInstalledApp(id);
    setApps(getInstalledApps()); // update UI
  };

  if (apps.length === 0) return <p>No installed apps.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {apps.map((app) => (
        <div key={app.id} className="relative">
          <ProductCard product={app} />
          <button
            onClick={() => handleUninstall(app.id)}
            className="btn btn-error absolute top-2 right-2"
          >
            Uninstall
          </button>
        </div>
      ))}
    </div>
  );
};

export default Installation;
