// src/hooks/useProducts.js
import { useState, useEffect } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]); // <-- make sure default is []
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/appsData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading };
};

export default useProducts;
