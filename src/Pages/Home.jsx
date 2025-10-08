import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import SkeletonLoader from "../Components/SkeletonLoader";
import useProducts from "../hooks/useProducts";
import HeroSection from "../Pages/HeroSection";

const Home = () => {
  const { products = [], loading } = useProducts();
  const navigate = useNavigate();
  const featuredProducts = products.slice(0, 8); // only top 8

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12">
      <HeroSection />

      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Trending Apps</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore all trending apps on the market developed by us.
        </p>
      </div>

      {loading ? (
        <SkeletonLoader count={8} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredProducts.map((app) => (
            <ProductCard key={app.id} product={app} />
          ))}
        </div>
      )}

      {/* Show All Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/apps")} // Navigate to All Apps page
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#7f00ff] to-[#e100ff] text-white font-semibold hover:opacity-90 transition duration-300"
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default Home;
