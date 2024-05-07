import { Link } from "react-router-dom";
import "./Hero.css";

export const Hero = () => {
  return (
    <div className="hero bg-base-300 bg-blend-overlay">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-6xl font-bold max-md:text-4xl text-accent-content">
            "Discover Your Style, Shop with Ease!"
          </h1>
          <p className="py-6 text-2xl max-md:text-lg text-accent-content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
            officiis explicabo itaque adipisci quo numquam quam tempora aliquam
            neque, ipsa quisquam hic dolorum corporis quis? Doloremque vero qui
            consectetur rerum.
          </p>
          <Link
            to="/shop"
            className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
