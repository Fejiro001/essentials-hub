import { useMemo, useState } from "react";
import { useCartStore } from "../stores/cartStore";
import { useForm } from "react-hook-form";
import "../css/Checkout.css";
import CheckoutForm from "../components/CheckoutForm";
import OrderSummary from "../components/OrderSummary";
import SuccessPopup from "../components/SuccessPopup";
import { Link } from "react-router-dom";
import { LuShoppingBag } from "react-icons/lu";
import { useOrderStore } from "../stores/orderStore";

function Checkout() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const isCartEmpty = cart.length === 0;

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const addOrder = useOrderStore((state) => state.addOrder);

  const subtotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);

  const vat = useMemo(() => subtotal * 0.12, [subtotal]);
  const total = useMemo(() => subtotal + vat, [subtotal, vat]);

  const handlePaymentSubmit = () => {
    const order = {
      id: crypto.randomUUID(),
      items: cart,
      subtotal,
      vat,
      total,
      createdAt: new Date().toISOString()
    };

    addOrder(order);

    setIsSubmitted(true);
    clearCart();
  };

  return (
    <main className="checkout">
      <section className="secondary-banner">
        <div className="container">
          <h2>CHECKOUT</h2>
        </div>
      </section>

      {isCartEmpty ? (
        <section className="checkout-body container">
          <div className="empty-checkout">
            <LuShoppingBag className="bag-icon" />
            <p>Your cart is empty. Add some products first.</p>
            <Link to="/catalog" className="primary-btn">
              Shop Now
            </Link>
          </div>
        </section>
      ) : (
        <div className="container">
          <section className="checkout-body checkout-layout">
            <CheckoutForm
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
              onSubmit={handlePaymentSubmit}
            />

            <OrderSummary
              cart={cart}
              subtotal={subtotal}
              vat={vat}
              total={total}
            />
          </section>
          <SuccessPopup isSubmitted={isSubmitted} />
        </div>
      )}
    </main>
  );
}

export default Checkout;
