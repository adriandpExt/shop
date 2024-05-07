// import { Link } from "react-router-dom";

interface Product {
  id?: string;
  title?: string;
  image?: string;
  rating?: number;
  price?: string;
  brandName?: string;
}
interface ProductElementProps {
  product: Product;
  handleNavigate: (product: Product) => void;
}

export const ProductElement = (props: ProductElementProps) => {
  const { product, handleNavigate } = props;

  return (
    <div className="max-w-80 max-h-70">
      <div
        className="shadow-md rounded-lg max-w-sm bg-base-100"
        onClick={() => handleNavigate(product)}
      >
        <img
          className="rounded-t-lg p-8"
          src={`https://${product.image}`}
          alt="product image"
        />

        <div className="px-5 pb-5" onClick={() => handleNavigate(product)}>
          <h3 className="font-semibold text-xl tracking-tight mb-5 text-accent-content">
            {product.title}
          </h3>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-accent-content">
              ${product.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductElement;
