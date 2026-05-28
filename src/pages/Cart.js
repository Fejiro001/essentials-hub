import SecondaryCart from "../components/SecondaryCart";
import CartBody from "../components/CartBody";


function Cart() {
  let cart = ['']
  return (
    <div className="cart-cont">
      <SecondaryCart cart={cart} />
      <CartBody cart={cart} />
    </div>
  );
}

export default Cart;
