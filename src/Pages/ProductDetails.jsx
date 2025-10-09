import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useApps from "../hooks/useProducts";
import { installApp, getInstalledApps, removeInstalledApp } from "../utils/localStorage";
import Loader from "../Components/Loader";
import ErrorCard from "../Components/ErrorCard";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from "recharts";

const ProductDetails = () => {
  const { id } = useParams();
  const { products: apps = [], loading } = useApps();
  const [installed, setInstalled] = useState([]);

  useEffect(() => {
    setInstalled(getInstalledApps());
  }, []);

  if (loading) return <Loader />;

  const app = apps.find((a) => a.id === Number(id));
  if (!app) return <ErrorCard type="app" />;

  const { title, image, description, downloads, ratingAvg, ratings = [] } = app;
  const isInstalled = installed.some((a) => a.id === app.id);

  const handleInstall = () => {
    installApp(app);
    setInstalled(getInstalledApps());
    alert(`${app.title} — Installation in process`);
  };

  const handleUninstall = () => {
    removeInstalledApp(app.id);
    setInstalled(getInstalledApps());
    alert("Uninstall done");
  };

  return (
    <div className=" card bg-base-100 border shadow-sm max-w-screen-xl mx-auto px-4 md:px-8 py-8 flex flex-col lg:flex-row gap-6">
      {/* Left: details */}
      <div className="flex-1">
        <img src={image} alt={title} className="w-full h-auto object-cover rounded-lg shadow-2xl mb-6" />
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="mb-4">{description}</p>

        <div className="mb-4 space-y-1">
          <p><span className="font-semibold">Downloads:</span> {downloads}</p>
          <p><span className="font-semibold">Rating:</span> {ratingAvg}</p>
        </div>

        {!isInstalled ? (
          <button onClick={handleInstall} className="btn btn-outline w-40 mb-6">Install</button>
        ) : (
          <button onClick={handleUninstall} className="btn btn-error w-40 mb-6">Uninstall</button>
        )}

        {/* Reviews Chart */}
        <div className="h-64">
          <h3 className="text-xl font-semibold mb-4">App Reviews Breakdown</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ratings}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#FF8811" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Right: Installation Cart */}
      <div className="w-full lg:w-80 bg-gray-50 border rounded-lg p-4 sticky top-4 h-fit">
        <h3 className="text-xl font-bold mb-4">Installation Cart</h3>
        {installed.length === 0 ? (
          <p className="text-gray-500">No apps installed yet.</p>
        ) : (
          installed.map((p) => (
            <div key={p.id} className="flex items-center justify-between bg-white rounded p-2 mb-2 shadow">
              <span className="text-sm font-medium line-clamp-1">{p.title}</span>
              <button onClick={() => { removeInstalledApp(p.id); setInstalled(getInstalledApps()); }} className="btn btn-sm btn-error">
                Uninstall
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
