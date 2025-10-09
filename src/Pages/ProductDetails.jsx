// src/Pages/ProductDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useProducts from "../hooks/useProducts";
// (optional) toast: npm i react-toastify
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products = [] } = useProducts();
  const [app, setApp] = useState(null);

  useEffect(() => {
    const found = products.find((p) => p.id === Number(id));
    setApp(found || null);
  }, [id, products]);

  if (!app) {
    return <p className="text-center mt-20 text-gray-500">Loading app details...</p>;
  }

  const { title, image, downloads, ratingAvg, reviews, size, description } = app;

  const installedList = () => JSON.parse(localStorage.getItem("installedApps")) || [];
  const isInstalled = () => installedList().some((i) => i.id === app.id);

  const handleInstall = () => {
    const list = installedList();
    if (list.some((i) => i.id === app.id)) {
      toast?.warning?.("Already installed!");
      return navigate("/installation");
    }
    list.push(app);
    localStorage.setItem("installedApps", JSON.stringify(list));
    toast?.success?.(`${app.title} installed successfully!`);
    navigate("/installation");
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Header */}
      <div className="bg-base-100 border rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
        <img src={image} alt={title} className="w-40 h-40 rounded-lg object-cover" />

        <div className="flex-1">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-gray-500 mb-4">Developed by productive.io</p>

          <div className="flex flex-wrap gap-8 mb-4">
            <div>
              <p className="text-sm text-gray-500">Downloads</p>
              <p className="font-bold text-lg">{downloads}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Average Rating</p>
              <p className="font-bold text-lg">{ratingAvg}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Reviews</p>
              <p className="font-bold text-lg">{reviews?.toLocaleString?.() ?? reviews}</p>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={isInstalled()}
            className={`px-5 py-2 rounded-md font-semibold text-white ${
              isInstalled() ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {isInstalled() ? "Installed" : `Install Now (${size})`}
          </button>
        </div>
      </div>

      {/* Ratings (simple bars) */}
      <div className="border rounded-xl p-6 mt-6">
        <h2 className="text-lg font-semibold mb-4">Ratings</h2>
        {[5, 4, 3, 2, 1].map((star) => (
          <div key={star} className="flex items-center mb-2">
            <span className="w-12">{star} star</span>
            <div className="flex-1 h-3 bg-gray-200 rounded-md mx-2">
              <div className="h-3 bg-orange-400 rounded-md" style={{ width: `${star * 20}%` }} />
            </div>
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="border rounded-xl p-6 mt-6">
        <h2 className="text-lg font-semibold mb-3">Description</h2>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
