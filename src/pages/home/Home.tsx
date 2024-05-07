import { ProductElement } from "../../components/product-element";

import { Hero, Stat } from "./component";

import "./Landing.css";
import { getProduct } from "../../api/Products";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Product } from "../../api/types";

const Home = () => {
  const navigate = useNavigate();

  const [productsDisplay, setProductsDisplay] = useState<Product[]>([]);

  const handleNavigateProduct = (id: string) => {
    navigate(`/shop/products/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProduct();
        setProductsDisplay(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <Hero />
      <Stat />

      <div className="selected-products">
        <h5 className="text-3xl text-center my-12 max-md:text-4xl text-accent-content">
          Trending Products
        </h5>

        <div className="selected-products-grid max-w-7xl mx-auto">
          {productsDisplay.slice(0, 4).map((product, index) => (
            <ProductElement
              product={product}
              key={index}
              handleNavigate={() => handleNavigateProduct(product.id)}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
