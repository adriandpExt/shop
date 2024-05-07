import {
  FaSquareXTwitter,
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareYoutube,
} from "react-icons/fa6";
import { NavLink } from "../nav-link";

export const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-10 max-md:px-0">
      <nav className="grid grid-flow-col max-sm:grid-flow-row gap-4">
        <NavLink handleClick={() => window.scrollTo(0, 0)} />
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <FaSquareXTwitter className="text-6xl max-sm:text-4xl text-accent-content" />
          <FaSquareFacebook className="text-6xl max-sm:text-4xl text-accent-content" />
          <FaSquareInstagram className="text-6xl max-sm:text-4xl text-accent-content" />
          <FaSquareYoutube className="text-6xl max-sm:text-4xl text-accent-content" />
        </div>
      </nav>
      <aside>
        <p className="text-2xl max-sm:text-sm text-accent-content">
          Copyright © {date} - All right reserved by Adrian Clothing & Shoes
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
