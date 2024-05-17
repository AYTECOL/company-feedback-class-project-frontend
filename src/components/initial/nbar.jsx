import { useState } from "react";
import { utilities, users, userSettings } from "../../data/links.js";
import userIcon from "../../assets/user.svg";
import logo from "../../assets/images/logo-company.jpeg";
import "./style.css";

export const Navbar = ({islogged}) => {
  console.log(islogged);

  const [showMenuList, setShowMenuList] = useState(false);

  const menuUser = () => {
    setShowMenuList(!showMenuList);
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
            <button className="user-button" onClick={menuUser}>
              <img src={userIcon} style={{ width: "20px", height: "20px" }} alt='userIcon'/>
            </button>

            {showMenuList && (
              <div className='px-4 bg-zinc-700 z-100 absolute top-[7vh] right-2 text-xs text-white py-4 flex gap-y-4 flex-col rounded-md'>
                 {userSettings.map((user) => {
              return (
                <button className="flex bg-white hover:bg-blue-950 text-black hover:text-white rounded-lg px-3 py-1 items-center justify-center">
                  <a href={user.to} key={user.name}>
                    {user.name}
                  </a>
                </button>
              );
            })}
              </div>
            )}
          </>
        ): (
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