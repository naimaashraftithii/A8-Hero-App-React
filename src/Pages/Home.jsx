
import React from "react";
import HeroSection from "./HeroSection";

import useProducts from "../hooks/useProducts";
import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import SkeletonLoader from "../Components/SkeletonLoader";

const Home = () => {
  const { products = [], loading } = useProducts();
  const trending = products.slice(0, 8);

  return (
    <div className="space-y-10 mb-10">
      <HeroSection />
      

      <section className="max-w-screen-xl mx-auto px-4 mb-5 md:px-8 py-12 space-y-8">
        {/* Section Top */}
        <div className="text-center mb-5">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Trending Apps
          </h2>
          <p className="text-gray-600">
            Explore all trending apps on the market developed by us.
          </p>
        </div>

        {/* App Section */}
        {loading ? (
          <SkeletonLoader count={8} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trending.map((app) => (
              <Link key={app.id} to={`/product/${app.id}`} className="block">
                <ProductCard product={app} />
              </Link>
            ))}
          </div>
        )}

        {/*  Button */}
        <div className="text-center">
          <Link
            to="/apps"
            className="inline-block px-6 py-3 mt-4 rounded-lg bg-gradient-to-r from-[#7f00ff] to-[#e100ff] text-white font-semibold hover:opacity-90 transition duration-300"
          >
            Show All
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
