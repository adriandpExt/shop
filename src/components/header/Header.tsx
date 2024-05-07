import { FaHeadphones, FaRegEnvelope } from "react-icons/fa";

import { Sitemap } from "./component/sitemap";
import { NavLink } from "../nav-link";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderMenu = () => {
    return (
      <>
        <Sitemap isLargeScreen={isLargeScreen} />
        {isLargeScreen && (
          <div className="navbar-bottom-menu border-y border-gray-800 ">
            <div className="container text-2xl navlinks-container space-x-5 justify-center flex">
              <NavLink />
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <div>
      <div className=" topbar border-b border-gray-800">
        <ul className="flex justify-center space-x-6">
          <li className="flex justify-center items-center">
            <FaHeadphones className="text-xl max-sm:text-lg text-accent-content" />
            <span className="text-xl max-sm:text-lg text-accent-content">
              +381 61/123-456
            </span>
          </li>
          <li className="flex justify-center items-center">
            <FaRegEnvelope className="text-xl max-sm:text-lg text-accent-content" />
            <span className="text-xl max-sm:text-lg text-accent-content">
              support@test.com
            </span>
          </li>
        </ul>
      </div>
      {renderMenu()}
    </div>
  );
};

export default Header;
