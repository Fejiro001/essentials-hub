import { useCartStore } from "../stores/cartStore";

function SecondaryCart() {
  const cart = useCartStore((state) => state.cart);
  return (
    <section className="cart-banner">
      <div className="container">
        <h2>Your Cart</h2>
        <p>{cart.length} item(s) in your cart</p>
      </div>
    </section>
  );
}

export default SecondaryCart;
