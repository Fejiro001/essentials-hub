import "../css/Cart.css";
import SecondaryCart from "../components/SecondaryCart";
import CartBody from "../components/CartBody";

function Cart() {
  return (
    <main className="cart-cont">
      <SecondaryCart />
      <CartBody />
    </main>
  );
}

export default Cart;
