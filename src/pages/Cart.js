import "../css/Cart.css";
import SecondaryCart from "../components/SecondaryCart";
import CartBody from "../components/CartBody";
import PageWrapper from "../components/PageWrapper";

function Cart() {
  return (
    <PageWrapper>
      <main className="cart-cont">
        <SecondaryCart />
        <CartBody />
      </main>
    </PageWrapper>
  );
}

export default Cart;
