import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Products from "../Pages/Products"; // This is your "All Apps" page
import Wishlist from "../Pages/Wishlist";
import ProductDetails from "../Pages/ProductDetails";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "apps",  // <-- Add this
        element: <Products />,
      },
      {
        path: "Installation",
        element: <Installation />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);

export default router;
