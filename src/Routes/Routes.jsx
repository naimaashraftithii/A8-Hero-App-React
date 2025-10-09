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
    children: [
      { index: true, element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/apps", element: <Products /> },       // use Products here
      { path: "/installation", element: <Installation /> },
      { path: "/product/:id", element: <ProductDetails /> }, // correct
    ],
  },
]);

export default router;
