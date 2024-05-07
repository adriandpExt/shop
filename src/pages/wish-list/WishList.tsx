import { useEffect, useState } from "react";
import { Product } from "../../api/types";
import { SectionTitle } from "../../components/section-title";
import WishItem from "./wish-item";
import { getWishlist } from "../../api/Products";

const WishList = () => {
  const [displayWishlist, setDisplayWishlist] = useState<Product[]>([]);

  useEffect(() => {
    const wishlistDisplay = async () => {
      try {
        const wishlist = await getWishlist();
        setDisplayWishlist(wishlist);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    wishlistDisplay();
  }, []);
  return (
    <>
      <SectionTitle title="Wishlist" path="Home | Wishlist" />
      <div className="max-w-7xl mx-auto">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th className="text-accent-content">Name</th>
                <th className="text-accent-content">Size</th>
                <th className="text-accent-content">Action</th>
              </tr>
            </thead>
            <tbody>
              {displayWishlist.map((item, index) => (
                <WishItem item={item} key={index} counter={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default WishList;
