import { NavLink as NaviLink } from "react-router-dom";
import { menuLinks } from "./utils";

interface NaviLinkProps {
  handleClick?: () => void;
}
export const NavLink = (props: NaviLinkProps) => {
  const { handleClick } = props;
  
  const renderLinks = () => {
    return menuLinks.map((item, id) => (
      <NaviLink
        className="text-accent-content"
        to={item.path}
        key={id}
        onClick={handleClick}
      >
        {item.title}
      </NaviLink>
    ));
  };
  return (
    <>
      {renderLinks()}
      {/* {!isLoggedIn && ( */}
      <>
        <NaviLink className="text-accent-content" to="/login">
          Login
        </NaviLink>
        <NaviLink className="text-accent-content" to="/register">
          Register
        </NaviLink>
      </>
      {/* )} */}
    </>
  );
};

export default NavLink;
