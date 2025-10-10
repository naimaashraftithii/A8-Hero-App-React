import React, { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useProducts from "../hooks/useProducts";

const Stat = ({ icon, label, value }) => (
  
  <div className="flex items-center gap-3 bg-base-100 border rounded-xl px-4 py-3">
    <img src={icon} alt={label} className="w-8 h-8 object-contain" />
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <h3 className="text-lg font-extrabold">{value}</h3>
    </div>
  </div>
);

const STORAGE_KEY = "installedApps";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products = [], loading } = useProducts();
  const [app, setApp] = useState(null);

  // find app 
  useEffect(() => {
    const found = products.find((p) => p.id === Number(id));
    setApp(found || null);
  }, [id, products]);

  const installedList = () =>
    JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  const isInstalled = useMemo(
    () => (app ? installedList().some((i) => i.id === app.id) : false),
    [app]
  );

  const handleInstall = () => {
    if (!app) return;
    const list = installedList();
    if (list.some((i) => i.id === app.id)) {
      alert("Already installed!");
      navigate("/installation");
      return;

    }
    list.push(app);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    alert(`${app.title} – installation in process`);
    navigate("/installation");
  };

  if (loading || !app) {
    return (
      <div className="max-w-5xl mx-auto p-6 text-center text-gray-500">
        <img
              src="../assets/logo.png"
              alt="No apps found"
              className="
              mx-auto w-64 opacity-80
              transition-all duration-700 ease-in-out
              transform hover:scale-110 hover:rotate-6 hover:opacity-100
             animate-fadeIn"/>
        Loading app details...
      </div>
    );
  }

  const {
    title,
    image,
    downloads,   
    ratingAvg,   
    reviews,    
    size,        
    description,
    companyName,
  } = app;

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* Header card */}
      <div className="bg-base-100  rounded-2xl p-6 grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="md:col-span-2">
          <img
            src={image}
            alt={title}
            className="w-full aspect-square object-cover rounded-xl shadow"
          />
        </div>

        <div className="md:col-span-3 flex flex-col">
          <h1 className="text-3xl font-extrabold leading-tight">{title}</h1>

          <p className="text-sm mt-1">
            Developed by{" "}
            <span className="bg-gradient-to-r from-[#7f00ff] to-[#e100ff] bg-clip-text text-transparent font-semibold">
              {companyName}
            </span>
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
            <Stat
              icon="/icon-downloads.png"
              label="Downloads"
              value={downloads}
            />
            <Stat
              icon="/icon-ratings.png"
              label="Average Ratings"
              value={ratingAvg}
            />
            <Stat
              icon="/icon-review.png"
              label="Total Reviews"
              value={
                typeof reviews === "number" ? reviews.toLocaleString() : reviews
              }
            />
          </div>

          {/* Install */}
          <div className="mt-6">
            <button
              onClick={handleInstall}
              disabled={isInstalled}
              className={`px-5 py-2 rounded-md font-semibold text-white ${
                isInstalled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {isInstalled ? "Installed" : `Install Now (${size})`}
            </button>
          </div>
        </div>
      </div>


      {/* Ratings bars */}
      <div className=" rounded-2xl p-6">
        <h2 className="text-lg font-semibold mb-4">Ratings</h2>
        {[5, 4, 3, 2, 1].map((star) => (
          <div key={star} className="flex items-center gap-3 mb-2">
            <span className="w-12 text-sm">{star} star</span>
            <div className="flex-1 h-3 bg-gray-200 rounded-md">
              <div
                className="h-3 bg-orange-400 rounded-md"
                style={{ width: `${star * 20}%` }}
              />

            </div>
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="border rounded-2xl p-6">
        <h2 className="text-lg font-semibold mb-3">Description</h2>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
