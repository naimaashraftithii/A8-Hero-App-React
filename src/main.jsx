// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import "./index.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer position="bottom-right" autoClose={2000} />
  </StrictMode>
);

// {
//   path: "/product/:id",
//   element: <ProductDetails />,
// }

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* Declarative Mode */}
//     {/* <BrowserRouter>
//       <Routes>
//         <Route path='/secret' element={<App />} />
//       </Routes>
//     </BrowserRouter> */}
//     {/* Data Mode */}
//     <RouterProvider router={router} />
//      {/* <RouterProvider router={router} /> */}
//       <React.StrictMode>
//     <RouterProvider router={router} />
//     </React.StrictMode>
//     <ToastContainer position="bottom-right" autoClose={2000} />
//   </StrictMode>
// )
