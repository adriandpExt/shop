import CartItem from "../cart-item/CartItem";

const cartItems = [
  {
    id: "1",
    title: "lorem",
    image:
      "images.asos-media.com/products/walk-london-milano-lace-up-boots-in-black-leather/205082351-4?$n_640w$&wid=513&fit=constrain",
    brandName: "lorem",
    selectedSize: 10,
  },
];
export const CartItemList = () => {
  return (
    <>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          brandName={item.brandName}
          selectedSize={item.selectedSize}
        />
      ))}
    </>
  );
};

export default CartItemList;
