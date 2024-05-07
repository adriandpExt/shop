import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";

import { SectionTitle } from "../../../components/section-title";

import { QuantityInput, SelectSize, SingleProductRating } from "../component";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../../api/Products";
import { Product as ProductProps } from "../../../api/types";

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [size, setSize] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [productById, setProductById] = useState<ProductProps | null>(null);

  const rating: string[] = [];
  const sizeList: number[] = [5, 6, 7, 8, 9, 10];

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (id) {
          const productData = await getProductById(id);
          setProductById(productData);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleNavigate = () => {
    navigate("/cart");
  };
  return (
    <>
      <SectionTitle title="Product page" path="Home | Shop | Product page " />

      <div className="grid grid-cols-2 max-w-7xl mx-auto mt-5 max-lg:grid-cols-1 max-lg:mx-5">
        {productById && (
          <>
            <div className="product-images flex flex-col justify-center max-lg:justify-start">
              <img
                src={`https://${productById.image}`}
                className="w-96 text-center border border-gray-600 cursor-pointer"
                alt={""}
              />

              <div className="other-product-images mt-1 grid grid-cols-3 w-96 gap-y-1 gap-x-2 max-sm:grid-cols-2 max-sm:w-64">
                <img
                  src={`https://${productById?.image}`}
                  alt=""
                  className="w-32 border border-gray-600 cursor-pointer"
                />
              </div>
            </div>

            <div className="single-product-content flex flex-col gap-y-5 max-lg:mt-2">
              <h2 className="text-3xl max-sm:text-3xl text-accent-content">
                {productById?.title}
              </h2>
              <SingleProductRating rating={rating} />

              <p className="text-3xl text-error">${productById?.price}</p>
              <div className="text-xl max-sm:text-lg text-accent-content">
                {productById?.brandName}
              </div>
              <div className="text-2xl">
                <SelectSize sizeList={sizeList} size={size} setSize={setSize} />
              </div>
              <div>
                <label htmlFor="Quantity" className="sr-only">
                  Quantity
                </label>

                <div className="flex items-center gap-1">
                  <QuantityInput
                    quantity={quantity}
                    setQuantity={setQuantity}
                  />
                </div>
              </div>
              <div className="flex flex-row gap-x-2 max-sm:flex-col max-sm:gap-x">
                <button
                  className="btn bg-blue-600 hover:bg-blue-500 text-white"
                  onClick={() => handleNavigate()}
                >
                  <FaCartShopping className="text-xl mr-1" />
                  Add to cart
                </button>
                <button className="btn bg-blue-600 hover:bg-blue-500 text-white">
                  <FaHeart className="text-xl mr-1" />
                  Wishlist
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Product;
