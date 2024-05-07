import { SectionTitle } from "../../components/section-title";
import { CartItemList, CartTotal } from "./component";

const Cart = () => {
  return (
    <>
      <SectionTitle title="Cart" path="Home | Cart" />

      <div className="mt-8 grid gap-8 lg:grid-cols-12 max-w-7xl mx-auto px-10">
        <div className="lg:col-span-8">
          <CartItemList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotal />
        </div>
      </div>
    </>
  );
};

export default Cart;
