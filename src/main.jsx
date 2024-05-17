import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import DashBoard from "./pages/dashboard/DashBoard.jsx";
import Account from "./pages/account/account.jsx";
import Nbar from "./components/initial/nbar.jsx";
import { Circles } from "react-loader-spinner";
import "./index.css";

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

function AppFunction () {
  const [islogged, setIsLogged] = useState(!!sessionStorage.getItem("token"));
  
  const handleLogin = (token) => {
    sessionStorage.setItem("token", token);
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
  };

  useEffect(() => {
    setIsLogged(!!sessionStorage.getItem("token"));
  }, []);

  const PrivateRoute = ({ children }) => {
      return islogged ? children : <Navigate to="/login" />;
  }

  return (
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
      <Nbar islogged={token} onLogout={handleLogout} onLogin={handleLogin} />
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashBoard />
            </PrivateRoute>
          }
        />
        <Route
          path="/account"
          element={
            <PrivateRoute>
              <Account />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </React.Suspense>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={createBrowserRouter([{ path: "*", element: <AppFunction /> }])} />
);
