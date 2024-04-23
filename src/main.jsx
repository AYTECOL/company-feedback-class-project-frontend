import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import DashBoard from "./pages/dashboard/DashBoard.jsx";
import Nbar from "./components/initial/nbar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
  },
]);

const routerPrivate = createBrowserRouter([
  {
    path: "/dashboard",
    element: <DashBoard />,
  },
]);

const token = sessionStorage.getItem("token");

function PrivateRoute({ children }) {
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Nbar></Nbar>
    <RouterProvider router={router} />
  </React.StrictMode>
);
