import "../css/Cart.css";
import SecondaryCart from "../components/SecondaryCart";
import CartBody from "../components/CartBody";

function Cart() {
  return (
    <div className="cart-cont">
      <SecondaryCart />
      <CartBody />
    </div>
  );
}

export default Cart;
