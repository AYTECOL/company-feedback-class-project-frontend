import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import DashBoard from "./pages/dashboard/DashBoard.jsx";
import { UserSurveys } from "./pages/surveys/UserSurveys.jsx";
import Account from "./pages/account/account.jsx";
import Nbar from "./components/initial/nbar.jsx";
import { UserProvider } from './context/UserContext.jsx';
import { Oval } from "react-loader-spinner";
import "./index.css";

const token = sessionStorage.getItem("token");

function App() {
  const [islogged, setIsLogged] = useState(false);

  const handleLogin = (token) => {
    sessionStorage.setItem("token", token);
    setIsLogged(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setIsLogged(false);
  };
  useEffect(() => { 
    const token = sessionStorage.getItem("token"); 
    setIsLogged(!!token); 
  }, []);

  return (
    <UserProvider>
      <BrowserRouter>
        <React.Suspense
          fallback={
            <Oval
              visible={true}
              height="80"
              width="80"
              color="#1676be"
              secondaryColor="#fff"
              strokeWidth="4"
              ariaLabel="oval-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          }
        >
          {islogged ? (
            <Nbar islogged={islogged} onLogout={handleLogout} />
          ) : (
            <Nbar />
          )}
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={
                  <DashBoard />
              }
            />
            <Route
              path="/account"
              element={
                  <Account />
              }
            />
            <Route
              path="/"
              element={
                <Navigate to={islogged ? "/dashboard" : "/login"} replace />
              }
            />
          <Route path="/surveys" element={<UserSurveys />} />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
