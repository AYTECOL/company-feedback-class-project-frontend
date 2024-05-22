import { useEffect, useRef, useState } from "react";
import { utilities } from "../../data/links.js";
import { useNavigate } from "react-router-dom";
import userIcon from "../../assets/user.svg";
import logo from "../../assets/images/logo-company.jpeg";
import "./style.css";

export const Navbar = ({ islogged, onLogout }) => {
  const navigate = useNavigate();
  const [showMenuList, setShowMenuList] = useState(false);
  const menuListRef = useRef(null);

  const menuUser = () => {
    setShowMenuList(!showMenuList);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    onLogout();
    navigate("/login");
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleClickOutside = (event) => {
    if (menuListRef.current && !menuListRef.current.contains(event.target)) {
      setShowMenuList(false);
    }
  };

  useEffect(() => {
    if (showMenuList) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenuList]);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo-options">
          <a href="/" onClick={(e) => e.preventDefault()}>
            <img
              src={logo}
              style={{ width: "50px", height: "50px", borderRadius: "10px" }}
              alt="logo"
            />
          </a>
          <div className="options">
            {utilities.map((utility) => {
              return (
                <a
                  key={utility.name}
                  href={utility.to}
                  className="items"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(utility.to);
                  }}
                >
                  {utility.name}
                </a>
              );
            })}
          </div>
        </div>

        <div className="user-options">
          {islogged ? (
            <>
              <div className="user-button" onClick={menuUser}>
                <img
                  src={userIcon}
                  style={{ width: "20px", height: "20px" }}
                  alt="userIcon"
                />
              </div>
              <div 
                ref={menuListRef}
                className={`menu-list ${showMenuList ? "show" : ""}`}
              >
                <button 
                  className="menu-options"
                  onClick={() => handleNavigation('/account')}
                >
                  <a href="/account">Cuenta</a>
                </button>
                <button 
                  className="menu-options"
                  onClick={handleLogout}
                >
                  <a href="/">Salir</a>
                </button>
              </div>
            </>
          ) : (
            <div className="buttons">
                <button onClick={() => handleNavigation('/login')}>
                  <a href="/login">Iniciar Sesión</a>
                </button>
                <button onClick={() => handleNavigation('/register')}>
                  <a href="/register">Registrarse</a>
                </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
