// src/Routes/Routes.jsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Installation from "../Pages/Installation";
import ProductDetails from "../Pages/ProductDetails";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: (
      <img
        src="../assets/App-Error.png"
        alt="No apps found"
        className="
          mx-auto w-64 opacity-80
          transition-all duration-700 ease-in-out
          transform hover:scale-110 hover:rotate-6 hover:opacity-100
          animate-fadeIn
        "
      />
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "apps", element: <Products /> },
      { path: "installation", element: <Installation /> },
      { path: "product/:id", element: <ProductDetails /> },
    ],
  },
]);

export default router;
