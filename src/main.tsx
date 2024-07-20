import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import Faq from "./pages/Faq.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import Products from "./pages/Products.tsx";
import Videos from "./pages/Videos.tsx";
import { StrictMode } from "react";
import ProductDetail from "./pages/ProductDetail.tsx";
import ProductCatagory from "./pages/ProductCatagory.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about_us",
        element: <AboutUs />,
      },
      {
        path: "contact_us",
        element: <ContactUs />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: "videos",
        element: <Videos />,
      },
      {
        path:"product_detail",
        element: <ProductDetail />,
      },
      {
        path:"product_catagory",
        element: <ProductCatagory />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
