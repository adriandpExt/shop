import { FaHeartCrack } from "react-icons/fa6";
import { Product } from "../../../api/types";

interface WistItem {
  item: Product;
  counter: number;
}

const WishItem = (props: WistItem) => {
  const { item, counter } = props;

  return (
    <tr className="hover cursor-pointer">
      <th className="text-accent-content">{counter + 1}</th>
      <td className="text-accent-content">{item.title}</td>
      <td className="text-accent-content">{item?.availableSizes }</td>
      <td>
        <button className="btn btn-xs btn-error text-sm">
          <FaHeartCrack />
          remove from the wishlist
        </button>
      </td>
    </tr>
  );
};

export default WishItem;
