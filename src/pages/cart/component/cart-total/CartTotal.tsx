export const CartTotal = () => {
  return (
    <div className="card bg-base-200">
      <div className="card-body">
        {/* SUBTOTAL */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2 text-accent-content">
          <span>Subtotal</span>
          <span className="font-medium">10000</span>
        </p>
        {/* SHIPPING */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2 text-accent-content">
          <span>Shipping</span>
          <span className="font-medium">50</span>
        </p>
        {/* Tax */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2 text-accent-content">
          <span>Tax 20%</span>
          <span className="font-medium">10000</span>
        </p>
        {/* Order Total */}
        <p className="flex justify-between text-sm mt-4 pb-2 text-accent-content">
          <span>Order Total</span>
          <span className="font-medium">10000</span>
        </p>
      </div>
    </div>
  );
};

export default CartTotal;
