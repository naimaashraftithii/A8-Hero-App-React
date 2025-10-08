import React from "react";
import { useParams } from "react-router-dom";
import useApps from "../hooks/useProducts";
import { installApp, getInstalledApps } from "../utils/localStorage";
import Loader from "../Components/Loader";
import ErrorCard from "../Components/ErrorCard";

const ProductDetails = () => {
  const { id } = useParams();

  // Use default empty array to prevent undefined errors
  const { apps = [], loading } = useApps();

  // Show loader while data is being fetched
  if (loading) return <Loader />;

  // Find the app by ID
  const app = apps.find((a) => a.id === Number(id));

  // Show error card if app not found
  if (!app) return <ErrorCard type="app" />;

  const { title, image, description, downloads, ratingAvg } = app;
  const installedApps = getInstalledApps();
  const isInstalled = installedApps.some((a) => a.id === app.id);

  return (
    <div className="card bg-base-100 border shadow-sm">
      <figure className="h-64 overflow-hidden">
        <img className="w-full object-cover" src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p>Downloads: {downloads.toLocaleString()}</p>
        <p>Rating: {ratingAvg}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => installApp(app)}
            className="btn btn-outline"
            disabled={isInstalled}
          >
            {isInstalled ? "Installed" : "Install"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
