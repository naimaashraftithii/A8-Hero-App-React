import React from "react";
import { createHashRouter } from "react-router-dom";

import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Installation from "../Pages/Installation";
import ProductDetails from "../Pages/ProductDetails";
import ErrorPage from "../Pages/ErrorPage";
import Loader from "../Components/Loader";

const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <Loader fullscreen size="sm" label="Loading..." />,
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



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,
//     errorElement: <ErrorPage />,
//     hydrateFallbackElement: (
//       <img
//         src="../assets/error-404.png"
//         alt="No apps found"
//         className="
//           mx-auto w-64 opacity-80
//           transition-all duration-700 ease-in-out
//           transform hover:scale-110 hover:rotate-6 hover:opacity-100
//           animate-fadeIn
//         "
//       />
//     ),
//     children: [
//       { index: true, element: <Home /> },
//       { path: "/products", element: <Products /> },
//       { path: "/apps", element: <Products /> },
//       { path: "/installation", element: <Installation /> },
//       { path: "/product/:id", element: <ProductDetails /> },
//     ],
//   },
// ]);

// export default router;
