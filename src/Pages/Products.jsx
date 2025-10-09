import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import useProducts from "../hooks/useProducts";
import Loader from "../Components/Loader";

const Products = () => {
  const { products = [], loading } = useProducts();
  const [search, setSearch] = useState("");

  const term = search.trim().toLowerCase();
  const filtered = term
    ? products.filter((p) => p.title.toLowerCase().includes(term))
    : products;

  if (loading) return <Loader fullscreen size="md" />;

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>Total Apps: {filtered.length}</div>
        <input
          type="search"
          placeholder="Search Apps"
          className="input input-bordered w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filtered.length === 0 ? (
        <div className="text-center mt-10">
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
};

export default Products;
