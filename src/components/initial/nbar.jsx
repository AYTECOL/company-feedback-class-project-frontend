import { utilities } from "../../data/links.js";
import userIcon from "../../assets/user.svg";
import logo from "../../assets/images/logo-company.jpeg";
import "./style.css";

export const Navbar = () => {


  return (
    <nav className="navbar">
      <div className="container">
        <img src={logo} style={{ width: '80px', height: '80px', borderRadius: '30px'}} alt="logo" />
        <div className="options">
          {utilities.map((utility) => {
            return (
              <a
                key={utility.name}
                to={utility.to}
                className="items"
              >
                {utility.name}
              </a>
            );
          })}
        </div>

        <div className="flex flex-col items-center justify-center sm:w-full xl:items-end">

        </div>
      </div>
    </nav>
  );
}

export default Navbar;