import { ProductElement } from "../../components/product-element";

import { Hero, Stat } from "./component";

import "./Landing.css";

import { useNavigate } from "react-router-dom";

import { useGetProduct } from "../../query/Product";
import { Product } from "../../api/types";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateProduct = (id: string) => {
    navigate(`/shop/products/${id}`);
  };

  const product = useGetProduct();
  console.log(product.data);

  return (
    <main>
      <Hero />
      <Stat />

      <div className="selected-products">
        <h5 className="text-3xl text-center my-12 max-md:text-4xl text-accent-content">
          Trending Products
        </h5>

        <div className="selected-products-grid max-w-7xl mx-auto">
          {product?.data?.map((item: Product) => (
            <ProductElement
              product={item}
              key={item.id}
              handleNavigate={() => handleNavigateProduct(item?.id ?? "")}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
