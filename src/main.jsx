import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import ProductList from "./components/ProductList/ProductList.jsx";
import ProductDetail from "./components/ProductDetail/ProductDetail.jsx";
import Wishlist from "./components/Wishlist/Wishlist.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx"; // Import Dashboard component
import Statistics from "./components/Statistics/Statistics.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <ProductList />,
      },
      {
        path: "product/:productId",
        element: <ProductDetail />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "dashboard", // Define the dashboard route here
        element: <Dashboard />,
      },

      {
        path: "statistics", // Add the Statistics route here
        element: <Statistics />
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
