import { LuShoppingCart } from "react-icons/lu";
import { useCartStore } from "../stores/cartStore";
import { Link } from "react-router-dom";

function CartFAB() {
  const cartCount = useCartStore((state) =>
    state.cart.reduce((total, item) => item.quantity + total, 0)
  );

  return (
    <Link to="/cart" className="cart-fab">
      <div className="count">{cartCount}</div>
      <LuShoppingCart />
    </Link>
  );
}

export default CartFAB;
