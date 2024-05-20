import { useEffect, useState } from "react";
import { utilities, users, userSettings } from "../../data/links.js";
import { useNavigate } from "react-router-dom";
import userIcon from "../../assets/user.svg";
import logo from "../../assets/images/logo-company.jpeg";
import "./style.css";

export const Navbar = ({islogged, onLogout, onLogin }) => {
  const navigate = useNavigate();
  const [showMenuList, setShowMenuList] = useState(false);

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

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      onLogin(sessionStorage.getItem("token"));
    }
  }, [onLogin]);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo-options">
          <a href="/" onClick={(e) => e.preventDefault()}>
            <img src={logo} style={{ width: '80px', height: '80px', borderRadius: '30px'}} alt="logo"/>
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
              <img src={userIcon} style={{ width: "20px", height: "20px" }} alt='userIcon'/>
            </div>

            <div className={`menu-list ${showMenuList ? 'show' : ''}`}>
             { userSettings.map((user) => {
               if (user.name === "Salir") {
                return (
                  <button className="menu-options" onClick={handleLogout} key={user.name}>
                    <a href={user.to}>
                      {user.name}
                    </a>
                  </button>
                );
              }
                return (
                  <button className="menu-options" key={user.name} onClick={() => handleNavigation(user.to)}>
                    <a href={user.to} key={user.name}>
                      {user.name}
                    </a>
                  </button>
                );
              })}
          </div>
          </>
        ):(
          <>
            <div className="buttons"> 
              {users.map((user) => {
                return (
                  <button key={user.name} onClick={() => handleNavigation(user.to)}>
                    <a href={user.to}>{user.name}</a>
                  </button>
                );
              })}
            </div> 
          </>
        )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;