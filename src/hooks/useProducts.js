// src/hooks/useProducts.js
import { useEffect, useState } from "react";
import appsData from "/public/appsData.json";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate fetch delay (optional)
    setProducts(appsData);
    setLoading(false);
  }, []);

  return { products, loading };
};

export default useProducts;
