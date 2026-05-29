import { LuCheck } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useCartStore } from "../stores/cartStore";

function SuccessPopup({ isSubmitted }) {
  const clearCart = useCartStore((state) => state.clearCart);

  if (!isSubmitted) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <LuCheck className="success-icon" />
        <h2>Thank You!</h2>
        <p>
          Your order has been placed. A confirmation is on its way to you inbox.
          We can't wait for you to unbox your essentials.
        </p>
        <div className="button-row">
          <Link to="/" onClick={() => clearCart()} className="secondary-btn">
            Back To Home
          </Link>
          <Link
            to="/orders"
            onClick={() => clearCart()}
            className="primary-btn">
            View Orders
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SuccessPopup;
