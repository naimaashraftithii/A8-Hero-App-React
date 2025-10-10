
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import useProducts from "../hooks/useProducts";
import Loader from "../Components/Loader";
import emptyImg from "../assets/App-Error.png";

export default function Products() {
  const { products = [], loading } = useProducts();
  const [search, setSearch] = useState("");

  const term = search.trim().toLowerCase();
  const filtered = term
    ? products.filter((p) => p.title?.toLowerCase().includes(term))
    : products;

  if (loading) return <Loader fullscreen size="md" label="Loading apps..." />;

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-8">
      {/* Top bar */}
      <div className="text-center">
             <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-black drop-shadow-lg">
                 Our All Applications
              </h2>

        <p className="pt-4 md:pt-6 text-sm md:text-base text-[#627382] max-w-2xl mx-auto mb-8 drop-shadow-md">
         Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:justify-between sm:items-center mb-6">
        <div className="font-medium">Total Apps: {filtered.length}</div>
        <input
          type="search"
          placeholder="Search Apps"
          className="input input-bordered w-full sm:w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Empty state */}
      {filtered.length === 0 ? (
        <div className="text-center mt-10">
          <img
            src={emptyImg}
            alt="No apps found"
            className="mx-auto w-56 opacity-90 animate-fadeIn"
          />
          <p className="text-gray-500 mt-4">No App Found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((app) => (
            <Link key={app.id} to={`/product/${app.id}`} className="block">
              <ProductCard product={app} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
