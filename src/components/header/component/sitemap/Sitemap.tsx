import { AiFillShopping } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { GiShoppingCart } from "react-icons/gi";

import { Link } from "react-router-dom";
import { Profile } from "../profile";
import { Drawer } from "../drawer";

interface SitemapProps {
  isLargeScreen: boolean;
}
const url = [
  {
    url: "/search",
    icons: <IoSearchOutline size={20} />,
  },
  {
    url: "/wish-list",
    icons: <FaHeart className="text-xl" />,
  },
  {
    url: "/cart",
    icons: <GiShoppingCart className="text-xl" />,
  },
];

export const Sitemap = (props: SitemapProps) => {
  const { isLargeScreen } = props;

  const renderLinks = () => {
    return url.map((item, id) => (
      <Link
        key={id}
        to={item.url}
        className="btn btn-ghost btn-circle text-accent-content"
      >
        {item.icons}
      </Link>
    ));
  };

  return (
    <div className="navbar bg-base-100 max-w-7xl mx-auto">
      {isLargeScreen ? (
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-2xl font-black text-accent-content"
          >
            <AiFillShopping />
            Adrian Clothing & Shoes
          </Link>
        </div>
      ) : (
        <Drawer />
      )}

      <div className="flex-none">
        {renderLinks()}
        {/* <button className="text-accent-content btn btn-ghost btn-circle text-xl">
          <FaMoon />
        </button> */}
      </div>

      <Profile />
    </div>
  );
};

export default Sitemap;
