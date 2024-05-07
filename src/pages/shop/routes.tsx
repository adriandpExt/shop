// import { Outlet } from "react-router-dom";
import { RouteType } from "../../routes/types";
import Shop from "./Shop";
import Product from "./product";

export const shopRoutes: RouteType[] = [
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/shop/products/:id",
    element: <Product />,
  },
];
