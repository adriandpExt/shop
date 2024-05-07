import { RouteType } from "./types";

import About from "../pages/about";
import Contact from "../pages/contact";
import Home from "../pages/home/Home";
import WishList from "../pages/wish-list";

import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import { shopRoutes } from "../pages/shop/routes";
import Cart from "../pages/cart";
import Profile from "../pages/auth/profile";

// import { Outlet } from "react-router-dom";

export const routesConfig: RouteType[] = [
  {
    path: "/",
    pageTitle: "Home",
    element: <Home />,
  },
  {
    path: "/about-us",
    pageTitle: "About",
    element: <About />,
  },
  {
    path: "/contact",
    pageTitle: "Contact",
    element: <Contact />,
  },
  {
    path: "/login",
    pageTitle: "Login",
    element: <Login />,
  },
  {
    path: "/register",
    pageTitle: "Register",
    element: <Register />,
  },
  {
    path: "/user-profile",
    pageTitle: "Profile",
    element: <Profile />,
  },

  {
    path: "/wish-list",
    pageTitle: "Wish List",
    element: <WishList />,
  },
  {
    path: "/cart",
    pageTitle: "Cart",
    element: <Cart />,
  },
  ...shopRoutes,
];
