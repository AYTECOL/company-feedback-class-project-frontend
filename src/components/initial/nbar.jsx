import { useState } from "react";
import { utilities, users, userSettings } from "../../data/links.js";
import userIcon from "../../assets/user.svg";
import logo from "../../assets/images/logo-company.jpeg";
import "./style.css";

export const Navbar = ({islogged,  onLogout}) => {
  const [showMenuList, setShowMenuList] = useState(false);

  const menuUser = () => {
    setShowMenuList(!showMenuList);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    onLogout();
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo-options">
          <a href="/">
            <img src={logo} style={{ width: '80px', height: '80px', borderRadius: '30px'}} alt="logo"/>
          </a>
          <div className="options">
            {utilities.map((utility) => {
              return (
                <a
                  key={utility.name}
                  href={utility.to}
                  className="items"
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
                  <button className="menu-options" key={user.name}>
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
                  <button key={user.name}>
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