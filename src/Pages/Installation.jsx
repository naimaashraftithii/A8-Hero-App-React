import React from "react";
import { useParams } from "react-router-dom";
import useApps from "../hooks/useProducts";
import { installApp, getInstalledApps } from "../utils/localStorage";
import Loader from "../Components/Loader";
import ErrorCard from "../Components/ErrorCard";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

const ProductDetails = () => {
  const { id } = useParams();
  const { apps = [], loading } = useApps();

  if (loading) return <Loader />;

  const app = apps.find((a) => a.id === Number(id));
  if (!app) return <ErrorCard type="app" />;

  const { title, image, description, downloads, ratingAvg, ratings } = app;
  const installedApps = getInstalledApps();
  const isInstalled = installedApps.some((a) => a.id === app.id);

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-8">
      {/* App Image & Info */}
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={image}
          alt={title}
          className="w-full md:w-1/3 h-auto object-cover rounded-lg shadow-2xl"
        />
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p>{description}</p>
          <p>Downloads: {downloads.toLocaleString()}</p>
          <p>Rating: {ratingAvg}</p>
          <button
            onClick={() => installApp(app)}
            className="btn btn-outline w-40"
            disabled={isInstalled}
          >
            {isInstalled ? "Installed" : "Install"}
          </button>
        </div>
      </div>

      {/* App Reviews Chart */}
      <div className="mt-10 h-64">
        <h3 className="text-xl font-semibold mb-4">App Reviews Breakdown</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={ratings}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#7f00ff" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProductDetails;
