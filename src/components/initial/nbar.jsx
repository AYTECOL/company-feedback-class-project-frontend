import { utilities, users } from "../../data/links.js";
import userIcon from "../../assets/user.svg";
import logo from "../../assets/images/logo-company.jpeg";
import "./style.css";

export const Navbar = () => {
  const isNotUserCard = true;

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo-options">
          <img src={logo} style={{ width: '80px', height: '80px', borderRadius: '30px'}} alt="logo" />
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
        {!isNotUserCard ? (
          <></>
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
            <div className="block sm:hidden">
            {/* <button 
                className="bg-zinc-100 rounded-full w-[6vh] h-[6vh] flex items-center justify-center shadow-2xl"
              >
                <img src={userIcon} style={{ width: "20px", height: "20px" }} alt='userIcon'/>
              </button> */}

              {/* {showMenuList && (
                <div className='px-4 bg-zinc-700 z-100 absolute top-[7vh] right-2 text-xs text-white py-4 flex gap-y-4 flex-col rounded-md'>
                   {users.map((user) => {
                return (
                  <button className="flex bg-white hover:bg-blue-950 text-black hover:text-white rounded-lg px-3 py-1 items-center justify-center">
                    <a to={user.to} key={user.name}>
                      {user.name}
                    </a>
                  </button>
                );
              })}
              	</div>
              )} */}
            </div>
          </>
        )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;