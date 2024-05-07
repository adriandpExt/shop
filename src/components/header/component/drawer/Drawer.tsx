import { FaWindowClose } from "react-icons/fa";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { menuLinks } from "../../../nav-link/utils";

export const Drawer = () => {
  const renderMenu = () => {
    return menuLinks.map((item, id) => (
      <li className="text-xl" key={id}>
        <NavLink className="text-accent-content" to={item.path}>
          {item.title}
        </NavLink>
      </li>
    ));
  };
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn drawer-button">
          <HiMiniBars3BottomLeft className="text-4xl" />
        </label>
      </div>
      <div className="drawer-side z-10">
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content mt-4">
          <label htmlFor="my-drawer" className="btn drawer-button">
            <FaWindowClose className="text-3xl ml-auto" />
          </label>
          {/* Sidebar content here */}
          {renderMenu()}
          
          {/* {!isLoggedIn && ( */}
          <>
            <li className="text-xl">
              <NavLink className="text-accent-content" to="/login">
                Login
              </NavLink>
            </li>
            <li className="text-xl">
              <NavLink className="text-accent-content" to="/register">
                Register
              </NavLink>
            </li>
          </>
          {/* )} */}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
