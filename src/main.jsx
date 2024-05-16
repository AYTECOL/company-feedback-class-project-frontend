import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import DashBoard from "./pages/dashboard/DashBoard.jsx";
import Account from "./pages/account/account.jsx";
import Nbar from "./components/initial/nbar.jsx";
import { Circles } from "react-loader-spinner";

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
  {
    path: "/account",
    element: <Account />,
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

console.log(sessionStorage);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Suspense
    fallback={
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
       />
    }
  >
    <Nbar></Nbar>
    <RouterProvider router={router} />
  </React.Suspense>
);
