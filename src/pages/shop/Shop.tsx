import { useNavigate } from "react-router-dom";
import { ProductElement } from "../../components/product-element";
import { SectionTitle } from "../../components/section-title";
import { productDetails } from "../home/utils";

import { Filters } from "./component";
import { useEffect, useState } from "react";
import { Product } from "../../api/types";
import { getProduct } from "../../api/Products";
import { Pagination } from "../../components/pagination";

const Shop = () => {
  const navigate = useNavigate();

  const [productsDisplay, setProductsDisplay] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;
  const totalPages = Math.ceil(productsDisplay.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productsToDisplay = productsDisplay.slice(startIndex, endIndex);

  useEffect(() => {
    const productDisplay = async () => {
      try {
        const products = await getProduct();
        setProductsDisplay(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    productDisplay();
  }, []);

  const handleNavigateProduct = (id: string) => {
    navigate(`/shop/products/${id}`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <main>
      <SectionTitle title="Shop" path="Home | Shop" />

      <div className="max-w-7xl mx-auto mt-5">
        <Filters />
        {productDetails.length === 0 && (
          <h2 className="text-accent-content text-center text-4xl my-10">
            No products found for this filter
          </h2>
        )}

        <div className="grid grid-cols-4 px-2 gap-y-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 shop-products-grid">
          {productsToDisplay.map((product, index) => (
            <ProductElement
              key={index}
              product={product}
              handleNavigate={() => handleNavigateProduct(product?.id)}
            />
          ))}
        </div>
        <div className="flex justify-center py-5">
          <Pagination
            count={totalPages}
            itemsPerPage={itemsPerPage}
            onChangePage={handlePageChange}
          />
        </div>
      </div>
    </main>
  );
};

export default Shop;
