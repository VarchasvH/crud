// dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// ? Css imports
import "./App.css";
import "./index.css";

// ? Component imports
import Register from "./components/Register.jsx";
import Home from "./components/Home.jsx";
import Update from "./components/Update.jsx";

// ? Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "$/update/:id",
    element: <Update />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
