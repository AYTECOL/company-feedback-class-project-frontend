import React, { useEffect, useState } from 'react'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Dashboard from './pages/dashboard/DashBoard';
import Account from './pages/account/account';
import Nbar from './components/initial/nbar.jsx'
import { Circles } from 'react-loader-spinner';
import "./index.css";

export const AppFunction = () => {
    const token = sessionStorage.getItem("token");
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        setIsLogged(!!token);
    }, []);

    const handleLogin = (token) => {
        sessionStorage.setItem("token", token);
        setIsLogged(true);
    };

    const handleLogout = () => {
        sessionStorage.removeItem("token");
        setIsLogged(false);
    };

    const PrivateRoute = ({ children }) => {
        return isLogged ? children : <Navigate to="/login" />;
    };


    const router = createBrowserRouter([
    {
        path: "/",
        element: isLogged ? (
            <Navigate to="/dashboard" replace />
        ) : (
            <Navigate to="/login" replace />
         ),
    },
    {
        path: "/login",
        element: <Login onLogin={handleLogin} />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/dashboard",
        element: (
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          ),
    },
    {
        path: "/account",
        element: (
            <PrivateRoute>
              <Account />
            </PrivateRoute>
          ),
    },
    ]);

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
      <Nbar isLogged={isLogged} onLogout={handleLogout} onLogin={handleLogin} />
      <RouterProvider router={router} />
    </React.Suspense>
  );
};

export default AppFunction;