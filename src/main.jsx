import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

function PrivateRoute({ children }) {
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
}

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
      <RouterProvider router={islogged ? routerPrivate : router} />
    </React.Suspense>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppFunction />
);
