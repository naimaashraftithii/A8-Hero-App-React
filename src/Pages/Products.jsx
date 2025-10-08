import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import SkeletonLoader from "../Components/SkeletonLoader";
import useProducts from "../hooks/useProducts";

const Products = () => {
  const { products = [], loading } = useProducts(); // default empty array
  const [search, setSearch] = useState("");

  // live search (case-insensitive)
  const term = search.trim().toLowerCase();
  const filteredApps = term
    ? products.filter((app) => app.title.toLowerCase().includes(term))
    : products;

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-8">
      {/* Title Section */}
      <div className="text-center mb-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">All Apps</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore all trending apps on the market developed by us.
        </p>
      </div>

      {/* Search & Stats */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="text-gray-700 font-medium">
          Total Apps: {filteredApps.length}
        </div>
        <div>
          <input
            type="search"
            placeholder="Search Apps"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered w-full md:w-64"
          />
        </div>
      </div>

      {/* App Section */}
      {loading ? (
        <SkeletonLoader count={12} />
      ) : filteredApps.length === 0 ? (
        <p className="text-center text-gray-500 mt-8 text-lg">No App Found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredApps.map((app) => (
            <Link key={app.id} to={`/product/${app.id}`}>
              <ProductCard product={app} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
